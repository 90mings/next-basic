/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENV_DATA: 'env test data',
  },
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/login', // 기본 경로 설정
  async redirects() {
    // 리디렉션 설정
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true, // 영구적인 리디렉션 설정
      },
      // 다른 리디렉션 규칙 추가 가능
    ]
  },
}

module.exports = nextConfig
