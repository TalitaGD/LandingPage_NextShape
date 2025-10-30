import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/pages/produtos.css';
import Faq from '../components/Faq';

function Produtos() {
  return (
    <div className="page">
      {/* Top Navigation */}
      <section className="section section--white" style={{ paddingTop: '0', paddingBottom: 0 }}>
        <Nav variant="solid" />
      </section>

      {/* Main Products Section */}
      <section className="section produtos-section">
        <div className="container produtos-grid">
          <div className="produtos-content">
            {/* Logo */}
            <div className="produtos-logo">
              <img src="/assets/aesthetic.png" alt="Logo NextShape" />
            </div>

            {/* Headline */}
            <h1 className="produtos-title">
              A nova geração em<br />
              <span className="produtos-title-aesthetic">tecnologia estética</span><br />
              para o crescimento<br />
              do seu negócio!
            </h1>

            {/* Body Paragraph */}
            <p className="produtos-text">
              Os equipamentos para clínicas de estética têm como objetivo potencializar os tratamentos, oferecendo procedimentos mais eficazes, rápidos e seguros. Eles permitem diversificar os serviços, atrair e fidelizar clientes e maximizar a qualidade dos resultados. A Next Shape facilita o acesso à capital ao empresário, e com isso, amplia as possibilidades de negócio e crescimento.
            </p>
          </div>

          {/* Image */}
          <div className="produtos-image-card">
            <img src="/assets/imagem/estetica.png" alt="Tratamento estético" />
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="section produtos-section">
        <div className="container produtos-grid">
          <div className="produtos-content">
            {/* Logo */}
            <div className="produtos-logo">
              <img src="/assets/skin.png" alt="Logo NextShape" />
            </div>

            {/* Headline */}
            <h1 className="produtos-title">
            Cuidado com a sua pele de forma<br />
              <span className="produtos-title-skin">inovadora e prática!</span>
            </h1>

            {/* Body Paragraph */}
            <p className="produtos-text">
            Os tratamentos e cuidados da pele enfrentam desafios como a sensibilidade da pele, a 
            necessidade de uma rotina consistente, o uso de produtos adequados e a gestão de 
            condições específicas como fotoenvelhecimento. <br />
            Outros desafios incluem o acesso limitado à dermatologia para uma parte importante da pessoas.
            A Next Shape proporciona acesso a teleconsulta, serviços e produtos para você cuidar da saúde de sua pele.
            </p>
          </div>

          {/* Image */}
          <div className="produtos-image-card">
            <img src="/assets/imagem/skin.png" alt="Tratamento estético" />
          </div>
        </div>
      </section>

         {/* Main Products Section */}
         <section className="section produtos-section">
        <div className="container produtos-grid">
          <div className="produtos-content">
            {/* Logo */}
            <div className="produtos-logo">
              <img src="/assets/hair.png" alt="Logo NextShape" />
            </div>

            {/* Headline */}
            <h1 className="produtos-title">
            Cuidado com a sua pele de forma<br />
              <span className="produtos-title-hair">inovadora e prática!</span>
            </h1>

            {/* Body Paragraph */}
            <p className="produtos-text">
            A queda de cabelo masculino é uma condição comum, principalmente a calvície de origem genética 
            (alopecia androgenética), e apresenta uma série de desafios que vão além da questão estética, 
            como: <b>desafio do diagnóstico, tratamentos variados, custos dos tratamentos.</b><br />
            <br />
            A Next Shape proporciona acesso a teleconsulta, serviços e produtos para você cuidar da saúde 
            dos seus cabelos.
            </p>
          </div>

          {/* Image */}
          <div className="produtos-image-card">
            <img src="/assets/imagem/hair.png" alt="Tratamento estético" />
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

export default Produtos;

