/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/family-doctor',
        destination: '/family-doctors-accepting-new-patients',
        permanent: true,
      },
      {
        source: '/family-doctors',
        destination: '/family-doctors-accepting-new-patients',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
