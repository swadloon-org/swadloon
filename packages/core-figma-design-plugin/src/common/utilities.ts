import { pascal } from 'case';

import { VIEWPORT } from '@newrade/core-design-system';
import { keys } from '@newrade/core-react-ui/utilities-iso';

export function formatNameFigma(value?: string | (string | undefined)[]): string {
  if (!value) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map((str) => (str ? pascal(str) : '')).join('/');
  }

  return pascal(value);
}

export function isViewportProp(value?: VIEWPORT | string): boolean {
  if (!value) {
    return false;
  }

  const found = keys(VIEWPORT).find((viewport) => viewport === value);

  return !!found;
}
