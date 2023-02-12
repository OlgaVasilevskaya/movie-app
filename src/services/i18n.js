import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationRu = { SignIn: 'Войти', SignOut: 'Выйти' };
const translationEn = { SignIn: 'Sign In', SignOut: 'Sign out' };

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translationRu },
      en: { translation: translationEn },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
  });

export default i18n;
