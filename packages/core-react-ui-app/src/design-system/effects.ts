import { Effects, TextShadows } from '@newrade/core-design-system';
import { defaultBoxShadows } from '@newrade/core-react-ui/lib/design-system/index';

export const textShadows: TextShadows = {
  light: { offsetX: 0, offsetY: 2, blur: 17, color: { h: 0, s: 0, l: 0, a: 10 } },
  medium: { offsetX: 0, offsetY: 2, blur: 17, color: { h: 0, s: 0, l: 0, a: 10 } }, // TODO set default
  heavy: { offsetX: 0, offsetY: 2, blur: 17, color: { h: 0, s: 0, l: 0, a: 10 } }, // TODO set default
};

export const effects: Effects = {
  boxShadows: defaultBoxShadows,
  innerBoxShadows: defaultBoxShadows,
  textShadows: textShadows,
};
