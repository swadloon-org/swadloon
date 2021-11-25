import { kebab } from 'case';

import { cssVar, cssVarName } from './css-variable.utilities';

export function getFormattedCSSVar(options: {
  prefix?: string;
  category?: string;
  propName?: string;
}) {
  return cssVar(getFormattedCSSVarName(options));
}

export function getFormattedCSSVarName({
  prefix,
  category,
  propName,
}: {
  prefix?: string;
  category?: string;
  propName?: string;
}) {
  const props = [prefix, category, propName]
    // filter out undefined
    .filter((prop) => !!prop)
    // format with dashes
    .map((prop) => kebab(prop || ''))
    // minify certain props to shorter names
    .map(minifyProp);
  return cssVarName(props.join('-'));
}

function minifyProp(prop?: string): string {
  if (!prop) {
    return '';
  }
  return (
    prop
      /**
       * Variants
       */
      .replace(/primary/gi, 'prim')
      .replace(/secondary/gi, 'sec')
      .replace(/tertiary/gi, 'ter')
      .replace(/reversed/gi, 'rev')
      /**
       * Components
       */
      .replace(/button/gi, 'btn')
      /**
       * Props
       */
      .replace(/border/gi, 'bor')
      .replace(/outline/gi, 'out')
      .replace(/background/gi, 'bg')
      .replace(/padding/gi, 'pad')
      /**
       * Sizes
       */
      .replace(/large/gi, 'lg')
      .replace(/medium/gi, 'md')
      .replace(/small/gi, 's')
      .replace(/xsmall/gi, 'xs')
  );
}
