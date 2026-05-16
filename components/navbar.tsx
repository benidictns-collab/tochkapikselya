"use client";

import React, { useState, useEffect } from "react";
import MegaMenu from "@/components/ui/mega-menu";
import type { MegaMenuItem } from "@/components/ui/mega-menu";
import ServiceModal from "@/components/service-modal";
import { servicesData } from "@/lib/services-data";
import {
  Monitor, Palette, Layers, Smartphone,
  Code, Shield, Globe,
  BarChart3, PenTool, Lightbulb, Headphones,
} from "lucide-react";

const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Услуги",
    subMenus: [
      {
        title: "Дизайн",
        items: [
          { label: "Веб-дизайн", description: "Сайты, которые продают", icon: Monitor, slug: "web-design", href: "/services/web-design" },
          { label: "UI/UX Дизайн", description: "Интерфейсы, которые любят", icon: Palette, slug: "ui-ux-design", href: "/services/ui-ux-design" },
          { label: "Брендинг", description: "Визуальная идентичность", icon: Layers, slug: "branding", href: "/services/branding" },
          { label: "Мобильный дизайн", description: "iOS и Android приложения", icon: Smartphone, slug: "mobile-design", href: "/services/mobile-design" },
        ],
      },
      {
        title: "Разработка",
        items: [
          { label: "Фронтенд", description: "React, Next.js, Vue", icon: Code, slug: "frontend", href: "/services/frontend" },
          { label: "Бэкенд", description: "Надёжные серверные решения", icon: Shield, slug: "backend", href: "/services/backend" },
          { label: "CMS", description: "WordPress, Tilda, Custom", icon: Globe, slug: "cms", href: "/services/cms" },
        ],
      },
      {
        title: "Маркетинг",
        items: [
          { label: "SEO", description: "Поисковое продвижение", icon: BarChart3, slug: "seo", href: "/services/seo" },
          { label: "Контент-стратегия", description: "Тексты, которые конвертируют", icon: PenTool, slug: "content-strategy", href: "/services/content-strategy" },
          { label: "Аналитика", description: "Данные для роста", icon: Lightbulb, slug: "analytics", href: "/services/analytics" },
          { label: "Поддержка", description: "24/7 техническая помощь", icon: Headphones, slug: "support", href: "/services/support" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Портфолио",
    link: "/#portfolio",
  },
  {
    id: 3,
    label: "О студии",
    link: "/#about",
  },
  {
    id: 4,
    label: "Контакты",
    link: "/#contacts",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<number | null>(null);
  
  // Состояние для модального окна услуги
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const selectedService = servicesData.find(s => s.slug === selectedServiceSlug) || null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileCategory = (id: number) => {
    setExpandedMobileCategory(expandedMobileCategory === id ? null : id);
  };

  const handleServiceSelect = (slug: string) => {
    setSelectedServiceSlug(slug);
    setMobileOpen(false); // Закрываем мобильное меню при открытии модалки
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-400/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-9 w-9 rounded bg-yellow-400 flex items-center justify-center">
              <span className="text-black font-extrabold text-sm tracking-tight">TP</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">
              Точка<span className="text-yellow-400">пикселя</span>
            </span>
          </a>

          <div className="hidden lg:block">
            <MegaMenu items={NAV_ITEMS} onServiceSelect={handleServiceSelect} />
          </div>

          <a
            href="/#contacts"
            className="hidden sm:inline-flex rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-yellow-300 shrink-0"
          >
            Обсудить проект
          </a>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-yellow-400/20 px-6 py-4 max-h-[85vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="mb-2">
                {item.subMenus ? (
                  <>
                    <button
                      onClick={() => toggleMobileCategory(item.id)}
                      className="flex items-center justify-between w-full text-white/80 hover:text-yellow-400 transition-colors py-3 text-base font-semibold"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${expandedMobileCategory === item.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {expandedMobileCategory === item.id && (
                      <div className="pl-4 pb-4 space-y-4">
                        {item.subMenus.map((sub) => (
                          <div key={sub.title}>
                            <p className="text-xs uppercase tracking-wider text-yellow-400/60 mb-2 mt-2">{sub.title}</p>
                            <div className="space-y-1">
                              {sub.items.map((subItem) => (
                                <button
                                  key={subItem.label}
                                  onClick={() => subItem.slug && handleServiceSelect(subItem.slug)}
                                  className="flex items-center gap-3 py-2 text-sm text-white/70 hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/5 px-2 w-full text-left"
                                >
                                  <subItem.icon className="w-4 h-4 text-yellow-400/80" />
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.link || "#"}
                    className="block text-white/80 hover:text-yellow-400 transition-colors py-3 text-base font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            <a
              href="/#contacts"
              className="block w-full text-center rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-black mt-6"
              onClick={() => setMobileOpen(false)}
            >
              Обсудить проект
            </a>
          </div>
        )}
      </header>

      {/* Модальное окно услуги */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedServiceSlug(null)} 
      />
    </>
  );
}