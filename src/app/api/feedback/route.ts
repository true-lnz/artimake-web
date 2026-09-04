import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, email, comment, website } = await request.json();
    if (website) return NextResponse.json({ ok: true });
    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      typeof phone !== "string" ||
      phone.trim().length < 5 ||
      typeof comment !== "string" ||
      comment.trim().length < 3
    )
      return NextResponse.json(
        { error: "Проверьте заполнение обязательных полей." },
        { status: 400 },
      );
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.FEEDBACK_TO_EMAIL,
      replyTo: typeof email === "string" && email ? email.trim() : undefined,
      subject: `Новая заявка с сайта от ${name.trim()}`,
      text: `Имя: ${name.trim()}\nТелефон: ${phone.trim()}\nПочта: ${email || "не указана"}\n\nКомментарий:\n${comment.trim()}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Не удалось отправить сообщение." }, { status: 500 });
  }
}
