import { kebab } from 'case';
import prettier, { Options } from 'prettier';

const prettierConfig: Options = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
};

/**
 * Format text content
 */
export function formatOutput(textContent: string, options: prettier.Options) {
  return prettier.format(textContent, { ...prettierConfig, ...options });
}

/**
 * Split numbers in camel case with '-'
 * @example info900 => info-900
 */
export function formatNameNumberKebabCase(text: string) {
  const kebabText = kebab(text);
  const match = /[a-z](\d+)/gi.exec(kebabText);

  if (!match) {
    return kebabText;
  }

  const splittedText = [kebabText.slice(0, match.index + 1), kebabText.slice(match.index + 1)].join(
    '-'
  );
  return splittedText;
}
