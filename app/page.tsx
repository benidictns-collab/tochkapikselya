"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import {
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const portfolioItems: CardStackItem[] = [
  {
    id: 1,
    title: "EcoShop — Маркетплейс",
    description:
      "Редизайн e-commerce платформы с увеличением конверсии на 47%",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    tag: "E-commerce",
  },
  {
    id: 2,
    title: "ShelfAI PRO — Дашборд",
    description:
      "Платформа с 40+ AI-агентами для автоматизации маркетплейсов Ozon и Wildberries",
    imageSrc:
      "https://z-cdn-media.chatglm.cn/files/958698c7-7c0e-4c83-935d-4436dbe302cb.png?auth_key=1878943058-3740fefa705541e98b6fb7380397ec05-0-1604a5f70da42297f7d3c3b5fd6cd627",
    tag: "SaaS",
  },
  {
    id: 3,
    title: "FoodieApp — Мобильное приложение",
    description:
      "Дизайн и разработка приложения доставки еды для iOS и Android",
    imageSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tag: "Mobile",
  },
  {
    id: 4,
    title: "ГК XELON",
    description:
      "Корпоративный сайт группы компаний: 6 дочерних компаний, 9 направлений деятельности. Precision · Intelligence · Scale.",
    imageSrc:
      "https://z-cdn-media.chatglm.cn/files/2a8e9b65-d861-4a4b-9e93-494a7ff5cfa0.png?auth_key=1878943841-2e596f6a1ee949e8b27471bbcbb3dd29-0-b5de3c790b90b592e92c60747328608f",
    tag: "Холдинг",
  },
  {
    id: 5,
    title: 'ООО "КСЕЛОН" — Производство ППД и Дисплеев',
    description:
      "Корпоративный сайт производителя: от детекторов до дисплеев и AI-модулей. Собственный завод и 100+ инженеров.",
    imageSrc:
      "https://z-cdn-media.chatglm.cn/files/91afdb59-ec51-41a2-81bc-8fecadf1ff4f.png?auth_key=1878943683-c74c85d0a29349599cff2a66e74fa6e1-0-15d9f1c9a52d9a7851a6f06ade250a3b",
    tag: "Производство",
  },
];

const servicesTimeline = [
  {
    id: 1,
    title: "Аналитика",
    date: "Этап 1",
    content:
      "Исследуем бизнес, целевую аудиторию и конкурентов. Формируем стратегию.",
    category: "Исследование",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Проектирование",
    date: "Этап 2",
    content:
      "Создаём пользовательские сценарии, wireframes и прототипы.",
    category: "UX",
    icon: Palette,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Дизайн",
    date: "Этап 3",
    content:
      "Визуальный дизайн, адаптивные макеты, дизайн-системы.",
    category: "UI",
    icon: Palette,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Разработка",
    date: "Этап 4",
    content: "Чистый, быстрый код. React, Next.js, TypeScript.",
    category: "Код",
    icon: Code,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Тестирование",
    date: "Этап 5",
    content: "Кроссбраузерное тестирование, оптимизация скорости и SEO.",
    category: "QA",
    icon: TestTube,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 6,
    title: "Запуск",
    date: "Этап 6",
    content: "Деплой, мониторинг и постоянная техническая поддержка.",
    category: "Поддержка",
    icon: Rocket,
    relatedIds: [5],
    status: "pending" as const,
    energy: 15,
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <ScrollingFeatureShowcase />

      {/* ══════════ ABOUT ══════════ */}
      <section id="about">
        <FlowArt aria-label="О студии Точка пикселя">
          <FlowSection
            aria-label="Кто мы"
            style={{ backgroundColor: "#FFD600", color: "#000000" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              01 — Кто мы
            </p>
            <hr className="my-[2vw] border-none h-px bg-black/30" />
            <div>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
                Точка
                <br />
                Пикселя
              </h2>
            </div>
            <hr className="my-[2vw] border-none h-px bg-black/30" />
            <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              Студия веб-дизайна из Ростова-на-Дону. Мы создаём цифровые
              продукты, которые работают на бизнес — от концепции до запуска.
            </p>
          </FlowSection>

          <FlowSection
            aria-label="Наш подход"
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              02 — Наш подход
            </p>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <div>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
                Дизайн
                <br />
                Ведёт
                <br />
                Бизнес
              </h2>
            </div>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              Мы не просто рисуем красивые картинки. Каждый элемент интерфейса
              подчинён бизнес-логике. Дизайн должен продавать, убеждать и
              удерживать.
            </p>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <div className="flex flex-wrap gap-[3vw]">
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">
                  Стратегия
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Исследуем рынок и аудиторию перед первой строчкой кода.
                  Данные, не догадки.
                </p>
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">
                  Эмпатия
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Проектируем для людей. Понимаем боли и потребности
                  пользователя.
                </p>
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">
                  Результат
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Измеримый эффект: рост конверсии, снижение отказов,
                  увеличение выручки.
                </p>
              </div>
            </div>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              Ростов-на-Дону — наш дом. Мы знаем местный рынок и работаем с
              бизнесом по всему Югу России и за его пределами.
            </p>
          </FlowSection>

          <FlowSection
            aria-label="Цифры"
            style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              03 — Цифры
            </p>
            <hr className="my-[2vw] border-none h-px bg-black/20" />
            <div>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
                Речь
                <br />
                За
                <br />
                Дела
              </h2>
            </div>
            <hr className="my-[2vw] border-none h-px bg-black/20" />
            <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              За 1 год мы помогли более чем 20 компаниям выйти в цифровое
              пространство.
            </p>
            <hr className="my-[2vw] border-none h-px bg-black/20" />
            <div className="flex flex-wrap gap-[3vw]">
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
                  20+
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Завершённых проектов для компаний от стартапов до
                  корпораций.
                </p>
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
                  1 год
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  На рынке веб-дизайна и разработки. Опыт, который работает
                  на вас.
                </p>
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
                  47%
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Средний прирост конверсии после нашего редизайна.
                </p>
              </div>
            </div>
            <hr className="my-[2vw] border-none h-px bg-black/20" />
            <div className="flex flex-wrap gap-[3vw]">
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
                  12 человек
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Дизайнеры, разработчики, проектные менеджеры — слаженная
                  команда.
                </p>
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
                  24/7
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Техническая поддержка и мониторинг ваших проектов.
                </p>
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
                  Top-10
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                  Студия дизайна Юга России по рейтингу Tagline.
                </p>
              </div>
            </div>
          </FlowSection>
        </FlowArt>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section id="services" className="relative bg-black pt-24">
        <div className="text-center mb-8 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            Наш процесс
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Как мы <span className="text-yellow-400">работаем</span>
          </h2>
          <p className="mt-4 text-xl text-white/60 max-w-lg mx-auto">
            Нажмите на узел, чтобы узнать подробности об этапе
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={servicesTimeline} />
      </section>

      {/* ══════════ PORTFOLIO ══════════ */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">
              Наши работы
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Портфолио
            </h2>
            <p className="mt-3 text-white/60 max-w-md mx-auto">
              Перелистывайте карточки, чтобы познакомиться с проектами
            </p>
          </div>

          <CardStack
            items={portfolioItems}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            cardWidth={480}
            cardHeight={300}
          />
        </div>
      </section>

      {/* ══════════ CONTACTS ══════════ */}
      <section id="contacts" className="py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: CTA */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">
                Свяжитесь с нами
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
                Давайте
                <br />
                создадим
                <br />
                <span className="text-yellow-400">вместе</span>
              </h2>
              <p className="mt-6 text-white/60 max-w-md text-lg">
                Расскажите о вашем проекте — мы подготовим предложение с оценкой
                сроков и стоимости в течение 24 часов.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="tel:+78632001020"
                  className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Phone className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>+7 (863) 200-10-20</span>
                </a>
                <a
                  href="mailto:hello@tochkapikselya.ru"
                  className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Mail className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>hello@tochkapikselya.ru</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>г. Ростов-на-Дону, ул. Большая Садовая, 100</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Email или телефон
                  </label>
                  <input
                    type="text"
                    placeholder="ivan@company.ru"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Тип проекта
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-colors appearance-none">
                    <option value="" className="bg-black">Выберите тип</option>
                    <option value="web" className="bg-black">Веб-сайт</option>
                    <option value="uiux" className="bg-black">UI/UX Дизайн</option>
                    <option value="brand" className="bg-black">Брендинг</option>
                    <option value="app" className="bg-black">Мобильное приложение</option>
                    <option value="other" className="bg-black">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    О проекте
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Кратко опишите вашу задачу..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-yellow-400 flex items-center justify-center">
              <span className="text-black font-extrabold text-xs">TP</span>
            </div>
            <span className="text-white/60 text-sm">
              &copy; 2026 Точка пикселя
            </span>
          </div>
          <p className="text-white/40 text-sm">
            Студия веб-дизайна в Ростове-на-Дону
          </p>
        </div>
      </footer>
    </>
  );
}