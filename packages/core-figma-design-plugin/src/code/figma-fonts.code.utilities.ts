import { log, logWarn } from './log.code.utilities.js';

/**
 *
 * Utility functions to manipulate fonts with the Figma Plugin API
 *
 */

/**
 * Asynchronously load passed fonts
 */
export async function loadFigmaFonts(figmaFontNameToLoad: FontName[]) {
  const errors: string[] = [];

  return Promise.allSettled(
    figmaFontNameToLoad.map(async (font) => {
      try {
        log(`Loaded font: ${font.family}/${font.style} ✅`);
        await figma.loadFontAsync({
          family: font.family,
          style: font.style,
        });
        return Promise.resolve({ errors: [] });
      } catch (error) {
        const errorMessage = `Could not load font: ${font.family}/${font.style} 🚫`;
        errors.push(errorMessage);
        logWarn(errorMessage);
        return Promise.resolve({ errors });
      }
    })
  ).then((results) => {
    return results.reduce(
      (previous, current) => {
        if (current.status === 'fulfilled') {
          if (current.value?.errors.length) {
            (previous.errors as string[]) = [
              ...(previous.errors as string[]),
              ...current.value.errors,
            ];
          }
        }
        if (current.status === 'rejected') {
          if (current.reason?.errors.length) {
            (previous.errors as string[]) = [...(previous.errors as string[]), 'Request failed'];
          }
        }
        return previous;
      },
      { errors: [] }
    );
  });
}

/**
 * Get a string that identify a FontName config
 */
export function getFigmaFontSignature(font: FontName) {
  return font.family + '/' + font.style;
}

/**
 * Map font weight numbers to named version
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
 */
export function getFontWeightStringForNumber(fontWeight?: string) {
  switch (fontWeight) {
    case '100': {
      return 'Thin';
    }
    case '200': {
      return 'Extra Light';
    }
    case '300': {
      return 'Light';
    }
    case '500': {
      return 'Medium';
    }
    case '600': {
      return 'Semi Bold';
    }
    case '700': {
      return 'Bold';
    }
    case '800': {
      return 'Extra Bold';
    }
    case '900': {
      return 'Black';
    }
    case '950': {
      return 'Extra Black';
    }
    default:
    case '400': {
      return 'Regular';
    }
  }
}

/**
 * Map font weight numbers to named version (in italic)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
 */
export function getFontWeightItalicStringForNumber(fontWeight?: string) {
  switch (fontWeight) {
    case '100': {
      return 'Thin Italic';
    }
    case '200': {
      return 'Extra Light Italic';
    }
    case '300': {
      return 'Light Italic';
    }
    case '500': {
      return 'Medium Italic';
    }
    case '600': {
      return 'Semi Bold Italic';
    }
    case '700': {
      return 'Bold Italic';
    }
    case '800': {
      return 'Extra Bold Italic';
    }
    case '900': {
      return 'Black Italic';
    }
    case '950': {
      return 'Extra Black Italic';
    }
    default:
    case '400': {
      return 'Italic';
    }
  }
}
