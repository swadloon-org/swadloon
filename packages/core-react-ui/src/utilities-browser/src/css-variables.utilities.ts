import { getCSSVar } from '../../utilities-iso/css-variables.utilities';

export function getCSSVarValue(name?: string) {
  if (getIsSSR()) {
    return '';
  }

  try {
    return window.getComputedStyle(document.body).getPropertyValue(getCSSVar(name));
  } catch (error) {
    return '';
  }
}

export function getIsSSR() {
  return typeof window === 'undefined';
}
