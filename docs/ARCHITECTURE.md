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
│   │   ├── ScrollToTop.jsx          ← скролл вверх при F5
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

### `IntroSection.jsx` (client) — шапка ✅
**Ответственность:** пилюля, sticky-фото, обёртка `#about` для `AboutContent`.
**Пилюля:** `natural` (scroll=0) → `fixed` (scroll>0). Позиция `top` через `getFixedTop(aboutTop)`:
- `aboutTop >= 88px` → `top: 16px` (прилипла)
- зона 88→16px → линейная интерполяция (отлипание 1:1 со скроллом)
- `aboutTop <= 16px` → `top: aboutTop` (едет с секцией, без режима `floating`)
**Фото:** `.intro-photo` sticky + mask-gradient.

### `AboutSection.jsx` → `AboutContent` — блок «Обо мне» ✅
**Ответственность:** glass-карточка с текстом (без `<section>`, section — в `IntroSection`).
**Типографика:** заголовок `.glass-panel__title` (Playfair italic, крупный); абзацы `.glass-ios-text` (как пилюля).
**Анимация:** fade обёртки по `opacity`; абзацы — stagger. CTA убраны (будут позже).

### Стили стекла (`globals.css`) — iOS frosted glass
| Класс | Назначение |
|-------|------------|
| `.intro-header__glass` | Пилюля |
| `.glass-panel` | Карточка «Обо мне» |
| `.glass-text-contrast` | Контраст текста на фото |
| `.glass-ios-text` | SF Pro / system, 18–21px, weight 600 |
| `.glass-panel__title` | Крупный italic заголовок |
| Общее | `blur(28px) saturate(185%)`, градиентный блик `::before` |

### `ScrollToTop.jsx`
**Ответственность:** `history.scrollRestoration = 'manual'` + `scrollTo(0)` при загрузке; inline-script в `layout.jsx` до гидратации.

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
