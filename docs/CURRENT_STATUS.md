# Current Status

## Текущий этап
**Этап 3–4 — Полировка секций** (в работе 🔧)

Интро: фото на всю ширину, стеклянная пилюля, карточка «Обо мне» с настоящим glassmorphism (фото просвечивает). Секции Services/Skills отполированы. Задеплоено на VDS.

---

## Что сделано (полная история)

### Этап 1 — Фундамент ✅
- Next.js 15, React 19, Tailwind CSS 3, Framer Motion 11
- Все секции и UI-компоненты созданы
- CSS-переменные палитры, шрифты Playfair Display + Inter
- `npm run build` — успешно

### Этап 2 — Hero + About ✅
- **Фото** (`public/photo.jpg`): sticky, нижний край через CSS mask
- **Пилюля «Золотарёва Татьяна»** — JS state machine в `IntroSection.jsx` (natural → fixed → floating)
- **Блок «Обо мне»** — стеклянная карточка `.glass-panel` + контраст текста `.glass-text-contrast`
- **Стекло (финальные параметры в `globals.css`):**
  - `backdrop-filter: blur(4px)` — слабое размытие фото под элементом
  - Заливка: пилюля `rgba(255,255,255,0.28)`, карточка `0.32` (тёмная тема ~0.38–0.42)
  - Контраст текста: класс `.glass-text-contrast` (тёмный цвет + многослойный `text-shadow`), без изменения заливки
  - **Важно:** `backdrop-filter` на отдельном `<div>`, не на `motion.div` с `transform` — иначе стекло не работает
- CTA в карточке: Telegram + «Посмотреть кейсы»
- **Navbar** убран; тема — в Footer
- Удалены неиспользуемые: `HeroSection.jsx`, `IntroHeader.jsx`

### Этап 3 — Services + Skills (полировка) ✅
- `ServiceCard`: иконки Target / TrendingUp / Clapperboard / Palette, hover с accent-line
- `SkillsSection`: Figma SVG, Adobe-бейджи (Ai, Ps, Pr), CapCut

### Этап 4 — Cases ✅
- `MetricCounter` + `CasesSection`
- Нужно: `public/cases/lightstar-analytics.png`

### Этап 5 — Contact + Деплой (частично) ✅
- `ContactSection` (кнопки + форма)
- GitHub: https://github.com/andyluvd/tanya-portfolio
- VDS: http://109.172.94.218/ (SSH: `vds-portfolio`)
- Нужно: ключи EmailJS, тест формы

---

## Файловая структура (актуальная)

```
src/
├── app/
│   ├── page.jsx          ← IntroSection, Services, Cases, Skills, Contact
│   ├── layout.jsx        ← ThemeProviders, Footer
│   └── globals.css       ← палитра, .intro-*, .glass-panel, .glass-text-contrast
├── components/
│   ├── sections/
│   │   ├── IntroSection.jsx     ← CLIENT: пилюля + фото + About
│   │   ├── AboutSection.jsx     ← AboutContent (glass-panel внутри)
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
│   │   └── FooterThemeToggle.jsx
│   └── providers/
│       └── ThemeProviders.jsx
├── lib/
│   ├── utils.js
│   └── emailjs.js               ← ЗАПОЛНИТЬ ключи!
└── content/
    └── data.js
public/
├── photo.jpg                    ✅
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

**Сборка и деплой на VDS:**
```bash
export PATH="/Users/andre/ОФЛАЙН/1project/.tools/node/bin:$PATH"
npm run build && rsync -avz --delete out/ vds-portfolio:/var/www/tanya/
```

**Точки отката (git):**
| Хеш | Описание |
|-----|----------|
| `35f0684` | Пилюля JS state machine |
| `c73200e` | ✅ ТЕКУЩИЙ: стекло intro, полировка секций, docs |

---

## Что делать дальше

### Приоритет 1 — Контент и медиа
- [ ] `public/cases/lightstar-analytics.png`
- [ ] EmailJS ключи в `src/lib/emailjs.js`
- [ ] Проверить форму контактов

### Приоритет 2 — Доработка секций
- [x] ServicesSection ✅
- [x] SkillsSection ✅
- [x] AboutSection CTA ✅
- [x] Glassmorphism пилюля + «Обо мне» ✅
- [ ] CasesSection: скриншот

### Приоритет 3 — Финальная полировка
- [x] CSS-переменные + тёмная тема ✅
- [ ] Адаптивность на телефоне
- [ ] SEO (базово в layout.jsx)
- [ ] Vercel (опционально)

---

## Известные решения

- Пилюля: `IntroSection.jsx`, состояния через `getBoundingClientRect()` на `#about`
- `AboutContent` без `<section>` — обёртка в `IntroSection`
- Стекло: `.intro-header__glass` + `.glass-panel` + `.glass-text-contrast` в `globals.css`
- Framer Motion на glass: только `opacity` на обёртке, не `translateY` на элементе со стеклом
- `output: 'export'` в `next.config.js`
- `npm run dev:clean` — dev с очисткой `.next`

## Баги и блокеры
- Переключатель темы только в Footer
