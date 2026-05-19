import { GitHub, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-theme py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} Filipe Neres Fernandes
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/eoneres" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition"><GitHub size={20} /></a>
          <a href="https://linkedin.com/in/filipe-neres-fernandes" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition"><Linkedin size={20} /></a>
          <a href="mailto:filipeneresfernandes@gmail.com" className="text-secondary hover:text-accent transition"><Mail size={20} /></a>
          <a href="#" className="text-secondary hover:text-accent transition"><FileText size={20} /></a>
        </div>
        <div className="text-secondary text-sm">
          Built with Next.js + Tailwind + Vercel
        </div>
      </div>
    </footer>
  );
}