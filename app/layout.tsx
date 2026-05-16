import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Точка пикселя — Студия Веб-дизайна | Ростов-на-Дону",
  description: "Профессиональная студия веб-дизайна в Ростове-на-Дону. Веб-дизайн, UI/UX, брендинг, разработка.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}