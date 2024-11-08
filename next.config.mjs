/** @type {import('next').NextConfig} */
const nextConfig = {
  //productionSourceMaps: process.env.NEXT_PUBLIC_ENABLE_SOURCE_MAPS === 'true',
  reactStrictMode: false,
  env: {
    CUSTOM_ENV: process.env.NEXT_PUBLIC_ENV || 'development',
    CUSTOM_API_PRINT_LOG: process.env.NEXT_PUBLIC_API_PRINT_LOG || 'true',
    CUSTOM_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
    CUSTOM_API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
    CUSTOM_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (config.mode === 'development') {
        config.devtool = 'source-map';
        config.optimization.minimize = false;
      }

      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|m4a)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
