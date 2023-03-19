const path = require("path");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/subscriber",
        destination: "https://mycontentpal.api-us1.com",
      },
      {
        source: "/api/add-to-automation",
        destination: "https://mycontentpal.api-us1.com",
      },
    ];
  },
  i18n: {
    locales: ["en-us"],
    defaultLocale: "en-us",
  },
  trailingSlash: false,
  experimental: { images: { allowFutureImage: true } },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: [
      "via.placeholder.com",
      "2.gravatar.com",
      "cdn.sanity.io",
      "flagcdn.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/post/:path*",
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/content-writing/startups-content",
        destination: "/content-writing/startups",
        permanent: true,
      },
      {
        source: "/content-writing/dental-website-content",
        destination: "/content-writing/dental-website",
        permanent: true,
      },
      {
        source: "/content-writing/travel-company-content",
        destination: "/content-writing/travel-company",
        permanent: true,
      },
      {
        source: "/content-writing/law-firm-content",
        destination: "/content-writing/law-firm",
        permanent: true,
      },
      {
        source: "/content-writing/finance-content",
        destination: "/content-writing/finance",
        permanent: true,
      },
      {
        source: "/content-writing/small-business-content",
        destination: "/content-writing/small-business",
        permanent: true,
      },
      {
        source: "/content-writing/cannabis-business-content",
        destination: "/content-writing/cannabis-business",
        permanent: true,
      },
      {
        source: "/content-writing/sass-content",
        destination: "/content-writing/sass",
        permanent: true,
      },
      {
        source: "/content-writing/b2b-content",
        destination: "/content-writing/b2b",
        permanent: true,
      },
      {
        source: "/content-writing/hotel-content",
        destination: "/content-writing/hotel",
        permanent: true,
      },

      {
        source: "/content-writing/affiliate-marketing-content",
        destination: "/content-writing/affiliate-marketing",
        permanent: true,
      },
    ];
  },
};

// webpackDevMiddleware: (config) => {
//   config.watchOptions = {
//     poll: 1000,
//     aggregateTimeout: 300,
//   };

//   return config;
// },
