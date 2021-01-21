import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

//
// Wrapper
//

export const incorrect = style((theme: DesignSystem) => ({
  color: 'red',
}));
export const correct = style((theme: DesignSystem) => ({
  color: 'green',
}));
