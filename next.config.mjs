/** @type {import('next').NextConfig} */
const nextConfig = {

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
