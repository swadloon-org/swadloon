import { style } from '@vanilla-extract/css';

export const field = style({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  width: '100%',
  margin: '1rem 0 0 0',
});

export const label = style({
  width: '10%',
});

export const input = style({
  width: '90%',
});

export const button = style({
  margin: '1rem 0.5rem 0 0',
});

export const ul = style({
  listStyle: 'none',
  margin: '1rem 0 0 0',
  padding: '0',
});

export const li = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  width: '100%',

  // &:nth-of-type(2n) > div:nth-of-type(1) {
  //   backgroundColor: 'white',
  // }
});

export const data = style({
  backgroundColor: '#eff3f6',
  padding: '0.5rem',
  flex: 'auto',
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'nowrap',
});

export const dataLabel = style({
  width: '40%',
});
export const dataHref = style({
  width: '60%',
});
export const optionButton = style({
  margin: '0 0 0 0.5rem',
});
