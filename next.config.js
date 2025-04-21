/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    generateBuildId: async () => {
        return 'build-' + new Date().getTime();
    },
    outputFileTracingExcludes: {
        '*': ['node_modules/**/*']
    }
};

module.exports = nextConfig;
