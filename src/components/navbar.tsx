"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  items: readonly NavItem[];
  activeSection: string;
  greeting: string;
  timeText: string;
};

export function Navbar({ items, activeSection, greeting, timeText }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300">
          <span className="mr-2 text-cyan-300">{greeting}</span>
          <span>{timeText}</span>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="group relative text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-300 to-rose-400 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-200 md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-white/10 bg-black/85 p-4 md:hidden"
          >
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                      activeSection === item.id
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
