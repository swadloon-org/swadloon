import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
    fontFamily: 'monospace',
    color: `rgb(255 0 255 / 100%)`,
    padding: '.7em .4em',
    margin: '0',
    lineHeight: 0,
    fontSize: '90%',
    borderRadius: 6,
  })),
};
