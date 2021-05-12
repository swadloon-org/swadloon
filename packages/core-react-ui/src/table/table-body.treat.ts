import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  tbody: style(({ theme, cssTheme }: Theme) => ({
    borderTopWidth: '1px',
    borderBottomWidth: '0px',
    borderStyle: 'solid',
    borderColor: 'red',
  })),
};
