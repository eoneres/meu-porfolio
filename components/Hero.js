export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Olá, sou Filipe Neres Fernandes
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Desenvolvedor Full Stack especializado em softwares personalizados e soluções escaláveis.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Ver projetos
          </a>
          <a href="#contact" className="border border-gray-400 dark:border-gray-600 px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
