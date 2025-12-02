import { useTranslation } from 'react-i18next';
import { Gauge, Shield, HeartHandshake, Truck } from 'lucide-react';
import './About.css';

function About() {
  const { t } = useTranslation();

  const features = [
    { icon: Gauge, key: 'feature1' },
    { icon: Shield, key: 'feature2' },
    { icon: HeartHandshake, key: 'feature3' },
    { icon: Truck, key: 'feature4' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">{t('about.subtitle')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-description">{t('about.description')}</p>
        </div>

        <div className="features-grid">
          {features.map(({ icon: Icon, key }, index) => (
            <div 
              className="feature-card" 
              key={key}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <Icon size={28} />
              </div>
              <h3 className="feature-title">{t(`about.${key}.title`)}</h3>
              <p className="feature-desc">{t(`about.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="about-visual">
          <div className="visual-box">
            <div className="visual-content">
              <div className="power-indicator">
                <div className="power-ring"></div>
                <div className="power-ring"></div>
                <div className="power-ring"></div>
                <span className="power-text">1100 kVA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
