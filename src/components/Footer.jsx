import { useTranslation } from 'react-i18next';
import { Zap, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <Zap className="logo-icon" />
              <span className="logo-text">GENSERVICE</span>
            </a>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <a href="#home">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#products">{t('footer.products')}</a>
            <a href="#contact">{t('footer.contact')}</a>
          </div>

          <div className="footer-links">
            <h4>{t('footer.products')}</h4>
            <a href="#products">{t('nav.diesel')}</a>
            <a href="#products">{t('nav.gasoline')}</a>
            <a href="#specs">5-10 kW</a>
            <a href="#specs">101-1100 kW</a>
          </div>

          <div className="footer-links">
            <h4>{t('footer.contact')}</h4>
            <span>Tbilisi, Georgia</span>
            <span>+995 511 720 363</span>
            <span>info@genservice.ge</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} GenService. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
