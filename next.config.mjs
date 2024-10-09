/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dragonball-api.com'
            }
        ]
    },

    rewrites: () => {

        return [
            {
                source: "/",
                destination: "/Home"
            }
        ]
    }
};

export default nextConfig;
