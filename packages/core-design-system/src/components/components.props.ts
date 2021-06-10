/**
 * Most components can be rendered in different variants.
 * Primary should be used for buttons, links, sections etc that have more importance than others.
 * The reversed variants have the same level of importance, but are reversed visually.
 * So on a light theme, a primaryReversed section (or any component) will have a dark background.
 */
export enum Variant {
  primary = 'primary',
  primaryReversed = 'primaryReversed',
  secondary = 'secondary',
  secondaryReversed = 'secondaryReversed',
  tertiary = 'tertiary',
  tertiaryReversed = 'tertiaryReversed',
  fourth = 'fourth',
}
