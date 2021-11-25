import { pascal } from 'case';

import { keys } from './utilities';

/**
 * <Link /> => "Link Medium Underline"
 */
export function getDefaultTextFromProps(name: string, props: object): string {
  const propString = `${keys(props)
    .map((prop) => (typeof props[prop] === 'boolean' ? pascal(prop) : pascal(props[prop])))
    .join(' ')}`;

  return `${pascal(name)} ${propString}`;
}

/**
 * ['hey', 'classname '] => 'hey classname'
 */
export function getMergedClassname(classNames?: (string | null | undefined | boolean)[]): string {
  if (!classNames) {
    return '';
  }

  return classNames
    .filter((className) => !!className)
    .filter((className) => (className as string)?.length !== 0)
    .filter((className) => className !== ' ')
    .join(' ')
    .trim();
}
