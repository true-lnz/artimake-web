"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Что делает умное кресло Artimake?",
    answer:
      "Встроенные датчики отслеживают положение корпуса и поясницы в реальном времени. При отклонении от настроенной посадки кресло подаёт сигнал, а приложение показывает уведомление.",
  },
  {
    question: "Как подключить кресло к мобильному приложению?",
    answer:
      "Установите приложение, включите Bluetooth, найдите совместимое кресло поблизости и подключите его. После подключения пройдите калибровку нейтральной и комфортной посадки.",
  },
  {
    question: "Зачем нужна калибровка посадки?",
    answer:
      "Во время калибровки приложение запоминает удобное исходное положение пользователя. Это позволяет креслу точнее определять отклонения от заданной посадки.",
  },
  {
    question: "Нужны ли регистрация и интернет для работы приложения?",
    answer:
      "Нет. Приложение работает локально на телефоне, не требует аккаунта и регистрации. Данные о посадке и настройки хранятся на устройстве пользователя и не передаются на серверы Artimake.",
  },
  {
    question: "Является ли умное кресло медицинским изделием?",
    answer:
      "Нет. Умное кресло Artimake и приложение не предназначены для диагностики, лечения или профилактики заболеваний и не заменяют консультацию врача. Рекомендации приложения носят информационный характер.",
  },
];

export const faqStructuredData = faqItems.map(({ question, answer }) => ({
  "@type": "Question",
  name: question,
  acceptedAnswer: {
    "@type": "Answer",
    text: answer,
  },
}));

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <h2 id="faq-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-3 text-muted-foreground">
            Короткие ответы о кресле Artimake и мобильном приложении.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full rounded-xl border px-5">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
