import { Iconography, IconSizes, VIEWPORT } from '@newrade/core-design-system';
import { CSSIconography } from '../design-system';
import { keys, px } from './utilities';

export function getCSSIconography({ sizes }: Iconography): CSSIconography {
  const cssSizes = createCSSIconSizes({ variant: sizes });

  return {
    sizes: cssSizes,
  };
}

function createCSSIconSizes({
  variant,
}: {
  variant: Iconography['sizes'];
}): Iconography<string>['sizes'] {
  const variantStyles = keys(variant)
    .filter((viewport) => Object.values(VIEWPORT).includes(viewport as VIEWPORT))
    .reduce((previous, viewport) => {
      const sizes = variant[viewport];
      const viewportStyle = keys(sizes).reduce((previous, size) => {
        previous[size] = px({ value: sizes[size] });
        return previous;
      }, {} as IconSizes<string>);
      (previous as any)[viewport] = viewportStyle;
      return previous;
    }, {} as Iconography<string>['sizes']);
  return variantStyles;
}
