/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 */
export interface TwitterMetadata {
  /**
   * The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”.
   */
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  /**
   * @username for the website used in the card footer.
   */
  site?: string;
  /**
   * @username for the content creator / author.
   */
  creator?: string;
  /**
   * Images for this Card support an aspect ratio of 2:1 with minimum dimensions
   * of 300x157 or maximum of 4096x4096 pixels.
   * Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.
   * Only the first frame of an animated GIF will be used. SVG is not supported.
   */
  image?: string;
  /**
   * A text description of the image conveying the essential nature of an image
   * to users who are visually impaired. Maximum 420 characters.
   */
  imageAlt?: string;
}
