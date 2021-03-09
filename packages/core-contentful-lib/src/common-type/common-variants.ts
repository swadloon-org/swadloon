export enum Variant {
  primary = 'primary',
  primaryReversed = 'primaryReversed',
  secondary = 'secondary',
  secondaryReversed = 'secondaryReversed',
  tertiary = 'tertiary',
  tertiaryReversed = 'tertiaryReversed',
}

export enum SectionLayout {
  switcher = 'switcher',
  statement = 'statement',
  stack = 'stack',
  divider = 'divider',
  banner = 'banner',
  callout = 'callout',
  showcase = 'showcase',
  messenger = 'messenger',
}

export enum BlockType {
  /**
   * Used for markdown text and content.
   */
  text = 'text',
  /**
   * Display a single image
   */
  image = 'image',
  /**
   * Display an image as background
   */
  imageBackground = 'imageBackground',
  /**
   * Display a video media
   */
  video = 'video',
  /**
   * Carousel
   */
  carousel = 'carousel',
  /**
   * Display a Google Maps
   */
  googleMaps = 'googleMaps',
}
