import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  table: style(({ theme, cssTheme }: Theme) => ({
    minWidth: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: cssTheme.colors?.colors.grey['100'],
  })),
};
