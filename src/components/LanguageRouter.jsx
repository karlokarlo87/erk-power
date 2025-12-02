import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGUAGES = ['ka', 'en', 'ru', 'tr'];
const DEFAULT_LANGUAGE = 'ka';

function LanguageRouter({ children }) {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // If no language in URL, redirect to default or saved language
    if (!lang) {
      const savedLang = localStorage.getItem('language') || DEFAULT_LANGUAGE;
      navigate(`/${savedLang}${location.hash}`, { replace: true });
      return;
    }

    // If invalid language, redirect to default
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      navigate(`/${DEFAULT_LANGUAGE}${location.hash}`, { replace: true });
      return;
    }

    // Set the language
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n, navigate, location.hash]);

  // Don't render until we have a valid language
  if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
    return null;
  }

  return children;
}

export default LanguageRouter;
export { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE };
