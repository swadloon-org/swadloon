import { LINK_STYLE, TEXT_LEVEL, TEXT_STYLE } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in TEXT_STYLE]: string } &
  { [key in LINK_STYLE]: string } &
  { [key in TEXT_LEVEL]: string } = {
  normal: style(({ theme, cssTheme }: Theme) => ({})),
  underLine: style(({ theme, cssTheme }: Theme) => ({})),
  italic: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.italic),
  })),
  bold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.bold),
  })),
  uppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.uppercase),
  })),
  boldUppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
  })),
  italicBold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.italicBold),
  })),

  primary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryText,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.tertiaryText,
  })),
};
