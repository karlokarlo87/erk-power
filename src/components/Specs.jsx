import { useTranslation } from 'react-i18next';
import { Zap } from 'lucide-react';
import './Specs.css';

function Specs() {
  const { t } = useTranslation();

  const ranges = [
    { key: 'range1', power: '5-10 kW', color: '#4ADE80' },
    { key: 'range2', power: '11-20 kW', color: '#22D3EE' },
    { key: 'range3', power: '21-50 kW', color: '#818CF8' },
    { key: 'range4', power: '51-100 kW', color: '#F472B6' },
    { key: 'range5', power: '101-300 kW', color: '#FB923C' },
    { key: 'range6', power: '301-1100 kW', color: '#FFC800' }
  ];

  return (
    <section className="specs" id="specs">
      <div className="specs-container">
        <div className="specs-header">
          <span className="section-tag">{t('specs.subtitle')}</span>
          <h2 className="section-title">{t('specs.title')}</h2>
        </div>

        <div className="specs-grid">
          {ranges.map(({ key, power, color }, index) => (
            <div 
              className="spec-card" 
              key={key}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--accent': color
              }}
            >
              <div className="spec-power">
                <Zap size={20} style={{ color }} />
                <span>{power}</span>
              </div>
              <p className="spec-desc">{t(`specs.${key}.desc`)}</p>
              <div className="spec-bar">
                <div 
                  className="spec-bar-fill" 
                  style={{ 
                    width: `${((index + 1) / ranges.length) * 100}%`,
                    background: `linear-gradient(90deg, ${color}88, ${color})`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specs;
