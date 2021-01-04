import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  normal: style(({ theme, cssTheme }: Theme) => ({
    color: 'rgb(33, 33, 33)',
    backgroundColor: 'rgb(255, 246, 218)',
    borderLeft: '8px solid rgb(255, 212, 81)',
    padding: '20px 16px 20px 25px',
    margin: '20px 0px',
  })),
};
