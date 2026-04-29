const skills = {
  "Front-end": ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  "Back-end": ["Node.js", "Express", "Python (FastAPI)", "REST APIs"],
  "Banco de dados": ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  "Ferramentas": ["Git/GitHub", "Docker", "Vercel", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Habilidades técnicas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-card rounded-xl p-6 shadow-theme border border-theme">
              <h3 className="text-xl font-semibold mb-4 accent-text">{category}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-secondary">
                    <span className="w-2 h-2 accent-bg rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
