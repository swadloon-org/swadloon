import { pascal } from 'case';
import { keys } from './utilities';

/**
 * <Link /> => "Link Medium Underline"
 */
export function getDefaultTextFromProps(name: string, props: object): string {
  const propString = `${keys(props)
    .map((prop) => pascal(props[prop]))
    .join(' ')}`;

  return `${pascal(name)} ${propString}`;
}
