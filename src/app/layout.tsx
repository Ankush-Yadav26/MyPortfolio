import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankush Yadav | Full Stack Developer",
  description:
    "Premium dark-themed portfolio built with Next.js, Tailwind CSS, and Framer Motion. Showcasing full-stack projects, skills, and contact information.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio", "UI/UX", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
