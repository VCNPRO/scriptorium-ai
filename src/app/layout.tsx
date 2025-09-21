import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scriptorium AI - Transcripción y análisis de documentos con IA",
  description: "Plataforma profesional para transcripción de documentos manuscritos, PDFs y archivos de texto. Genera resúmenes automáticos, extrae tags y analiza contenido con inteligencia artificial.",
  keywords: ["Scriptorium AI", "transcripción", "análisis de documentos", "SaaS", "IA", "documentos manuscritos", "PDF"],
  authors: [{ name: "Scriptorium AI Team" }],
  openGraph: {
    title: "Scriptorium AI - Transcripción y análisis de documentos con IA",
    description: "Plataforma profesional para transcripción de documentos manuscritos, PDFs y archivos de texto con IA",
    url: "https://scriptoriumia.eu",
    siteName: "Scriptorium AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptorium AI - Transcripción y análisis de documentos con IA",
    description: "Plataforma profesional para transcripción de documentos manuscritos, PDFs y archivos de texto con IA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
