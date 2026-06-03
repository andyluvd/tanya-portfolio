# Tech Stack

## Основной стек

### Next.js 15 (App Router)
- **Зачем:** SSG (Static Site Generation) — лендинг генерируется как статика, грузится мгновенно
- **SEO:** автоматический `sitemap.xml`, мета-теги через `metadata` API
- **Команда создания проекта:**
```bash
npx create-next-app@latest portfolio --js --tailwind --eslint --app --src-dir --no-turbopack
```
- Выбрать: JavaScript (не TypeScript), src/ директория, App Router

### Tailwind CSS v3
- **Зачем:** утилитарные классы, встроенный `dark:` префикс, быстрая вёрстка
- **Кастомизация** в `tailwind.config.js`:
```js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#7B4F32',
          dark: '#C87E45',
        },
        surface: {
          light: '#F5EFE7',
          dark: '#2E1F14',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
```

### Framer Motion v11
- **Зачем:** анимации при скролле, stagger-эффекты, transition между состояниями
- **Установка:** `npm install framer-motion`
- **Ключевые хуки:** `useInView`, `useAnimation`, `motion.div`
- **Базовый паттерн появления:**
```jsx
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
```

### next-themes
- **Зачем:** переключение тёмной/светлой темы без мигания при загрузке
- **Установка:** `npm install next-themes`
- **Настройка:** обернуть `children` в `layout.jsx` в `<ThemeProvider attribute="class">`

### Lucide React
- **Зачем:** SVG-иконки, уже есть в shadcn/ui
- **Установка:** `npm install lucide-react`
- **Использование:** `import { Send, Phone, Mail } from 'lucide-react'`

### shadcn/ui (опционально)
- **Зачем:** готовые компоненты Button, Card, Badge — настраиваются под палитру
- **Установка:** `npx shadcn@latest init`
- **Нужные компоненты:** `npx shadcn@latest add button card badge`

### EmailJS
- **Зачем:** отправка формы контактов без бэкенда
- **Установка:** `npm install @emailjs/browser`
- **Регистрация:** emailjs.com → создать Service (Gmail) → Template → получить PUBLIC_KEY
- **Конфиг** в `src/lib/emailjs.js`:
```js
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}
```

## Деплой

### Vercel
- **Зачем:** бесплатный план, автодеплой из GitHub, CDN по всему миру, кастомный домен бесплатно
- **Шаги:**
  1. Залить проект на GitHub
  2. vercel.com → Import Project → выбрать репозиторий
  3. Настройки по умолчанию работают для Next.js
  4. Добавить переменные окружения (EmailJS ключи)

## Шрифты
Подключаются через `next/font/google` в `layout.jsx`:
```jsx
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})
```

## Версии (актуально на июнь 2025)
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "framer-motion": "^11.0.0",
  "next-themes": "^0.3.0",
  "lucide-react": "^0.400.0",
  "@emailjs/browser": "^4.0.0",
  "tailwindcss": "^3.4.0"
}
```

## Полный список команд установки
```bash
npx create-next-app@latest portfolio --js --tailwind --eslint --app --src-dir
cd portfolio
npm install framer-motion next-themes lucide-react @emailjs/browser
npx shadcn@latest init
npx shadcn@latest add button card badge
```
