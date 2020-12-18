import { GatsbyBrowser } from 'gatsby';

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    // @ts-ignore
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
