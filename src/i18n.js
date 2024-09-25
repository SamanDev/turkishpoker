
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
import translationFA from './locales/fa.json';
import translationTR from './locales/tr.json';

const resources = {
  fa: {
    translation: translationFA
  },
  tr: {
    translation: translationTR
  }
};

i18n
 
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'tr', // زبان پیش‌فرض
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });


export default i18n;
