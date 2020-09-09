/**
 * Non-AMP web page with structured data
 *
 * @see https://developers.google.com/search/docs/data-types/article#non-amp-sd
 * @see https://search.google.com/test/rich-results (test article page)
 * @example
 *  ```html
 *  <html>
 *   <head>
 *   <title>Article headline</title>
 *   <script type="application/ld+json">
 *   {
 *     "@context": "https://schema.org",
 *     "@type": "NewsArticle",
 *     "headline": "Article headline",
 *     "image": [
 *       "https://example.com/photos/1x1/photo.jpg",
 *       "https://example.com/photos/4x3/photo.jpg",
 *       "https://example.com/photos/16x9/photo.jpg"
 *      ],
 *     "datePublished": "2015-02-05T08:00:00+08:00",
 *     "dateModified": "2015-02-05T09:20:00+08:00"
 *   }
 *   </script>
 *   </head>
 *   <body>
 *   </body>
 * </html>
 * ```
 */
export interface GoogleNonAMPMeta {}
