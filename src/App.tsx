import './app.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {
  const parallaxSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to hash anchor if present
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Efeito de paralaxe
    const handleScroll = () => {
      if (!parallaxSectionRef.current) return;

      const section = parallaxSectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Verifica se a seção está visível na viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const parallaxSpeed = 0.5;
        // Calcula o deslocamento baseado na posição da seção
        // Quando a seção está no topo, yPos = 0
        // Quando a seção sai da tela, yPos aumenta
        const scrolled = window.pageYOffset;
        const sectionTop = section.offsetTop;
        const yPos = (scrolled - sectionTop) * parallaxSpeed;
        section.style.backgroundPosition = `center ${yPos}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Chama uma vez para posicionar inicialmente

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <video src="/assets/Videos/video-header.mp4" autoPlay muted loop playsInline preload="auto" className="hero-video" />
        {/* Navigation */}
        <Nav />

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">
              O primeiro passo para<br />
              mudar começa hoje!
            </h1>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="max-w-2xl">
              <p className="section-paragraph">
                Emagreça com segurança, conforto e resultado. <br />
                Descubra um novo jeito de cuidar do seu corpo sem sair de casa!
              </p>
            </div>
            <Button color="primary" variant="shadow" className="btn btn--dark">
              Começar sua transformação
            </Button>
          </div>

          {/* Black Card with DNA */}
          <div className="black-card">
            <video src="/assets/Videos/video-protocolo.mp4" autoPlay muted loop playsInline preload="auto" className="hero-video" />
            <div className="overlay-dark"></div>
            <div className="relative z-10">
              <div className="container protocolo-content">
                <div>
                  <h3 className="protocolo-title">
                    O protocolo de Emagrecimento personalizado<br />
                    com a inovação da <span className="text-yellow">Tirzepatida!</span>
                  </h3>
                  <p className="protocolo-text">
                    Conheça a terapia injetável de ponta, cientificamente comprovada e<br />
                    rigorosamente supervisionada por nossa equipe médica especializada, para<br />
                    resultados reais e duradouros.
                  </p>
                </div>
                <div>
                  <Button 
                    as={Link}
                    to="/procedimento"
                    color="primary"
                    variant="shadow"
                    className="btn btn--yellow"
                  >
                    Otimize seu emagrecimento!
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Three Images Grid */}
          <div className="grid-3">
            <div className="image-card">
              <img
                src="assets/imagem/woman1.png"
                alt="Woman at beach"
              />
            </div>
            <div className="image-card">
              <img
                src="assets/imagem/woman2.png"
                alt="Woman in gym"
              />
            </div>
            <div className="image-card">
              <img
                src="assets/imagem/woman3.png"
                alt="Happy woman"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Full Width Image with Text */}
      <section 
        ref={parallaxSectionRef}
        className="third-section" 
        style={{ backgroundImage: 'url(assets/imagem/woman-gym.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'initial' }}
      >
        <div className="overlay-gradient"></div>
        <div className="third-inner">
          <div className="container third-container" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div className="third-text">
              <h2 className="text-white text-6xl font-light mb-8">
                Emagreça <span className="text-yellow">com<br />segurança</span> e resultados<br />reais!
              </h2>
              <p className="text-emagrecimento">
                Unimos a ciência e cuidado humano para oferecer um tratamento de<br />
                emagrecimento, supervisionado por médicos e entregue com<br />
                praticidade e segurança em todo o Brasil, tudo realizado por<br />
                Teleconsultas!
              </p>
              <Button
                as={Link}
                to="/telemedicina"
                color="primary"
                variant="shadow"
                className="btn btn--yellow"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
              >
                Saiba mais sobre as Teleconsultas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Video Testimonials */}
      <section className="section section--gray">
        <div className="container">
          <div className="testimonials-section">
            <div>
              <h2 className="testimonials-title">
                Veja como o<br />
                tratamento está<br />
                ajudando pessoas<br />
                reais a alcançar<br />
                resultados incríveis<br />
                e duradouros.
              </h2>
              <Button color="primary" variant="shadow" className="btn btn--yellow">
                Iniciar minha transformação
              </Button>
            </div>
            <div className="testimonials-videos">
              <div className="video-card">
                <video
                  src="/assets/Videos/depoimento1.mp4"
                  className="video-fill"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="video-card">
                <video
                  src="/assets/Videos/depoimento2.mp4"
                  className="video-fill"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Journey Steps */}
      <section id="como-funciona" className="section--yellow">
        <div className="no-pad">
          <div className="journey-section">
            <div className="section-text-pad journey-content">
              <h2 className="text-jornada">
                Sua jornada para<br />
                o <span className="italic">emagrecimento</span><br />
                começa em<br />
                poucos passos!
              </h2>
              <p className="sub-jornada">
                Transforme sua rotina de forma simples, segura e<br />
                100% online.
              </p>

              <div className="journey-steps">
                <div className="journey-step">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <h3 className="text-passos">Passo 1</h3>
                  </div>
                  <h4 className="text-passos-sub">
                    Preencha seu formulário de avaliação
                  </h4>
                  <p className="text-passos-text">
                    Informe seus objetivos, hábitos diários e dados físicos. Essas informações ajudam a entender seu perfil e confirmar se você está apto para iniciar o programa de forma personalizada.
                  </p>
                </div>

                <div className="journey-step">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <h3 className="text-passos">Passo 2</h3>
                  </div>
                  <h4 className="text-passos-sub">
                    Escolha seu plano e realize sua consulta
                  </h4>
                  <p className="text-passos-text">
                    Após a aprovação, selecione o plano de assinatura desejado e agende sua consulta online com o médico. É nessa etapa que será feita a avaliação clínica e a prescrição do tratamento ideal para o seu caso.
                  </p>
                </div>

                <div className="journey-step">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <h3 className="text-passos">Passo 3</h3>
                  </div>
                  <h4 className="text-passos-sub">
                    Viva o resultado e sinta a diferença!
                  </h4>
                  <p className="text-passos-text">
                    Após a consulta, o medicamento chega à sua casa com frete grátis, pronto para o início do tratamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative img-cover-container">
              <img
                src="assets/imagem/caixas.png"
                alt="Next Shape boxes"
                className="img-cover-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - FAQ (Accordion) */}
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

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;