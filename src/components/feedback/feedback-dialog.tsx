"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    if (!response.ok) {
      setStatus("error");
      setError("Не удалось отправить сообщение. Попробуйте ещё раз.");
      return;
    }
    setStatus("success");
    event.currentTarget.reset();
    setTimeout(() => {
      setOpen(false);
      setStatus("idle");
    }, 1800);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Связаться с нами
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Связаться с нами</DialogTitle>
          <DialogDescription>
            Оставьте контакты — мы ответим и поможем разобраться с вопросом.
          </DialogDescription>
        </DialogHeader>
        {status === "success" ? (
          <p className="py-8 text-center text-primary">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </p>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <Input name="name" required placeholder="Ваше имя, например Анна" aria-label="Имя" />
            <Input
              name="phone"
              required
              placeholder="Телефон для связи: +7 900 000-00-00"
              aria-label="Телефон"
            />
            <Input
              name="email"
              type="email"
              placeholder="Почта для ответа (необязательно)"
              aria-label="Почта"
            />
            <Textarea
              name="comment"
              required
              placeholder="Опишите ваш вопрос или задачу — чем подробнее, тем лучше"
              aria-label="Комментарий"
            />
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={status === "loading"} className="w-full">
              {status === "loading" ? "Отправляем…" : "Отправить сообщение"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
