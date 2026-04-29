export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Vamos conversar?</h2>
        <p className="text-lg text-secondary mb-8">
          Estou aberto a oportunidades, colaborações ou apenas um bate-papo.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:filipeneresfernandes@gmail.com" className="accent-bg text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:accent-bg">
            📧 filipeneresfernandes@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/filipe-neres-fernandes-9878b018b/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 rounded-lg flex items-center gap-2">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/eoneres" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 rounded-lg flex items-center gap-2">
            🐙 github.com/eoneres
          </a>
        </div>
      </div>
    </section>
  );
}
