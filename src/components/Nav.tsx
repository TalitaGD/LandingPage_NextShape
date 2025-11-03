import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

type NavProps = {
  variant?: 'overlay' | 'solid';
};

function Nav({ variant = 'overlay' }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const navigate = useNavigate();
  
  const isOverlay = variant === 'overlay';
  
  // Detecta se está em desktop para ajustar o logo
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  
  // Em desktop com overlay, usa logo escuro (background branco)
  // Em mobile ou solid, usa a lógica original
  const logoPath = (isDesktop && isOverlay) || variant === 'solid' 
    ? '/assets/logo-dark.png' 
    : '/assets/logo.png';
  
  // Adiciona/remove classe no body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-mobile-open');
    } else {
      document.body.classList.remove('menu-mobile-open');
    }
    
    return () => {
      document.body.classList.remove('menu-mobile-open');
    };
  }, [isMenuOpen]);
  
  const menuItems = [
    { label: 'Quem somos', path: '/quem-somos', type: 'route' },
    { label: 'Produtos', path: '/produtos', type: 'route' },
    { label: 'Como funciona', path: '/#como-funciona', type: 'hash' },
    { label: 'Contato', path: '#contato', type: 'hash' },
    { label: 'Comece agora', path: '#comece-agora', type: 'hash' },
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    setIsMenuOpen(false);
    if (item.type === 'route') {
      navigate(item.path);
    } else if (item.type === 'hash') {
      if (item.path.startsWith('/#')) {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.path.replace('/#', '#'));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${isOverlay ? 'nav-overlay' : 'nav-solid'}`}>
        <div className="nav-container">
          {/* Logo */}
          <RouterLink to="/" onClick={closeMenu} className="nav-logo">
            <img src={logoPath} alt="Logo NextShape" className="logo" />
          </RouterLink>

          {/* Desktop Menu */}
          <ul className="nav-links-desktop">
            {menuItems.map((item) => (
              <li key={item.path}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={isOverlay ? 'nav-link-overlay' : 'nav-link-solid'}
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <a
                    href={item.path}
                    className={isOverlay ? 'nav-link-overlay' : 'nav-link-solid'}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Button / X Icon */}
          <button
            className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className="nav-close-icon" />
            ) : (
              <>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-overlay" onClick={closeMenu}></div>
        <div className="nav-mobile-content">
          <ul className="nav-links-mobile">
            {menuItems.map((item) => (
              <li key={item.path}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className="nav-link-mobile"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <a
                    href={item.path}
                    className="nav-link-mobile"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
