import { useTranslation } from 'react-i18next';
import { ArrowRight, Award, BadgeCheck, Sparkles } from 'lucide-react';
import './Pricing.css';

function Pricing() {
  const { t } = useTranslation();

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-content">
          <div className="pricing-text">
            <span className="section-tag">{t('pricing.subtitle')}</span>
            <h2 className="section-title">{t('pricing.title')}</h2>
            <p className="pricing-description">{t('pricing.description')}</p>
            
            <div className="pricing-benefits">
              <div className="benefit">
                <Award size={24} />
                <span>Quality Guaranteed</span>
              </div>
              <div className="benefit">
                <BadgeCheck size={24} />
                <span>Certified Products</span>
              </div>
              <div className="benefit">
                <Sparkles size={24} />
                <span>Best Price Match</span>
              </div>
            </div>

            <a href="#contact" className="pricing-cta">
              <span>{t('pricing.cta')}</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="pricing-visual">
            <div className="price-card">
              <div className="price-header">
                <span className="price-label">Starting from</span>
                <div className="price-amount">
                  <span className="currency">$</span>
                  <span className="amount">2,499</span>
                </div>
                <span className="price-period">Best market price</span>
              </div>
              <div className="price-features">
                <div className="price-feature">✓ Full warranty included</div>
                <div className="price-feature">✓ Technical support</div>
                <div className="price-feature">✓ Fast delivery</div>
                <div className="price-feature">✓ Installation guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
