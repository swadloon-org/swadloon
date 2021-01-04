import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in LABEL_SIZE]: string } & { [key in TEXT_STYLE]: string } = {
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.medium),
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.small),
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.xSmall),
  })),

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
};
