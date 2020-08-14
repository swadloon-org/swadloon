import { style } from 'treat';
import { Theme } from 'treat/theme';

export const baseButton = style((theme: Theme) => ({
  backgroundColor: theme.colors.primary[500],
}));

export const primaryButton = style(() => ({
  fontSize: '1rem',
}));

export const iconButton = style(() => ({
  fontSize: '2rem',
}));
