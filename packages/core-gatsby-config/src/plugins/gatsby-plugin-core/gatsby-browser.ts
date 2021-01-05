import { GatsbyBrowser } from 'gatsby';
import 'web-animations-js/web-animations.min';

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    // @ts-ignore
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
