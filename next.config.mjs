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
      {
        source: '/booking',
        destination: 'https://ocean.cognisantmd.com/online-booking/322be509-ed26-45d8-aa46-a003f21f87a5',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
