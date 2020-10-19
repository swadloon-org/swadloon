import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const block = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'min-content',
  alignContent: 'flex-start',
  justifyItems: 'center',

  '@media': {
    [theme.layout.media.desktop]: {
      justifyItems: 'flex-start',
    },
  },
}));

export const alignContentRight = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 auto',
      marginLeft: `${theme.sizing.sizes.x6}`,
    },
  },
}));

export const alignContentLeft = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      margin: '0 auto',
      marginRight: `${theme.sizing.sizes.x6}`,
    },
  },
}));

export const image = style((theme: DesignSystem) => ({
  width: '250px',
  height: '250px',
  '@media': {
    [theme.layout.media.tablet]: {
      width: '366px',
      height: '366px',
    },
    [theme.layout.media.desktop]: {
      width: '535px',
      height: '535px',
      marginLeft: `auto`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x5}`,
  maxWidth: '400px',
  textAlign: 'center',
  '@media': {
    [theme.layout.media.tablet]: {
      marginBottom: `${theme.sizing.sizes.x5}`,
      maxWidth: '500px',
    },
    [theme.layout.media.desktop]: {
      maxWidth: '500px',
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
  },
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `${theme.sizing.sizes.x5}`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [theme.layout.media.desktop]: {
      maxWidth: '500px',
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
  },
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',

  '@media': {
    [theme.layout.media.desktop]: {
      alignSelf: 'flex-start',
    },
  },
}));
