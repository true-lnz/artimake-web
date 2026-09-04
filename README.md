 # Artimake Web

Маркетинговый сайт Artimake на Next.js, React, TypeScript и Tailwind CSS.

## Запуск

Требуются Node.js 20+ и pnpm 10.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Команды

- `pnpm dev` — development-сервер.
- `pnpm build` — production-сборка.
- `pnpm start` — production-сервер.
- `pnpm lint` / `pnpm lint:fix` — ESLint.
- `pnpm format` / `pnpm format:check` — Prettier.

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните SMTP-параметры. `.env.local` не коммитится.

```env
NEXT_PUBLIC_APP_NAME=Artimake
NEXT_PUBLIC_APP_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail-address
SMTP_PASS=your-gmail-app-password
FEEDBACK_TO_EMAIL=lansonzgroup@yandex.ru
```

Используйте Gmail App Password. SMTP-данные доступны только серверному endpoint-у `/api/feedback`.

## Структура и маршруты

- `src/app` — страницы Next.js и API.
- `src/components` — общие, mobile-app и shadcn UI-компоненты.
- `src/constants` — данные features и тарифов.
- `public/images`, `public/icons` — публичные ассеты.
- `/` — главная страница с teal-прогрессбаром скролла.
- `/mobile-app` — презентация мобильного приложения.
- `POST /api/feedback` — отправка формы обратной связи.

## Обратная связь

Кнопка «Связаться с нами» в футере открывает Dialog с полями имени, телефона, необязательной почты и комментария. Данные валидируются на клиенте и сервере; honeypot-поле отсекает простой автоматический спам. Письма отправляются на `lansonzgroup@yandex.ru`.

## Деплой

Задайте env-переменные в настройках hosting-провайдера и выполните `pnpm build`. SMTP-пароль нельзя хранить в коде, README или переменных `NEXT_PUBLIC_*`.
