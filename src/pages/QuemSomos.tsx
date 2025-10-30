import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import '../styles/pages/quem-somos.css';

function QuemSomos() {
  return (
    <div className="page">
      {/* Top Navigation over plain background */}
      <section className="section section--white" style={{ paddingTop: '0', paddingBottom: 0 }}>
        <Nav variant="solid" />
      </section>

      {/* Main About Section */}
      <section className="section about-section">
        <div className="container about-grid">
          <div>
            <h1 className="about-title">Quem somos</h1>
            <p className="section-paragraph about-paragraph">
              A NextShape é uma plataforma de saúde que oferece protocolos de emagrecimento personalizados, unindo tecnologia, ciência e acompanhamento médico.
            </p>
            <p className="section-paragraph about-paragraph">
              Por meio de teleconsulta, nossos consumidores recebem planos exclusivos que combinam suplementação nutricional, orientações alimentares e, quando indicado, terapias injetáveis avançadas, como a tirzepatida (ex mounjaro) – sempre com prescrição e supervisão especializada.
            </p>
            <p className="section-paragraph about-paragraph">
              Nossa empresa surge como uma healthtech brasileira voltada ao emagrecimento personalizado, oferecendo uma solução integrada que combina telemedicina, suplementação nutricional e terapias farmacológicas avançadas.
            </p>
            <p className="section-paragraph about-paragraph">
              Para ampliar a adesão ao tratamento, a NextShape disponibiliza entrega domiciliar de suplementos e medicamentos, garantindo conveniência e qualidade dos produtos entregues.
            </p>
          </div>
          <div className="about-image-card">
            <img src="/assets/imagem/woman-praia.png" alt="Prática na praia" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 className="faq-title">
                Perguntas<br />
                frequentes
              </h2>
              <p className="faq-sub">
                Tire suas dúvidas sobre o programa NextShape!
                <br />
                Ou entre em contato com nosso time!
              </p>
              <button className="btn btn--yellow">Quero agendar</button>
              <p className="faq-note">
                Nosso time atua <strong>24h</strong> para melhor te atender, faça
                <br />
                um agendamento agora mesmo!
              </p>
            </div>
            <Faq />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default QuemSomos;


