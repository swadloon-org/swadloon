import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const mainWrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
}));

export const main = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: `1fr`, // 1 column on mobile
  gap: 0,
  alignItems: 'flex-start',
  justifyContent: 'center',

  overflowX: 'initial !important' as any, // override the default Main component

  ['@media']: {
    [cssTheme.layout.media.desktopSmall]: {
      // sidebar, content, aside on desktop
      gridTemplateColumns: `${cssTheme.layout.var.sidebarWidth} minmax(min-content,1fr) ${cssTheme.layout.asideWidth}`,
      justifySelf: 'center',

      paddingLeft: cssTheme.layout.var.contentMargins,
    },
    [cssTheme.layout.media.desktopMedium]: {
      paddingLeft: 0,
    },
  },
}));
