/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    generateBuildId: async () => {
        return 'build-' + new Date().getTime();
    }
};

module.exports = nextConfig;
