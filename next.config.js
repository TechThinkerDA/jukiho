/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Netlify má dobrú podporu pre Next.js, takže nepotrebujeme statický export
    // output: 'export',
    // i18n konfigurácia nie je podporovaná v App Router, používame react-i18next namiesto toho
    // i18n: {
    //     locales: ['en', 'de', 'sk'],
    //     defaultLocale: 'en'
    // }
};

module.exports = nextConfig;
