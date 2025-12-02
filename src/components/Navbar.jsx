import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu, X, Globe, Zap, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const languages = [
  { code: 'ka', name: 'GE', flag: '🇬🇪' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'ru', name: 'RU', flag: '🇷🇺' },
  { code: 'tr', name: 'TR', flag: '🇹🇷' }
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const changeLanguage = (code) => {
    navigate(`/${code}${window.location.hash}`);
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setLangOpen(false);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  const basePath = `/${lang || 'ka'}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href={`${basePath}#home`} className="navbar-logo">
          <Zap className="logo-icon" />
          <span className="logo-text">GENSERVICE</span>
        </a>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href={`${basePath}#home`} className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.home')}</a>
          <a href={`${basePath}#about`} className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
          <a href={`${basePath}#products`} className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.products')}</a>
          <a href={`${basePath}#contact`} className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
          
          <div className="language-selector">
            <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
              <Globe size={18} />
              <span>{currentLang.flag} {currentLang.name}</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${lang.code === i18n.language ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href={`${basePath}#contact`} className="nav-cta" onClick={() => setIsOpen(false)}>
            {t('nav.getQuote')}
          </a>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
