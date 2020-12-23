const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  jobs: {
    ajob: {
      space: process.env.CONTENTFUL_SPACEID_VSB,
      outDir: './types/contentful',
      locales: {
        base: 'fr_CA',
        extra: ['en_CA'],
      },
      namespace: 'Content',
      storeClass: 'ContentStore',
    },
  },
};
