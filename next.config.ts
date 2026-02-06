// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Run ESLint separately via `npm run lint` (avoids deprecated next lint)
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   // Stub optional peer deps from @standard-community/standard-json
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       effect: false,
//       sury: false,
//       "@valibot/to-json-schema": false,
//     };
//     return config;
//   },
// };

// export default nextConfig;




import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Run ESLint separately via `npm run lint`
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Fix Windows + wrong workspace root detection
  outputFileTracingRoot: path.join(__dirname),

  // Stub optional peer deps
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      effect: false,
      sury: false,
      "@valibot/to-json-schema": false,
    };
    return config;
  },
};

export default nextConfig;
