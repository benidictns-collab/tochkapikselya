"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
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
    description: "Редизайн e-commerce платформы с увеличением конверсии на 47%",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    tag: "E-commerce",
  },
  {
    id: 2,
    title: "ShelfAI PRO — Дашборд",
    description: "Платформа с 40+ AI-агентами для автоматизации маркетплейсов Ozon и Wildberries",
    imageSrc: "https://z-cdn-media.chatglm.cn/files/958698c7-7c0e-4c83-935d-4436dbe302cb.png?auth_key=1878943058-3740fefa705541e98b6fb7380397ec05-0-1604a5f70da42297f7d3c3b5fd6cd627",
    tag: "SaaS",
  },
  {
    id: 3,
    title: "FoodieApp — Мобильное приложение",
    description: "Дизайн и разработка приложения доставки еды для iOS и Android",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tag: "Mobile",
  },
  {
    id: 4,
    title: "ГК XELON",
    description: "Корпоративный сайт группы компаний: 6 дочерних компаний, 9 направлений деятельности.",
    imageSrc: "https://z-cdn-media.chatglm.cn/files/2a8e9b65-d861-4a4b-9e93-494a7ff5cfa0.png?auth_key=1878943841-2e596f6a1ee949e8b27471bbcbb3dd29-0-b5de3c790b90b592e92c60747328608f",
    tag: "Холдинг",
  },
  {
    id: 5,
    title: 'ООО "КСЕЛОН" — Производство ППД и Дисплеев',
    description: "Корпоративный сайт производителя: от детекторов до дисплеев и AI-модулей.",
    imageSrc: "https://z-cdn-media.chatglm.cn/files/91afdb59-ec51-41a2-81bc-8fecadf1ff4f.png?auth_key=1878943683-c74c85d0a29349599cff2a66e74fa6e1-0-15d9f1c9a52d9a7851a6f06ade250a3b",
    tag: "Производство",
  },
];

// Данные для Parallax секции
const servicesSteps = [
  {
    id: 1,
    title: "Аналитика",
    description: "Исследуем бизнес, целевую аудиторию и конкурентов. Формируем стратегию, которая ляжет в основу проекта и обеспечит рост конверсии.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: 2,
    title: "Проектирование",
    description: "Создаём пользовательские сценарии, wireframes и прототипы. Каждый экран продуман до пикселя для удобства пользователей.",
    // ИСПРАВЛЕНО: Рабочая ссылка на скетчи и wireframes
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2070&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: 3,
    title: "Дизайн",
    description: "Визуальный дизайн, адаптивные макеты, дизайн-системы. Превращаем логику в эстетику, которая продает.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: 4,
    title: "Разработка",
    description: "Чистый, быстрый и масштабируемый код. React, Next.js, TypeScript — современный стек для надёжного продукта.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: 5,
    title: "Тестирование и Запуск",
    description: "Кроссбраузерное тестирование, оптимизация скорости. Деплой, мониторинг и постоянная техническая поддержка 24/7.",
    // ИСПРАВЛЕНО: Рабочая ссылка на код и тестирование
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Navbar />
      <ScrollingFeatureShowcase />

      <section id="about">
        <FlowArt aria-label="О студии Точка пикселя">
          <FlowSection aria-label="Кто мы" style={{ backgroundColor: "#FFD600", color: "#000000" }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Кто мы</p>
            <hr className="my-[2vw] border-none h-px bg-black/30" />
            <div>
              <h2 className="text-5xl md:text-8xl lg:text-[12rem] font-bold leading-[0.85] uppercase tracking-tight">
                Точка<br />Пикселя
              </h2>
            </div>
            <hr className="my-[2vw] border-none h-px bg-black/30" />
            <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              Студия веб-дизайна из Ростова-на-Дону. Мы создаём цифровые продукты, которые работают на бизнес.
            </p>
          </FlowSection>

          <FlowSection aria-label="Наш подход" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Наш подход</p>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <div>
              <h2 className="text-5xl md:text-8xl lg:text-[12rem] font-bold leading-[0.85] uppercase tracking-tight">
                Дизайн<br />Ведёт<br />Бизнес
              </h2>
            </div>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              Мы не просто рисуем красивые картинки. Каждый элемент подчинён бизнес-логике.
            </p>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <div className="flex flex-wrap gap-[3vw]">
              <div className="min-w-[140px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">Стратегия</p>
                <p className="text-sm leading-relaxed opacity-75">Исследуем рынок перед первой строчкой кода.</p>
              </div>
              <div className="min-w-[140px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">Эмпатия</p>
                <p className="text-sm leading-relaxed opacity-75">Проектируем для людей и их потребностей.</p>
              </div>
              <div className="min-w-[140px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">Результат</p>
                <p className="text-sm leading-relaxed opacity-75">Рост конверсии, снижение отказов, выручка.</p>
              </div>
            </div>
            <hr className="my-[2vw] border-none h-px bg-white/20" />
            <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              Ростов-на-Дону — наш дом. Мы знаем местный рынок.
            </p>
          </FlowSection>

          <FlowSection aria-label="Цифры" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Цифры</p>
            <hr className="my-[2vw] border-none h-px bg-black/20" />
            <div>
              <h2 className="text-5xl md:text-8xl lg:text-[12rem] font-bold leading-[0.85] uppercase tracking-tight">
                Речь<br />За<br />Дела
              </h2>
            </div>
            <hr className="my-[2vw] border-none h-px bg-black/20" />
            <div className="flex flex-wrap gap-[3vw]">
              <div className="min-w-[140px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">150+</p>
                <p className="text-sm leading-relaxed opacity-75">Завершённых проектов.</p>
              </div>
              <div className="min-w-[140px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">7 лет</p>
                <p className="text-sm leading-relaxed opacity-75">На рынке веб-дизайна.</p>
              </div>
              <div className="min-w-[140px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-600">47%</p>
                <p className="text-sm leading-relaxed opacity-75">Средний прирост конверсии.</p>
              </div>
            </div>
          </FlowSection>
        </FlowArt>
      </section>

      {/* ══════════ SERVICES (PARALLAX) ══════════ */}
      <section id="services">
        <ParallaxScrollFeatureSection 
          items={servicesSteps}
          title="Как мы работаем"
          endText="Начнем?"
        />
      </section>

      <section id="portfolio" className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">Наши работы</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Портфолио</h2>
          </div>
          <CardStack items={portfolioItems} initialIndex={0} autoAdvance intervalMs={3000} pauseOnHover showDots />
        </div>
      </section>

      <section id="contacts" className="py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">Свяжитесь с нами</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
                Давайте<br />создадим<br /><span className="text-yellow-400">вместе</span>
              </h2>
              <p className="mt-6 text-white/60 max-w-md text-lg">Расскажите о проекте — мы подготовим предложение в течение 24 часов.</p>
              <div className="mt-10 space-y-4">
                <a href="tel:+78632001020" className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors shrink-0">
                    <Phone className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>+7 (863) 200-10-20</span>
                </a>
                <a href="mailto:hello@tochkapikselya.ru" className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors shrink-0">
                    <Mail className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>hello@tochkapikselya.ru</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>г. Ростов-на-Дону, ул. Большая Садовая, 100</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">Ваше имя</label>
                  <input type="text" placeholder="Иван Петров" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">Email или телефон</label>
                  <input type="text" placeholder="ivan@company.ru" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">О проекте</label>
                  <textarea rows={4} placeholder="Кратко опишите вашу задачу..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors">Отправить заявку</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-yellow-400 flex items-center justify-center">
              <span className="text-black font-extrabold text-xs">TP</span>
            </div>
            <span className="text-white/60 text-sm">© 2024 Точка пикселя</span>
          </div>
          <p className="text-white/40 text-sm">Студия веб-дизайна в Ростове-на-Дону</p>
        </div>
      </footer>
    </div>
  );
}