import { useTranslation } from 'react-i18next';
import { Fuel, Battery, Check, ArrowRight } from 'lucide-react';
import './Products.css';

function Products() {
  const { t } = useTranslation();

  const products = [
    {
      key: 'diesel',
      icon: Fuel,
      features: ['feature1', 'feature2', 'feature3', 'feature4']
    },
    {
      key: 'gasoline',
      icon: Battery,
      features: ['feature1', 'feature2', 'feature3', 'feature4']
    }
  ];

  return (
    <section className="products" id="products">
      <div className="products-container">
        <div className="products-header">
          <span className="section-tag">{t('products.subtitle')}</span>
          <h2 className="section-title">{t('products.title')}</h2>
        </div>

        <div className="products-grid">
          {products.map(({ key, icon: Icon, features }, index) => (
            <div 
              className={`product-card ${key}`} 
              key={key}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="product-header">
                <div className="product-icon">
                  <Icon size={32} />
                </div>
                <h3 className="product-title">{t(`products.${key}.title`)}</h3>
              </div>

              <p className="product-description">
                {t(`products.${key}.description`)}
              </p>

              <ul className="product-features">
                {features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    <span>{t(`products.${key}.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="product-cta">
                <span>{t('products.learnMore')}</span>
                <ArrowRight size={18} />
              </a>

              <div className="product-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
