import { GatsbyBrowser } from 'gatsby';

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  //
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  //
  if (!(`IntersectionObserver` in window)) {
    // @ts-ignore
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }

  //
  // polyfill requestIdleCallback / cancelIdleCallback
  //
  window.requestIdleCallback =
    window.requestIdleCallback ||
    function requestIdleCallbackPolyfill(
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) {
      var start = Date.now();
      return window.setTimeout(function () {
        callback({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - start));
          },
        });
      }, 1);
    };
  window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function cancelIdleCallbackPolyfill(id) {
      clearTimeout(id);
    };
};
