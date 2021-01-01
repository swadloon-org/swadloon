import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles = {
  large: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large),
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({})),
  small: style(({ theme, cssTheme }: Theme) => ({})),
  xSmall: style(({ theme, cssTheme }: Theme) => ({})),
};
