module.exports = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${ns}_${lang}.json`).then((m) => m.default),
};
