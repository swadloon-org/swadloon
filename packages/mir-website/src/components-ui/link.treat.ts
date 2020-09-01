import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const link = style((theme: DesignSystem) => ({
  color: theme.colorIntents.primaryReversed,
}));

export const active = style((theme: DesignSystem) => ({
  color: theme.colorIntents.primary,
}));
