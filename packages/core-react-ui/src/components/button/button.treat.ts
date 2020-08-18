import { style } from 'treat';
import { DesignSystem } from 'core-design-system';

export const baseButton = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
}));

export const primaryButton = style(() => ({
  fontSize: '1rem',
}));

export const iconButton = style(() => ({
  fontSize: '2rem',
}));
