"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, MapPin, Sparkles } from "lucide-react";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiReact } from "react-icons/si";

type HeroSectionProps = {
  greeting: string;
};

const floatingTech = [
  {
    id: "code",
    icon: <Code2 className="size-6" />,
    tone: "from-cyan-400/30 to-sky-500/20 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)]",
    left: "8%",
    top: "-2%",
  },
  {
    id: "react",
    icon: <SiReact className="size-6" />,
    tone: "from-sky-400/30 to-cyan-500/20 text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.4)]",
    left: "70%",
    top: "2%",
  },
  {
    id: "node",
    icon: <FaNodeJs className="size-6" />,
    tone: "from-emerald-500/30 to-lime-500/20 text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.35)]",
    left: "24%",
    top: "63%",
  },
  {
    id: "mongo",
    icon: <SiMongodb className="size-6" />,
    tone: "from-green-500/30 to-teal-500/20 text-green-200 shadow-[0_0_24px_rgba(34,197,94,0.35)]",
    left: "67%",
    top: "66%",
  },
];

export function HeroSection({ greeting }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-20 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
            {greeting}
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-7xl">
            I&apos;m
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-rose-400 bg-clip-text text-transparent">
              Ankush Yadav
            </span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-gray-100">Full Stack Developer</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
            I design and build futuristic web products with smooth interactions, robust architecture, and pixel-perfect
            interfaces that scale for real users.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-gray-300">
            <MapPin className="size-4 text-amber-400" />
            Based in Noida, India
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-rose-500 px-7 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1pae558QcLk1eRAj7Dh6syQSrDGtqb-Fk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute inset-5 rounded-full border border-cyan-200/25 bg-cyan-300/10 blur-xl" />
          <div className="relative mx-auto grid size-[330px] place-items-center rounded-full border border-cyan-200/45 bg-gradient-to-b from-sky-500/28 via-cyan-400/12 to-rose-500/20 p-2 shadow-[0_0_80px_rgba(34,211,238,0.4)]">
            <div className="relative size-full overflow-hidden rounded-full border border-white/25 bg-[#030712]">
              <Image
                src="/ankush-cutout.png"
                alt="Ankush Yadav portrait"
                fill
                priority
                className="object-contain object-[50%_68%] scale-[1.2] saturate-110 contrast-110 brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(34,211,238,0.15),transparent_45%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(3,7,18,0.08),rgba(3,7,18,0.86)_80%)]" />
              <div className="absolute inset-x-10 bottom-3 h-20 rounded-full bg-cyan-400/30 blur-2xl" />
            </div>

            {floatingTech.map((tech, idx) => (
              <motion.div
                key={tech.id}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.9 + idx * 0.2, repeat: Number.POSITIVE_INFINITY }}
                className={`absolute z-30 grid size-12 place-items-center rounded-2xl border border-white/20 bg-gradient-to-br ${tech.tone} backdrop-blur-xl`}
                style={{
                  left: tech.left,
                  top: tech.top,
                }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -bottom-14 left-0 w-[270px] rounded-[20px] border border-cyan-300/30 bg-gradient-to-br from-[#0c1228]/95 via-[#090f22]/95 to-[#0b0f1d]/95 p-3 shadow-[0_0_36px_rgba(34,211,238,0.2)]"
          >
            <div className="mb-3 flex gap-2">
              <span className="size-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
              <span className="size-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
              <span className="size-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            </div>
            <Code2 className="mb-2 size-4 text-cyan-300" />
            <p className="text-[10px] leading-5 text-gray-200">
              function craftDelight() &#123;
              <br />
              &nbsp;&nbsp;return &quot;ideas into immersive products&quot;;
              <br />
              &#125;
            </p>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-20 w-20 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-md"
              animate={{ x: [0, 380] }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.2 }}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -bottom-12 right-0 w-[270px] rounded-[20px] border border-rose-300/30 bg-gradient-to-br from-[#160d24]/95 via-[#0e1126]/95 to-[#0a0f1f]/95 p-3 shadow-[0_0_36px_rgba(244,63,94,0.18)]"
          >
            <div className="mb-3 flex gap-2">
              <span className="size-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
              <span className="size-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
              <span className="size-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            </div>
            <Sparkles className="mb-2 size-4 text-rose-300" />
            <p className="text-[10px] leading-5 text-gray-200">
              &lt;Build mindset=&quot;creative&quot;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;impact=&quot;real-world&quot;
              <br />
              /&gt;
            </p>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-20 w-20 bg-gradient-to-r from-transparent via-rose-300/20 to-transparent blur-md"
              animate={{ x: [0, 380] }}
              transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
