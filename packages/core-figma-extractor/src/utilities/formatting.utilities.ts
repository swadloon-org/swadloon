import * as prettier from 'prettier';

const prettierConfig = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
};

/**
 * Format text content
 */
export function formatOutput(textContent: string, options: prettier.Options) {
  return prettier.format(textContent, { ...prettierConfig, ...options });
}
