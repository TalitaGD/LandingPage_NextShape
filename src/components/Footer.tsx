import '../styles/components/footer.css';
import { Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-headline">Seu novo começo começa aqui!</h2>
        <div className="footer-inner">
          <div className="footer-col">
            <img src="/assets/logo.png" alt="Logo NextShape" className="footer-logo" />
            <p className="footer-text">
              Saúde fácil, prática e do seu jeito. Transforme sua rotina com acompanhamento médico,
              suporte nutricional e resultados seguros com o NextShape.
            </p>
            <p className="footer-cnpj">NEXTSHAPE LTDA - CNPJ: 00.000.000/0000-00</p>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-col footer-col--right">
            <h4 className="footer-title">Nossas redes</h4>
            <div className="footer-social">
              <a 
                className="social-icon" 
                href="https://www.instagram.com/nextshape.br?igsh=MXR5bmNheDR6bmx3cQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} className="social-icon-svg" />
              </a>
              <a 
                className="social-icon" 
                href="#" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} className="social-icon-svg" />
              </a>
            </div>
            <div className="footer-credit">
              design by
              <a 
                href="https://www.zainy.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Zainy"
              >
                <img
                  src="/assets/logo-zainy.png"
                  alt="Zainy"
                  className="footer-credit-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


