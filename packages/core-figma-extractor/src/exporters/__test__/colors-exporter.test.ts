import { defaultExtractOptions } from '../..';
import { FigmaColor } from '../../models/figma-colors.model';
import { formatOutput } from '../../utilities/formatting.utilities';
import { exportCssColorTokens } from '../colors-css-exporter';

describe('colors scss', () => {
  const testColor: { [name: string]: FigmaColor } = {
    lightPrimary1000: {
      id: '9537:306',
      colorNamespace: '',
      colorTheme: 'light',
      colorType: 'primary',
      colorLevel: '1000',
      r: 0.006299987435340881,
      g: 0.1737000197172165,
      b: 0.16811999678611755,
      a: 1,
    },
    lightSecondary900: {
      id: '9537:306',
      colorNamespace: '',
      colorTheme: 'light',
      colorType: 'secondary',
      colorLevel: '900',
      r: 0.006299987435340881,
      g: 0.1737000197172165,
      b: 0.16811999678611755,
      a: 1,
    },
    lightPrimary500: {
      id: '9537:306',
      colorNamespace: '',
      colorTheme: 'light',
      colorType: 'primary',
      colorLevel: '500',
      r: 0.006299987435340881,
      g: 0.1737000197172165,
      b: 0.16811999678611755,
      a: 1,
    },
    lightBG1: {
      id: '9537:306',
      colorNamespace: '',
      colorTheme: 'light',
      colorType: 'bg',
      colorLevel: '1',
      r: 0.006299987435340881,
      g: 0.1737000197172165,
      b: 0.16811999678611755,
      a: 1,
    },
    lightBG2: {
      id: '9537:306',
      colorNamespace: '',
      colorTheme: 'light',
      colorType: 'bg',
      colorLevel: '2',
      r: 0.006299987435340881,
      g: 0.1737000197172165,
      b: 0.16811999678611755,
      a: 1,
    },
    lightGreyscaleTransparent: {
      id: '1330:12610',
      colorNamespace: '',
      colorTheme: 'light',
      colorType: 'greyscale',
      colorLevel: 'transparent',
      r: 255,
      g: 255,
      b: 255,
      a: 0.01,
    },
  };

  describe(`${exportCssColorTokens.name}`, () => {
    it('should create valid scss code from FigmaColor objects', () => {
      expect(exportCssColorTokens(testColor, defaultExtractOptions)).toEqual(
        formatOutput(
          `:root {
          --color-light-primary-1000: rbga(
            0.006299987435340881,
            0.1737000197172165,
            0.16811999678611755,
            1
          );
          --color-light-primary-500: rbga(
            0.006299987435340881,
            0.1737000197172165,
            0.16811999678611755,
            1
          );
          --color-light-secondary-900: rbga(
            0.006299987435340881,
            0.1737000197172165,
            0.16811999678611755,
            1
          );
          --color-light-greyscale-transparent: rbga(
            255,
            255,
            255,
            0.01
          );
          --color-light-bg-1: rbga(
            0.006299987435340881,
            0.1737000197172165,
            0.16811999678611755,
            1
          );
          --color-light-bg-2: rbga(
            0.006299987435340881,
            0.1737000197172165,
            0.16811999678611755,
            1
          );
        }
        `,
          { parser: 'css' }
        )
      );
    });
  });
});
