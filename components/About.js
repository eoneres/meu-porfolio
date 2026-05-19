'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Sou apaixonado por criar softwares que resolvem problemas reais. Minha trajetória começou com projetos pessoais e hoje desenvolvo aplicações completas, do front-end à infraestrutura.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Acredito em código limpo, boas práticas e entregas que agregam valor. Fora do código, compartilho conhecimento e contribuo com open source.
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {[
              { label: '+15 Projetos', desc: 'Entregues' },
              { label: 'Full Stack', desc: 'End-to-end' },
              { label: 'ML + Backend', desc: 'Data & APIs' },
              { label: 'Open Source', desc: 'Contribuições' }
            ].map((stat, idx) => (
              <motion.div key={idx} className="glass-card p-6 text-center rounded-xl" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx * 0.1 }}>
                <div className="text-2xl font-bold text-accent">{stat.label}</div>
                <div className="text-sm text-secondary">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}