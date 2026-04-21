"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY_ITEMS, STATS } from "@/utils/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="mt-28">
      <SectionHeading
        title="Creative Developer"
        subtitle="I blend product thinking, engineering discipline, and visual storytelling to craft memorable web experiences."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {STATS.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              <p className="text-3xl font-bold text-cyan-300">{item.value}</p>
              <p className="mt-2 text-sm text-gray-400">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PHILOSOPHY_ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <p className="text-xl">{item.emoji}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

    </AnimatedSection>
  );
}
