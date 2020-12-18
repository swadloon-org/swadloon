import { DesignSystem } from '@newrade/core-design-system';
import { styleMap } from 'treat';

export const styles = styleMap((theme: DesignSystem) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(0deg 0% 0% / 6%)',
  },
}));
