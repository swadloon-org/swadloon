import { DesignSystem, createShadow } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: 'fit-content',
}));
export const imageAuthor = style((theme: DesignSystem) => ({
  width: '54px',
  height: '54px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '50%',
  border: `1px solid ${theme.colors.primary500}`,
}));
export const fullName = style((theme: DesignSystem) => ({}));
export const title = style((theme: DesignSystem) => ({}));

export const contentText = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: `${theme.sizing.sizes.x1}`,
  paddingLeft: `${theme.sizing.sizes.x1}`,
  maxWidth: '25 0px',

  '@media': {
    [theme.layout.media.desktop]: {
      maxWidth: '300px',
    },
  },
}));
