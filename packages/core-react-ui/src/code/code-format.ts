import babelParser from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

export const formatCode = (code: string) => {
  try {
    return prettier.format(code, {
      parser: 'babel',
      plugins: [babelParser],
    });
  } catch (error) {
    return error;
  }
};
