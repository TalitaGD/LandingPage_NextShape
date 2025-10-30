import '../styles/components/footer.css';
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
              <a className="social-icon" href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#C4A96C" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3.5" stroke="#C4A96C" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#C4A96C"/>
                </svg>
              </a>
              <a className="social-icon" href="#" aria-label="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12a8 8 0 0 1-11.8 7l-3.2 1 1-3.1A8 8 0 1 1 20 12z" stroke="#C4A96C" strokeWidth="1.5"/>
                  <path d="M8.5 9.5c.4 2 2.5 3.9 4.1 4.4.5.1 1-.1 1.3-.6l.5-.7a.7.7 0 0 0-.2-.9l-1-.6a.7.7 0 0 0-.9.1l-.2.2c-.4-.1-1.5-.7-2.1-1.6-.3-.4-.1-.8 0-1l.2-.3a.7.7 0 0 0-.2-.9l-.8-.6a.7.7 0 0 0-1 .2l-.4.6c-.2.2-.3.6-.3.7z" fill="#C4A96C"/>
                </svg>
              </a>
            </div>
            <div className="footer-credit">
              design by
              <img
                src="/assets/logo-zainy.png"
                alt="Zainy"
                className="footer-credit-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


