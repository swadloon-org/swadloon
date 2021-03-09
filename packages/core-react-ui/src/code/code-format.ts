import babelParser from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

export function formatCode(code: string): string {
  try {
    return prettier.format(code, {
      parser: 'babel',
      plugins: [babelParser],
    });
  } catch (error) {
    return error;
  }
}
