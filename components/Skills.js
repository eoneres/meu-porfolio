const skills = {
  "Front-end": ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  "Back-end": ["Node.js", "Express", "Python (FastAPI)", "REST APIs"],
  "Banco de dados": ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  "Ferramentas": ["Git/GitHub", "Docker", "Vercel", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades técnicas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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
