# Current Status

## Текущий этап
**Этап 2 — Hero + About** (в процессе)

Реализован новый интро-блок: фото на всю ширину в натуральных пропорциях, под ним стеклянная карточка «Обо мне», при скролле карточка наезжает на закреплённое фото. Остальные секции (Services, Cases, Skills, Contact) — базовая вёрстка с этапа 1.

---

## Этапы реализации

### Этап 1 — Фундамент
**Статус:** завершён ✅

**Задачи:**
- [x] Создать проект (вручную, без create-next-app)
- [x] Установить зависимости (framer-motion, next-themes@0.4.4, lucide-react, emailjs)
- [x] Прописать CSS-переменные палитры в `globals.css`
- [x] Подключить шрифты Playfair Display + Inter через `next/font/google`
- [x] Сделать `Navbar` и `Footer`
- [x] Настроить `tailwind.config.js`
- [x] Создать все секции и UI-компоненты
- [x] `npm run build` — успешно

---

### Этап 2 — Hero + About
**Статус:** в процессе

**Задачи:**
- [x] Добавить фото (`public/photo.jpg`)
- [x] `HeroSection`: фото `w-full h-auto`, без кропа на весь экран
- [x] `Navbar`: плавающая пилюля (тема + меню), без шапки с именем
- [x] `AboutSection`: карточка уже фото, glassmorphism (`backdrop-blur`)
- [x] Sticky-фото + наезд карточки при скролле (`.intro-photo` / `.intro-about`)
- [x] Новый текст «Обо мне» с акцентными словами (гармонии, всегда, вдохновляюсь)
- [x] Читаемые цвета текста на светлом стекле
- [ ] Доработать эффект на мобиле / тонкая настройка отступов
- [ ] Проверить тёмную тему на интро-блоке

**Результат этапа:** первый экран с фото и «летающей» карточкой при скролле.

---

### Этап 3 — Services + Skills
**Статус:** не начат (базовая вёрстка есть)

**Задачи:**
- [x] `ServiceCard` и `ServicesSection` (сетка 2×2)
- [x] `SkillsSection` с тегами инструментов
- [ ] Доработать hover и анимации по макету
- [ ] Иконки Adobe / видео (SVG)

---

### Этап 4 — Cases
**Статус:** не начат (базовая вёрстка есть)

**Задачи:**
- [x] `MetricCounter` и `CasesSection`
- [ ] Добавить скриншот `public/cases/lightstar-analytics.png`
- [ ] Проверить счётчики на реальных данных

---

### Этап 5 — Contact + Деплой
**Статус:** в процессе

**Задачи:**
- [x] `ContactSection` (кнопки + форма)
- [x] SEO-мета в `layout.jsx`
- [x] Репозиторий GitHub: https://github.com/andyluvd/tanya-portfolio
- [x] Деплой на VDS (`109.172.94.218`, `/var/www/tanya`)
- [x] Скрипт `./scripts/deploy-vds.sh`
- [ ] Ключи EmailJS в `src/lib/emailjs.js`
- [ ] Протестировать отправку формы
- [ ] Деплой на Vercel (опционально)
- [ ] Проверить на реальном телефоне

---

## Деплой

| Среда | URL / доступ |
|--------|----------------|
| Локально | `npm run dev` → http://127.0.0.1:3000 |
| VDS | http://109.172.94.218/ (SSH: `vds-portfolio`) |
| GitHub | https://github.com/andyluvd/tanya-portfolio |

**Точки отката (git):**
- `8c992f6` — initial commit
- `83b39c7` — fullscreen hero + glassmorphism (первая версия интро)

---

## Известные решения и договорённости
- JavaScript, не TypeScript
- Тексты в `src/content/data.js`; интро-текст «Обо мне» пока в `AboutSection.jsx`
- Тёмная тема: `next-themes`, `attribute="class"`
- Статический экспорт (`output: 'export'`) — деплой как статика на VDS
- Nginx: `index.html` без кэша, `_next/static` с long cache

## Баги и блокеры
- `npm run dev` без `-H 127.0.0.1` может падать с `uv_interface_addresses` в sandbox — в `package.json` зафиксирован хост
- После деплоя на VDS может понадобиться жёсткое обновление страницы (Cmd+Shift+R)

---

## Как обновлять этот файл
1. Ставь `[x]` вместо `[ ]`
2. Меняй статус этапа
3. Добавляй баги и новые commit-хеши для отката
