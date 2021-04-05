import { ColorType } from '../../types';
import { BoxStyle } from '../atoms/box';
import { Variant } from '../components.props';

export enum TextAs {
  p = 'p',
  div = 'div',
}

export enum TextSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xsmall = 'xSmall',
}

export enum TextState {
  rest = 'rest',
}

export type TextProps = Partial<TextStyleProps>;

export interface TextStyleProps {
  variant: Variant;
  size: TextSize;
  state: TextState;
}

export type TextColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type TextBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override> & {};

export type TextVariants<Override extends undefined | string = undefined> = {
  [key in keyof typeof Variant]: TextColors<Override>;
};

export type TextSizes<Override extends undefined | string = undefined> = {
  [key in keyof typeof TextSize]: TextBoxStyle<Override>;
};

export interface Texts<Override extends undefined | string = undefined> {
  variants: TextVariants<Override>;
  sizes: TextSizes<Override>;
}
