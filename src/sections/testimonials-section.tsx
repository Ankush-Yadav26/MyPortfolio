"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS } from "@/utils/portfolio-data";

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="mt-28">
      <SectionHeading
        title="Client Testimonials"
        subtitle="What founders, product teams, and collaborators say about working together."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="mb-4 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-300">&quot;{testimonial.quote}&quot;</p>
            <div className="mt-5">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
