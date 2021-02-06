import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { githubTheme } from './code-theme';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
    fontFamily: 'monospace',
    padding: '.7em .4em',
    margin: '0',
    lineHeight: 0,
    fontSize: '90%',
    borderRadius: 6,
    backgroundColor: githubTheme.plain.backgroundColor,
  })),
};
