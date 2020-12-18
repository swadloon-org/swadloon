import { HEADING } from '../../foundations/typography';

export interface HeadingProps {
  variant?: HEADING;
}

export type HeadingVariants = { [key in keyof typeof HEADING]: HeadingStyle };

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
