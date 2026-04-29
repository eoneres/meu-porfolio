export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Vamos conversar?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Estou aberto a oportunidades, colaborações ou apenas um bate-papo.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:filipeneresfernandes@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            📧 filipeneresfernandes@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/filipe-neres-fernandes-9878b018b/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/eoneres" target="_blank" rel="noopener noreferrer" className="border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            🐙 github.com/eoneres
          </a>
        </div>
      </div>
    </section>
  );
}
