import createMiddleware from "next-intl/middleware";

function Internationalization() {
  return createMiddleware({
    locales: ["en", "de"],
    defaultLocale: "en",
  });
}

export default Internationalization;
