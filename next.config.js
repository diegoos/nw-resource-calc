/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false,
  }
}
