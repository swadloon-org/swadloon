module.exports = {
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
   */
  async rewrites() {
    return {
      // These rewrites are checked after headers/redirects
      // and before pages/public files which allows overriding
      // page files
      beforeFiles: [
        /**
         * Admin paths
         */
        {
          source: '/admin/',
          destination: `https://admin.vasectomie-pierre-boucher.ca/admin/`,
        },
        {
          source: '/admin/:path*',
          destination: `https://admin.vasectomie-pierre-boucher.ca/admin/:path*`,
        },
        /**
         * API
         */
        {
          source: '/api/:path*',
          has: [
            {
              type: 'host',
              value: 'dev.vasectomie-pierre-boucher.ca',
            },
          ],
          destination: `https://dev-api.vasectomie-pierre-boucher.ca/api/:path*`,
        },
        {
          source: '/api/:path*',
          has: [
            {
              type: 'host',
              value: 'master.vasectomie-pierre-boucher.ca',
            },
          ],
          destination: `https://master-api.vasectomie-pierre-boucher.ca/api/:path*`,
        },
        // TODO: dynamic paths are not working falling back to prod api path
        {
          source: '/api/:path*',
          destination: `https://api.vasectomie-pierre-boucher.ca/api/:path*`,
        },
        /**
         * Website
         */
        {
          source: '/:path*',
          destination: `https://website.vasectomie-pierre-boucher.ca/:path*`,
        },
        {
          source: '/',
          destination: `https://website.vasectomie-pierre-boucher.ca`,
        },
      ],
    };
  },
};
