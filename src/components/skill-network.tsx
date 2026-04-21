"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type SkillNetworkProps = {
  skills: string[];
  connections: [string, string][];
};

type NodeData = {
  name: string;
  x: number;
  y: number;
};

const WIDTH = 900;
const HEIGHT = 460;
const RADIUS = 170;

export function SkillNetwork({ skills, connections }: SkillNetworkProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const nodes = useMemo<NodeData[]>(() => {
    const centerX = WIDTH / 2;
    const centerY = HEIGHT / 2;

    return skills.map((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const wave = Math.sin(index * 1.7) * 26;
      return {
        name: skill,
        x: centerX + (RADIUS + wave) * Math.cos(angle),
        y: centerY + (RADIUS + wave) * Math.sin(angle),
      };
    });
  }, [skills]);

  const getNode = (name: string) => nodes.find((node) => node.name === name);
  const isHighlighted = (a: string, b: string) =>
    activeSkill ? activeSkill === a || activeSkill === b : true;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-[460px] w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {connections.map(([from, to]) => {
          const fromNode = getNode(from);
          const toNode = getNode(to);
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={`${from}-${to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGradient)"
              strokeOpacity={isHighlighted(from, to) ? 0.55 : 0.12}
              strokeWidth={isHighlighted(from, to) ? 2.2 : 1}
            />
          );
        })}

        {nodes.map((node) => {
          const selected = activeSkill === node.name;
          return (
            <motion.g
              key={node.name}
              onMouseEnter={() => setActiveSkill(node.name)}
              onMouseLeave={() => setActiveSkill(null)}
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={selected ? 23 : 18}
                fill={selected ? "#8b5cf6" : "#111827"}
                stroke={selected ? "#22d3ee" : "#6366f1"}
                strokeWidth="2"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill="#e5e7eb"
                fontSize="12"
                fontWeight="600"
              >
                {node.name}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
