import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">{t('contact.subtitle')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <span className="info-label">{t('contact.addressLabel')}</span>
                <span className="info-value">{t('contact.address')}</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <span className="info-label">{t('contact.phoneLabel')}</span>
                <span className="info-value">+995 511 720 363</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <span className="info-label">{t('contact.emailLabel')}</span>
                <span className="info-value">info@erk-power.com</span>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-placeholder">
                <MapPin size={48} />
                <span>Kahramankazan, Ankara</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('contact.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              <span>{t('contact.send')}</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
