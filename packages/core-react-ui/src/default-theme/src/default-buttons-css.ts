import { CSSButtons } from '../design-system/design-system.js';
import { getCSSButtons } from '../utilities-theme/buttons.utilities.js';

import { defaultButtons } from './default-buttons.js';

export const defaultCSSButtons: CSSButtons = getCSSButtons(defaultButtons);
