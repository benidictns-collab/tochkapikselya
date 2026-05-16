import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Точка пикселя — Студия веб-дизайна и разработки в Ростове-на-Дону",
  description:
    "Профессиональная студия веб-дизайна «Точка пикселя» в Ростове-на-Дону. Создание сайтов, UI/UX дизайн, брендинг, SEO-продвижение и разработка на React/Next.js. Более 150 успешных проектов за 7 лет.",
  keywords: [
    "веб-дизайн Ростов-на-Дону",
    "создание сайтов Ростов",
    "студия веб-дизайна",
    "разработка сайтов",
    "UI UX дизайн",
    "SEO продвижение",
    "Точка пикселя",
  ],
  openGraph: {
    title: "Точка пикселя — Студия веб-дизайна в Ростове-на-Дону",
    description:
      "Создаём сайты, которые продают. UI/UX дизайн, разработка, брендинг и SEO.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Микроразметка Schema.org для локального бизнеса
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Точка пикселя",
    description:
      "Студия веб-дизайна и разработки в Ростове-на-Дону. Создание сайтов, UI/UX, брендинг.",
    url: "https://tochkapikselya.ru", // Замените на ваш реальный домен
    telephone: "+78632001020",
    email: "hello@tochkapikselya.ru",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ростов-на-Дону",
      streetAddress: "ул. Большая Садовая, 100",
      addressRegion: "РО",
      postalCode: "344006",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.2357,
      longitude: 39.7015,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Внедрение JSON-LD для поисковых систем */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}