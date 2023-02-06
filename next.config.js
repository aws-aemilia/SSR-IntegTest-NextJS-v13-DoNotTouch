/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        // will match exactly /basic-redirect
        source: "/basic-redirect",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /wildcard-redirect/a/b/c/
        source: "/wildcard-redirect/:slug*",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /regex-redirect/123 but not /regex-redirect/abc
        source: "/regex-redirect/:slug(\\d{1,})",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /query-redirect?q=hello
        source: "/query-redirect",
        destination: "/redirects",
        permanent: false,
        has: [
          {
            type: "query",
            key: "q",
            value: "hello",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/custom-headers",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
        ],
      },
    ];
  },
};
