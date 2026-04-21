"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { PROJECTS } from "@/utils/portfolio-data";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="mt-28">
      <SectionHeading
        title="Featured Projects"
        subtitle="High-impact products crafted with modern stacks, polished interactions, and production-ready quality."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.22)]"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
            <div className="space-y-4 p-5">
              {"tag" in project && project.tag && (
                <span className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {project.tag}
                </span>
              )}
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
                >
                  <GitBranch className="size-4" />
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
