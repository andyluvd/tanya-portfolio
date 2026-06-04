# Architecture — компоненты и структура

## Файловая структура

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.jsx          ← собирает все секции по порядку
│   │   ├── layout.jsx        ← meta, шрифты Google, ThemeProvider
│   │   └── globals.css       ← CSS-переменные палитры, базовые стили
│   ├── components/
│   │   ├── sections/
│   │   │   ├── IntroSection.jsx     ← интро: пилюля + фото + About (client)
│   │   │   ├── AboutSection.jsx     ← AboutContent (glass-карточка)
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── CasesSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── ui/
│   │   │   ├── ServiceCard.jsx      ← карточка услуги с hover
│   │   │   ├── MetricCounter.jsx    ← анимированный счётчик цифр
│   │   │   ├── AnimatedSection.jsx  ← обёртка fade-in при скролле
│   │   │   └── ThemeToggle.jsx      ← переключатель светлой/тёмной темы
│   │   └── layout/
│   │       ├── Footer.jsx           ← контакты, ThemeToggle
│   │       └── FooterThemeToggle.jsx
│   ├── lib/
│   │   ├── utils.js                 ← вспомогательные функции
│   │   └── emailjs.js               ← конфиг EmailJS для формы
│   ├── content/
│   │   └── data.js                  ← ВСЕ тексты и данные страницы
│   └── styles/
│       └── tokens.css               ← CSS-переменные (дублирует globals для ясности)
├── docs/                            ← контекст для Cursor AI
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── CURRENT_STATUS.md
├── public/
│   ├── photo.jpg                    ← фото Татьяны (загрузить вручную)
│   └── cases/
│       └── lightstar-analytics.png  ← скриншот аналитики Pinterest
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Компоненты — подробное описание

### `IntroSection.jsx` (client)
**Ответственность:** весь интро-блок — пилюля, фото, секция «Обо мне».
**Пилюля «Золотарёва Татьяна»:** три режима (`natural` | `fixed` | `floating`), переключение по scroll + `#about.getBoundingClientRect().top`.
**Фото:** sticky (`intro-photo`), mask-gradient снизу.
**Стекло пилюли:** `.intro-header__glass.glass-text-contrast` — см. `globals.css`.

### `AboutSection.jsx` → `AboutContent`
**Ответственность:** текст «Обо мне» внутри glass-карточки (без своей `<section>`).
**Стекло:** `<div class="glass-panel glass-text-contrast">` — не на `motion.div` с transform.
**Анимация:** обёртка только `opacity`; абзацы — stagger `fadeUp`.
**CTA:** Telegram + якорь `#cases` (данные из `siteData`).

### Стили стекла (`globals.css`)
| Класс | Назначение |
|-------|------------|
| `.intro-header__glass` | Пилюля, заливка ~28% white |
| `.glass-panel` | Карточка «Обо мне», заливка ~32% white |
| `.glass-text-contrast` | Цвет текста + text-shadow для читаемости на фото |
| `.glass-accent` | Акцентные подписи внутри стекла |
| Общее | `backdrop-filter: blur(4px) saturate(1.15)` |

### `ServicesSection.jsx`
**Ответственность:** 4 услуги в виде карточек.
**Макет:** CSS Grid 2×2, на мобиле 1×4.
**Данные (из `content/data.js`):**
```js
[
  { icon: 'strategy', title: 'Стратегия и контент-план', desc: 'Цели, форматы, рубрики, тексты' },
  { icon: 'analytics', title: 'Аналитика и рост', desc: 'Метрики, оптимизация, результат' },
  { icon: 'video', title: 'Видео и Reels', desc: 'Монтаж коротких видео под бизнес-задачи' },
  { icon: 'visual', title: 'Визуал и оформление', desc: 'Лента, сторис, рилсы' },
]
```
**Hover:** карточки через `ServiceCard` (translateY, accent border, линия сверху).

### `ServiceCard.jsx`
**Ответственность:** одна карточка услуги.
**Props:** `{ icon, title, desc }`.
**Иконки:** `Target`, `TrendingUp`, `Clapperboard`, `Palette` (Lucide).
**Hover:** скруглённый квадрат иконки → заливка accent, rotate, top accent line.

### `CasesSection.jsx`
**Ответственность:** демонстрация реального результата (кейс Lightstar Pinterest).
**Макет:** левый столбец — метрики, правый — скриншот аналитики.
**Метрики (анимируются при появлении через `MetricCounter`):**
- 11 800 — показов в месяц
- 363 — вовлечений
- 37 — сохранений
- 7 500 — общая аудитория
**Анимация метрик:** счётчик от 0 до финального значения за 1.5s, easing ease-out. Запускается один раз при `useInView`.

### `MetricCounter.jsx`
**Ответственность:** анимированный числовой счётчик.
**Props:** `{ value: number, label: string, suffix?: string }`.
**Логика:** `useEffect` + `requestAnimationFrame`, интерполяция от 0 до `value`.

### `SkillsSection.jsx`
**Ответственность:** инструменты и технологии.
**Контент:** Figma (SVG), Adobe-бейджи Ai/Ps/Pr, CapCut, теги AI и платформ.
**Анимация:** stagger при скролле.

### `ContactSection.jsx`
**Ответственность:** финальный призыв к действию + форма.
**Контент:** три кнопки-ссылки (телефон, Telegram, email) + форма (имя + сообщение).
**Форма:** отправка через EmailJS без бэкенда. После отправки — inline-сообщение об успехе, без перезагрузки.

### `AnimatedSection.jsx`
**Ответственность:** обёртка для анимации появления при скролле.
**Props:** `{ children, delay?: number, direction?: 'up' | 'left' | 'right' }`.
**Использование:** оборачивает любой блок для автоматического fadeIn + slide при попадании в viewport.

### `ThemeToggle.jsx`
**Ответственность:** переключатель тёмной/светлой темы.
**Реализация:** `next-themes`, иконка солнца/луны через Lucide.

## Поток данных
Все тексты и статичные данные живут в `src/content/data.js`. Компоненты импортируют нужные объекты оттуда. Никаких пропов сверху вниз через page.jsx — каждая секция сама берёт свои данные.

## Анимации — общие правила
- Библиотека: Framer Motion (`motion.div`, `useInView`, `useAnimation`)
- Базовый вариант появления: `{ opacity: 0, y: 24 }` → `{ opacity: 1, y: 0 }`, duration 0.5s
- Stagger между дочерними элементами: 0.12–0.15s
- Все анимации запускаются один раз (`once: true` в `useInView`)
- `@media (prefers-reduced-motion)`: все анимации отключаются через Framer Motion `reducedMotion: "user"`
