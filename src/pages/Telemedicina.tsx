import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import '../styles/pages/telemedicina.css';

function Telemedicina() {
  return (
    <div className="page">
      {/* Top Navigation */}
      <section className="section section--white" style={{ paddingTop: '0', paddingBottom: 0 }}>
        <Nav variant="solid" />
      </section>

      {/* Hero Section */}
      <section className="telemedicina-hero">
        <img src="/assets/imagem/telemedicina.png" alt="Telemedicina" className="telemedicina-hero-image" />
        {/* Hero Content */}
        <div className="telemedicina-hero-content">
          <div className="container">
            <h1 className="telemedicina-hero-title">
              A importância da teleconsulta no<br />
              seu protocolo de emagrecimento!
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section telemedicina-section">
        <div className="container telemedicina-grid">
          <div className="telemedicina-content">
            {/* Text Blocks */}
            <div className="telemedicina-items">
              <div className="telemedicina-item">
                <h3 className="telemedicina-item-title">Segurança máxima</h3>
                <p className="telemedicina-item-text">
                  Impede fraudes ou uso indevido da identidade do consumidor.
                </p>
              </div>

              <div className="telemedicina-item">
                <h3 className="telemedicina-item-title">Confirmação de autenticidade</h3>
                <p className="telemedicina-item-text">
                  Garante que todas as prescrições, recomendações e protocolos são emitidos para a pessoa correta.
                </p>
              </div>

              <div className="telemedicina-item">
                <h3 className="telemedicina-item-title">Privacidade protegida</h3>
                <p className="telemedicina-item-text">
                  Todos os dados biométricos são armazenados com criptografia, seguindo padrões de segurança internacionais.
                </p>
              </div>

              <div className="telemedicina-item">
                <h3 className="telemedicina-item-title">Agilidade e praticidade</h3>
                <p className="telemedicina-item-text">
                  A validação ocorre de forma rápida e automática, permitindo iniciar a consulta sem complicações.
                </p>
              </div>
            </div>
             {/* Full-Width Bottom Text */}
           <div className="telemedicina-bottom-text">
              <p className="telemedicina-paragraph">
                Todas as consultas de NextShape são conduzidas por profissionais de saúde habilitados, com emissão de prescrições, acompanhamento de protocolos de emagrecimento e orientações individualizadas, tudo de forma digital e segura.
              </p>
              <p className="telemedicina-paragraph">
                Com a NextShape, o consumidor tem a confiança de que cada recomendação é personalizada, legítima e segura, integrando tecnologia, saúde e bem-estar de forma inovadora.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="telemedicina-image-card">
            <img src="/assets/imagem/telemedicina2.png" alt="Mulher usando smartphone" />
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

export default Telemedicina;

