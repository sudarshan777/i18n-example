import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from
// import translationEN from "../public/locales/en/translation.json";
// import translationDE from "../public/locales/de/translation.json";

// the translations
// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   de: {
//     translation: translationDE,
//   },
// };

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init(
    {
      //resources,
      ns: ["common", "moduleA", "moduleB"],
      defaultNS: "moduleA",
    },
    (err, t) => {
      i18n.t("myKey"); // key in moduleA namespace (defined default)
      i18n.t("common:myKey"); // key in common namespace
    }
  );

// lng: "en",
// fallbackLng: "en", // use en if detected lng is not available
// keySeparator: false, // we do not use keys in form messages.welcome

// interpolation: {
//   escapeValue: false, // react already safes from xss
// },

// load additional namespaces after initialization
i18n.loadNamespaces("anotherNamespace", (err, t) => {
  /* ... */
});
export default i18n;
