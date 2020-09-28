export enum HeadingVariant {
  h0 = 'h0',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

export interface HeadingProps {
  variant?: HeadingVariant;
}

export type HeadingVariants = { [key in keyof typeof HeadingVariant]: HeadingStyle };

export interface HeadingStyle {
  color?: string;
  colorIcon?: string;
  borderColor?: string;
  background?: string;
  backgroundColor?: string;
}

export interface Headings {
  variants: HeadingVariants;
}
