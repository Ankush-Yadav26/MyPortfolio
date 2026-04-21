"use client";

import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { SkillsSection } from "@/sections/skills-section";
import { ProjectsSection } from "@/sections/projects-section";

import { TestimonialsSection } from "@/sections/testimonials-section";
import { ContactSection } from "@/sections/contact-section";
import { Footer } from "@/components/footer";
import { NAV_ITEMS } from "@/utils/portfolio-data";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const hour = now.getHours();
  const greeting = useMemo(() => {
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 22) return "Good Evening";
    return "Good Night";
  }, [hour]);

  const clockText = now.toLocaleTimeString("en-IN", { hour12: false });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04070c] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_76%_58%,rgba(244,63,94,0.17),transparent_38%),radial-gradient(circle_at_45%_82%,rgba(59,130,246,0.14),transparent_36%)]" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-35" />
      <CursorGlow />

      <Navbar items={NAV_ITEMS} activeSection={activeSection} greeting={greeting} timeText={clockText} />

      <main className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <HeroSection greeting={greeting} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />

        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer clockText={clockText} />
    </div>
  );
}
