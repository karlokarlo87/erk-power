import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Phone, MessageCircle, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './MobileFooter.css';

function MobileFooter() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const { isDark, toggleTheme } = useTheme();
  const basePath = `/${lang || 'ka'}`;

  const actions = [
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: t('mobileFooter.whatsapp'),
      href: 'https://wa.me/79013333035',
      color: '#25D366'
    },
    {
      key: 'call',
      icon: Phone,
      label: t('mobileFooter.call'),
      href: 'tel:+995511720363',
      color: '#FFD700'
    },
    {
      key: 'quote',
      icon: FileText,
      label: t('mobileFooter.quote'),
      href: `${basePath}#contact`,
      color: '#F472B6'
    }
  ];

  return (
    <div className="mobile-footer">
      {actions.map(({ key, icon: Icon, label, href, color }) => (
        <a 
          key={key} 
          href={href} 
          className="mobile-action"
          target={key === 'whatsapp' ? '_blank' : undefined}
          rel={key === 'whatsapp' ? 'noopener noreferrer' : undefined}
        >
          <div className="action-icon" style={{ '--action-color': color }}>
            <Icon size={20} />
          </div>
          <span className="action-label">{label}</span>
        </a>
      ))}
      <button className="mobile-action theme-action" onClick={toggleTheme}>
        <div className="action-icon" style={{ '--action-color': '#818CF8' }}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </div>
        <span className="action-label">{t('mobileFooter.theme')}</span>
      </button>
    </div>
  );
}

export default MobileFooter;
