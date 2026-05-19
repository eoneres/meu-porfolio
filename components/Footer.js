export default function Footer() {
  return (
    <footer className="bg-card border-t border-theme py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} Filipe Neres Fernandes
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/eoneres" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">🐙 GitHub</a>
          <a href="https://linkedin.com/in/filipe-neres-fernandes" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">🔗 LinkedIn</a>
          <a href="mailto:filipeneresfernandes@gmail.com" className="text-secondary hover:text-accent transition">📧 Email</a>
          <a href="#" className="text-secondary hover:text-accent transition">📄 Resume</a>
        </div>
        <div className="text-secondary text-sm">
          Built with Next.js + Tailwind + Vercel
        </div>
      </div>
    </footer>
  );
}