// next.config.js or next.config.ts
import withNextIntl from './next-intl.plugin.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is important for GitHub Pages deployment
};

export default withNextIntl(nextConfig);
