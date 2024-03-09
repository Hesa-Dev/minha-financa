/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // reactStrictMode: true,
  images: {
    /* fonte de imagen */
    domains: [
      'react-email-demo-7s5r0trkn-resend.vercel.app'
    ]
  },
  compiler: {
    styledComponents: true,
  },
}


module.exports = nextConfig
