import { TEXT_TRANSFORM } from '@newrade/core-design-system';

export function getFigmaTextStyleUniqueId(font: FontName) {
  return font.family + '/' + font.style;
}

export function getFigmaTextCase(textTransform?: TEXT_TRANSFORM): TextCase {
  switch (textTransform) {
    case TEXT_TRANSFORM.capitalize: {
      return 'TITLE';
    }
    case TEXT_TRANSFORM.uppercase: {
      return 'UPPER';
    }
    case TEXT_TRANSFORM.lowercase: {
      return 'LOWER';
    }
    default:
    case TEXT_TRANSFORM.none: {
      return 'ORIGINAL';
    }
  }
}
