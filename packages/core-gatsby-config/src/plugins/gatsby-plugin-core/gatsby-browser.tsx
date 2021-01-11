import { GatsbyBrowser } from 'gatsby';
/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */
import 'web-animations-js/web-animations.min';

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    // @ts-ignore
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
