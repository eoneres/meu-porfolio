'use client';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Layers } from 'lucide-react';

export default function Hero() {
  const stack = [
    { icon: Code2, name: 'React' },
    { icon: Server, name: 'Node.js' },
    { icon: Database, name: 'PostgreSQL' },
    { icon: Layers, name: 'Next.js' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-indigo-500/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sm text-accent mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Disponível para oportunidades Full Stack
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, sou <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Filipe Neres Fernandes</span>
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Desenvolvedor Full Stack focado em aplicações modernas, dashboards inteligentes e sistemas escaláveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                Explorar Projetos
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
              <a href="#contact" className="btn-secondary">Vamos Conversar</a>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="glass-card rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-4 text-primary">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {stack.map((item, idx) => (
                  <motion.div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10" whileHover={{ scale: 1.02 }}>
                    <item.icon size={20} className="text-accent" />
                    <span className="text-primary">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}