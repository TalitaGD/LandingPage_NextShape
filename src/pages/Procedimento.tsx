import { Button } from '@heroui/react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import '../styles/pages/procedimento.css';

function Procedimento() {
  return (
    <div className="page">
      {/* Top Navigation */}
      <section className="section section--white" style={{ paddingTop: '0', paddingBottom: 0 }}>
        <Nav variant="solid" />
      </section>

      {/* Main Procedure Section */}
      <section className="section procedimento-section">
        <div className="container procedimento-grid">
          <div className="procedimento-content">
            {/* Main Title */}
            <h1 className="procedimento-title">
              Segurança total com <span className="procedimento-title-highlight">Tirzepatida</span>
            </h1>

            {/* Introductory Paragraph */}
            <p className="procedimento-intro">
              A Tirzepatida é um medicamento inovador para o tratamento de sobrepeso, obesidade ou diabetes tipo 2, oferecendo resultados que vão além do controle glicêmico. Ela é classificada como um agonista dual de GLP-1 e GIP.
            </p>

            {/* Numbered Sections */}
            <div className="procedimento-items">
              <div className="procedimento-item">
                <div className="procedimento-item-header">
                  <div className="procedimento-item-line"></div>
                  <h4 className="procedimento-item-title">1. Redução de Peso Significativa</h4>
                </div>
                <p className="procedimento-item-text">
                  O medicamento é capaz de promover perda de peso consistente e segura, reduzindo o apetite, aumentando a saciedade e melhorando o metabolismo energético.
                </p>
              </div>

              <div className="procedimento-item">
                <div className="procedimento-item-header">
                  <div className="procedimento-item-line"></div>
                  <h4 className="procedimento-item-title">2. Controle da Glicemia</h4>
                </div>
                <p className="procedimento-item-text">
                  Melhora a regulação da glicose no sangue para pacientes com diabetes tipo 2, resultando em níveis de açúcar mais estáveis e reduzindo o risco de picos de hiperglicemia.
                </p>
              </div>

              <div className="procedimento-item">
                <div className="procedimento-item-header">
                  <div className="procedimento-item-line"></div>
                  <h4 className="procedimento-item-title">3. Melhoria do Perfil Metabólico</h4>
                </div>
                <p className="procedimento-item-text">
                  Contribui para a melhoria do perfil lipídico, reduzindo o colesterol ruim (LDL) e os triglicerídeos, e aumentando o colesterol bom (HDL), fortalecendo assim a saúde cardiovascular.
                </p>
              </div>

              <div className="procedimento-item">
                <div className="procedimento-item-header">
                  <div className="procedimento-item-line"></div>
                  <h4 className="procedimento-item-title">4. Praticidade e Adesão ao Tratamento</h4>
                </div>
                <p className="procedimento-item-text">
                  A aplicação subcutânea semanal simplifica a rotina do paciente, melhorando a adesão ao tratamento e os resultados a longo prazo.
                </p>
              </div>

              <div className="procedimento-item">
                <div className="procedimento-item-header">
                  <div className="procedimento-item-line"></div>
                  <h4 className="procedimento-item-title">5. Apoio à Saúde Integral</h4>
                </div>
                <p className="procedimento-item-text">
                  Além dos efeitos clínicos, a Tirzepatida pode melhorar a qualidade de vida, aumentando a energia, a disposição e o bem-estar, impactando positivamente a saúde mental e emocional de pacientes que lidam com sobrepeso ou obesidade.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="procedimento-image-card">
            <img src="/assets/imagem/procedimentos.png" alt="Mulheres celebrando" />
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section className="section section--white">
        <div className="container">
          <div className="faq-section">
            <div>
              <h2 className="faq-title">
                Perguntas<br />
                frequentes
              </h2>
              <p className="faq-sub">
                Tire suas dúvidas sobre o programa NextShape!<br />
                Ou entre em contato com nosso time!
              </p>
              <Button color="primary" variant="shadow" className="btn btn--yellow">
                Quero agendar
              </Button>
              <p className="faq-note">
                Nosso time atua <strong>24h</strong> para melhor te atender, faça um agendamento agora mesmo!
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

export default Procedimento;

