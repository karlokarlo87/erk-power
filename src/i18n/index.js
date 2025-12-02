import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import tr from './locales/tr.json';
import ka from './locales/ka.json';
import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
  ka: { translation: ka },
  ru: { translation: ru }
};

// Get language from URL path
const getLanguageFromPath = () => {
  const path = window.location.pathname;
  const langMatch = path.match(/^\/(ka|en|ru|tr)/);
  if (langMatch) {
    return langMatch[1];
  }
  return localStorage.getItem('language') || 'ka';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromPath(),
    fallbackLng: 'ka',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
