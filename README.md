# Climat Garden — Landing Page

Сучасний SPA лендінг для компанії Climat Garden.

## Стек

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** — стилізація
- **lucide-react** — іконки
- Google Fonts: Playfair Display + Nunito

## Запуск

```bash
npm install
npm run dev
```

## Збірка

```bash
npm run build
npm run preview
```

## Налаштування контактів

Відкрийте файл `src/constants.ts` і замініть значення:

```ts
export const PHONE_NUMBER = "+380XXXXXXXXX";
export const PHONE_DISPLAY = "+38 (0XX) XXX-XX-XX";
export const INSTAGRAM_URL = "https://instagram.com/climatgarden";
export const INSTAGRAM_HANDLE = "@climatgarden";
```

## Логотип

Покладіть файл `logo.png` у папку `public/`.
Рекомендований розмір: PNG з прозорим фоном, висота ~120px.

## Структура проєкту

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ServiceSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── SectionDivider.tsx
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useSticky.ts
├── constants.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Кольорова палітра

Базується на логотипі Climat Garden:

- **Teal #3a7d7a** — основний акцент (гілки дерева)
- **Green #4ea84b** — листя, CTA-кнопки
- **Teal-950 #1c3a38** — темний фон футера/контактів
