"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiOpenai, SiPostgresql, SiPostman, SiRedux, SiTailwindcss } from "react-icons/si";
import styles from "./skills-neural.module.css";

type Category = "frontend" | "backend" | "database" | "tools";
type Skill = { id: number; name: string; icon: React.ReactNode; category: Category; level: number; description: string; color: string };
type PositionedSkill = Skill & { x: number; y: number };
type Connection = { from: number; to: number; strength: number };

const SKILLS: Skill[] = [
  { id: 1,  name: "React",       icon: <FaReact />,      category: "frontend", level: 90, description: "Building dynamic interfaces with reusable components and modern React patterns.",     color: "#61DAFB" },
  { id: 3,  name: "Node.js",     icon: <FaNodeJs />,     category: "backend",  level: 88, description: "Developing scalable server-side applications and RESTful services.",                color: "#68A063" },
  { id: 4,  name: "Express.js",  icon: <SiExpress />,    category: "backend",  level: 86, description: "Designing robust backend APIs and middleware pipelines.",                           color: "#ffffff" },
  { id: 5,  name: "MongoDB",     icon: <SiMongodb />,    category: "database", level: 82, description: "NoSQL schema design and performant query patterns.",                                color: "#47A248" },
  { id: 6,  name: "JavaScript",  icon: <FaJs />,         category: "frontend", level: 90, description: "Writing modern, efficient, and dynamic application logic.",                        color: "#F7DF1E" },
  { id: 7,  name: "Redux",       icon: <SiRedux />,      category: "frontend", level: 82, description: "Managing predictable state for complex interface flows.",                          color: "#764ABC" },
  { id: 8,  name: "HTML5",       icon: <FaHtml5 />,      category: "frontend", level: 95, description: "Building semantic and accessible structure for modern UIs.",                       color: "#E34F26" },
  { id: 9,  name: "CSS3",        icon: <FaCss3Alt />,    category: "frontend", level: 91, description: "Crafting responsive layouts, effects, and polished styling systems.",              color: "#1572B6" },
  { id: 10, name: "Tailwind CSS",icon: <SiTailwindcss />,category: "frontend", level: 89, description: "Building utility-first design systems and fast UI iterations.",                    color: "#38B2AC" },
  { id: 12, name: "Git",         icon: <FaGitAlt />,     category: "tools",    level: 92, description: "Version control and collaborative branching workflows.",                           color: "#F05032" },
  { id: 13, name: "Postman",     icon: <SiPostman />,    category: "tools",    level: 84, description: "API testing, debugging, and request collection management.",                       color: "#FF6C37" },
  { id: 15, name: "Docker",      icon: <FaDocker />,     category: "tools",    level: 78, description: "Containerising applications for consistent dev and production environments.",       color: "#2496ED" },
  { id: 16, name: "PostgreSQL",  icon: <SiPostgresql />, category: "database", level: 80, description: "Relational database design, queries, and schema management.",                      color: "#336791" },
  { id: 17, name: "OpenAI",      icon: <SiOpenai />,     category: "tools",    level: 76, description: "Integrating GPT models and AI APIs into production applications.",                  color: "#10A37F" },
  { id: 19, name: "Next.js",     icon: <SiNextdotjs />,  category: "frontend", level: 83, description: "Full-stack React framework for production-grade web applications.",                  color: "#e5e7eb" },
];

// Organic zigzag layout — 15 nodes, y capped within 0.88
const POSITIONS = [
  { x: 0.08, y: 0.10 }, { x: 0.32, y: 0.14 }, { x: 0.58, y: 0.08 }, { x: 0.82, y: 0.14 },
  { x: 0.18, y: 0.34 }, { x: 0.44, y: 0.28 }, { x: 0.70, y: 0.36 },
  { x: 0.07, y: 0.58 }, { x: 0.33, y: 0.52 }, { x: 0.58, y: 0.60 }, { x: 0.83, y: 0.52 },
  { x: 0.18, y: 0.80 }, { x: 0.42, y: 0.84 }, { x: 0.66, y: 0.78 }, { x: 0.84, y: 0.82 },
];

const CONNECTIONS: Connection[] = [
  { from: 1,  to: 3,  strength: 0.82 }, { from: 3,  to: 4,  strength: 0.90 }, { from: 3,  to: 5,  strength: 0.85 },
  { from: 4,  to: 5,  strength: 0.80 }, { from: 1,  to: 6,  strength: 0.95 }, { from: 1,  to: 7,  strength: 0.75 },
  { from: 6,  to: 8,  strength: 0.90 }, { from: 6,  to: 9,  strength: 0.90 }, { from: 8,  to: 9,  strength: 0.95 },
  { from: 8,  to: 10, strength: 0.70 }, { from: 9,  to: 10, strength: 0.70 }, { from: 3,  to: 12, strength: 0.80 },
  { from: 4,  to: 12, strength: 0.70 }, { from: 3,  to: 13, strength: 0.70 },
  { from: 3,  to: 15, strength: 0.78 }, { from: 4,  to: 15, strength: 0.65 }, { from: 15, to: 16, strength: 0.72 },
  { from: 5,  to: 16, strength: 0.75 }, { from: 3,  to: 16, strength: 0.70 },
  { from: 17, to: 3,  strength: 0.75 }, { from: 17, to: 4,  strength: 0.72 }, { from: 17, to: 1,  strength: 0.68 },
  { from: 19, to: 1,  strength: 0.90 }, { from: 19, to: 3,  strength: 0.80 }, { from: 19, to: 6,  strength: 0.85 },
];

export function SkillsNeural() {
  const [activeNode, setActiveNode] = useState<PositionedSkill | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: ((i * 17 + 11) % 100),
        duration: 4 + (i % 4) * 0.45,
        delay: (i % 5) * 0.35,
      })),
    []
  );

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      setSize({ width, height });
    };
    updateSize();

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 100);
    };
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });
    const observedElement = containerRef.current;
    if (observedElement) observer.observe(observedElement);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      if (observedElement) observer.unobserve(observedElement);
    };
  }, []);

  const skills = useMemo<PositionedSkill[]>(
    () =>
      SKILLS.map((skill, index) => {
        const pos = POSITIONS[index] ?? { x: 0.5, y: 0.5 };
        return { ...skill, x: size.width * pos.x, y: size.height * pos.y };
      }),
    [size]
  );

  const getSkillById = (id: number) => skills.find((skill) => skill.id === id);

  return (
    <section className={styles.skillsNeural}>
      <div className={styles.background}>
        <div className={styles.floatingParticles}>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={styles.particle}
              animate={isVisible ? { y: [0, -60, 0], opacity: [0.1, 0.4, 0.1] } : {}}
              transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
              style={{ left: `${particle.left}%` }}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Neural <span className={styles.titleAccent}>Network</span></h2>
          <p className={styles.subtitle}>Explore how my skills interconnect in this interactive neural network</p>
        </div>

        <motion.div ref={containerRef} className={styles.networkContainer} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {size.width > 0 && size.height > 0 && (
            <svg className={styles.connections} width="100%" height="100%">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {CONNECTIONS.map((conn, index) => {
                const fromSkill = getSkillById(conn.from);
                const toSkill = getSkillById(conn.to);
                if (!fromSkill || !toSkill) return null;
                return (
                  <motion.line
                    key={`${conn.from}-${conn.to}`}
                    x1={fromSkill.x}
                    y1={fromSkill.y}
                    x2={toSkill.x}
                    y2={toSkill.y}
                    stroke="url(#connectionGradient)"
                    strokeWidth={Math.max(conn.strength * 2, 1)}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.35 }}
                    transition={{ pathLength: { duration: 1.4, delay: index * 0.05 }, opacity: { duration: 0.5, delay: index * 0.05 } }}
                  />
                );
              })}
            </svg>
          )}

          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={`${styles.node} ${styles[skill.category]}`}
              style={{ left: skill.x, top: skill.y, "--node-color": skill.color } as CSSProperties}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.15 }}
              onMouseEnter={() => setActiveNode(skill)}
              onMouseLeave={() => setActiveNode(null)}
              onTouchStart={() => setActiveNode(skill)}
            >
              <div className={styles.nodeCore}>
                <div className={styles.nodeIcon}>{skill.icon}</div>
              </div>
              <div className={styles.nodeGlow} />
              <div className={styles.nodePulse} />
              <span className={styles.nodeName}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeNode && (
            <motion.div
              className={styles.nodeDetails}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              style={{
                borderColor: activeNode.color,
                left: activeNode.x,
                top: activeNode.y + 44,
              }}
            >
              <div className={styles.detailsHeader}>
                <div className={styles.detailsIcon} style={{ borderColor: activeNode.color, color: activeNode.color }}>{activeNode.icon}</div>
                <div className={styles.detailsTitle}>
                  <h3>{activeNode.name}</h3>
                  <span className={styles.detailsCategory} style={{ color: activeNode.color }}>{activeNode.category}</span>
                </div>
                <div className={styles.skillLevel} style={{ color: activeNode.color }}>{activeNode.level}%</div>
              </div>
              <div className={styles.skillProgress}>
                <motion.div className={styles.progressBar} initial={{ width: 0 }} animate={{ width: `${activeNode.level}%` }} style={{ backgroundColor: activeNode.color }} />
              </div>
              <p className={styles.skillDescription}>{activeNode.description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.legend}>
          <h4>Skill Categories</h4>
          <div className={styles.legendItems}>
            {(["frontend", "backend", "database", "tools"] as Category[]).map((cat) => (
              <div key={cat} className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles[cat]}`} />
                <span>{cat[0].toUpperCase() + cat.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
