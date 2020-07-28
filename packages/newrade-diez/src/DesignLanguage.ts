import * as coreDesignSystem from 'core-design-system';
import { DesignSystem } from 'core-design-system';

const name = 'newrade';
const themes = new coreDesignSystem.DesignSystemThemes();
const ds = new DesignSystem({
  themes,
});

export const DesignLanguage = {
  name,
  ds,
};
