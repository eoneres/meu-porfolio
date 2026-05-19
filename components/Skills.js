'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  { title: 'Front-end', icon: Code, items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { title: 'Back-end', icon: Server, items: ['Node.js', 'Express', 'Python', 'FastAPI'] },
  { title: 'Banco de Dados', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { title: 'Ferramentas', icon: Wrench, items: ['Docker', 'Git', 'Vercel', 'VS Code'] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Habilidades Técnicas</h2>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div key={cat.title} className="glass-card rounded-xl p-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx * 0.1 }}>
              <div className="flex items-center gap-2 mb-4">
                <cat.icon className="text-accent" size={24} />
                <h3 className="text-xl font-semibold text-primary">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-sm">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}