import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ChevronDown, Zap } from 'lucide-react';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const basePath = `/${lang || 'ka'}`;

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}%`,
              '--duration': `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <Zap size={16} />
          <span>{t('hero.subtitle')}</span>
        </div>
        
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        
        <p className="hero-description">
          {t('hero.description')}
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">18-1100</span>
            <span className="stat-label">kVA Range</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href={`${basePath}#products`} className="btn-primary">
            {t('hero.cta')}
          </a>
          <a href={`${basePath}#contact`} className="btn-secondary">
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>

      <a href={`${basePath}#about`} className="scroll-indicator">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

export default Hero;
