# Current Status

## Текущий этап
**Этап 2 — Hero + About** (завершён ✅)

Интро-блок полностью реализован: фото на всю ширину, стеклянная пилюля с именем, glassmorphism-карточка «Обо мне».

---

## Что сделано (полная история)

### Этап 1 — Фундамент ✅
- Next.js 15, React 19, Tailwind CSS 3, Framer Motion 11
- Все секции и UI-компоненты созданы
- CSS-переменные палитры, шрифты Playfair Display + Inter
- `npm run build` — успешно

### Этап 2 — Hero + About ✅
- **Фото** (`public/photo.jpg`): `w-full h-auto`, sticky при скролле, нижний край плавно растворяется через CSS mask
- **Пилюля «Золотарёва Татьяна»** — три состояния через JS (`IntroSection.jsx`):
  1. `natural` — в потоке выше фото (scroll = 0)
  2. `fixed` — `position: fixed; top: 16px` при скролле над фото
  3. `floating` — первый элемент блока «Обо мне», уезжает вместе с ним
- **Блок «Обо мне»** — glassmorphism-карточка (`backdrop-blur-xl`, `bg-white/80`), текст с акцентными словами, Framer Motion stagger
- **Navbar** — убран, переключатель темы перенесён в Footer

### Этап 3 — Services + Skills (базовая вёрстка) ✅
- `ServiceCard` + `ServicesSection` (сетка 2×2)
- `SkillsSection` с тегами инструментов и AI
- Нужна доработка: визуал, иконки, анимации

### Этап 4 — Cases (базовая вёрстка) ✅
- `MetricCounter` + `CasesSection` (метрики + скриншот)
- Нужно: добавить `public/cases/lightstar-analytics.png`

### Этап 5 — Contact + Деплой (частично) ✅
- `ContactSection` (кнопки + форма)
- GitHub: https://github.com/andyluvd/tanya-portfolio
- VDS: http://109.172.94.218/ (SSH: `vds-portfolio`)
- Нужно: ключи EmailJS, тест отправки формы

---

## Файловая структура (актуальная)

```
src/
├── app/
│   ├── page.jsx          ← только импорты секций
│   ├── layout.jsx        ← ThemeProviders, Footer
│   └── globals.css       ← CSS-переменные, .intro-* классы
├── components/
│   ├── sections/
│   │   ├── IntroSection.jsx     ← CLIENT: пилюля + фото + About, JS-машина состояний
│   │   ├── AboutSection.jsx     ← AboutContent (без section-обёртки)
│   │   ├── ServicesSection.jsx
│   │   ├── CasesSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   ├── ui/
│   │   ├── ServiceCard.jsx
│   │   ├── MetricCounter.jsx
│   │   ├── AnimatedSection.jsx
│   │   └── ThemeToggle.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── FooterThemeToggle.jsx
│   │   └── IntroHeader.jsx      ← не используется, можно удалить
│   └── providers/
│       └── ThemeProviders.jsx   ← 'use client' обёртка для next-themes
├── lib/
│   ├── utils.js
│   └── emailjs.js               ← ЗАПОЛНИТЬ ключи!
├── content/
│   └── data.js                  ← все тексты и данные
└── styles/
    └── tokens.css
public/
├── photo.jpg                    ← фото Татьяны ✅
└── cases/
    └── lightstar-analytics.png  ← НЕ ЗАГРУЖЕНО
```

---

## Деплой

| Среда | Адрес |
|-------|-------|
| Локально | `npm run dev` → http://localhost:3000 |
| VDS | http://109.172.94.218/ |
| GitHub | https://github.com/andyluvd/tanya-portfolio |

**Деплой на VDS:** `rsync -avz --delete out/ vds-portfolio:/var/www/tanya/`  
**npm путь (Mac):** `export PATH="/Users/andre/ОФЛАЙН/1project/.tools/node/bin:$PATH"`

**Точки отката (git):**
| Хеш | Описание |
|-----|----------|
| `8c992f6` | Initial commit |
| `83b39c7` | Fullscreen hero + glassmorphism v1 |
| `d1fa71c` | Glass header + sticky photo v1 |
| `35f0684` | ✅ ТЕКУЩИЙ: пилюля JS state machine |

---

## Что делать дальше

### Приоритет 1 — Контент и медиа
- [ ] Загрузить `public/cases/lightstar-analytics.png`
- [ ] Зарегистрироваться на emailjs.com, вписать ключи в `src/lib/emailjs.js`
- [ ] Проверить форму контактов

### Приоритет 2 — Доработка секций
- [ ] ServicesSection: улучшить иконки, hover-эффекты
- [ ] CasesSection: добавить скриншот, проверить счётчики
- [ ] SkillsSection: добавить SVG-иконки Figma, Adobe

### Приоритет 3 — Финальная полировка
- [ ] Проверить тёмную тему на всех секциях
- [ ] Адаптивность: проверить на реальном телефоне
- [ ] SEO: meta-теги в `layout.jsx` (уже базово настроено)
- [ ] Деплой на Vercel (опционально)

---

## Известные решения

- `IntroSection.jsx` — клиентский компонент, управляет тремя состояниями пилюли через `getBoundingClientRect()`
- `AboutSection.jsx` (`export default function AboutContent`) — без section-обёртки, section предоставляет `IntroSection`
- Тёмная тема: `next-themes` с `attribute="class"`, без мигания
- Статический экспорт: `output: 'export'` в `next.config.js`
- `npm run dev:clean` — запуск с очисткой кэша `.next`

## Баги и блокеры
- `IntroHeader.jsx` в `src/components/layout/` — остался, не используется, можно удалить
- Переключатель темы только в Footer (внизу страницы) — возможно стоит добавить где-то вверху
