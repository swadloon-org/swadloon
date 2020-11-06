/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

require('dotenv').config();

export type BlogPostContext = {
  id: string;
  content: any;
};

exports.createPages = async ({}) => {};
