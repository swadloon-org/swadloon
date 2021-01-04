import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  height: `800px`,
  width: `100%`,
}));
export const container = style((theme: DesignSystem) => ({
  width: `100%`,
  height: `100%`,
  display: 'grid',
  alignContent: 'center',
}));
export const content = style((theme: DesignSystem) => ({}));
