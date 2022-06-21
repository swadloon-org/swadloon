import path from 'path';

import { defaultOutputColorFiles, ExtractOptions } from '../...js';
import { FigmaColor } from '../../models/figma-colors.model.js';
import { getFigmaColor, getFormattedColorNode } from '../colors-extractor.js';

describe('colors utilities', () => {
  const rawStyle = {
    nodes: {
      '503:4824': {
        document: {
          id: '503:4824',
          name: 'Namespace/primary/500',
          type: 'RECTANGLE',
          blendMode: 'PASS_THROUGH',
          absoluteBoundingBox: {
            x: 0.0,
            y: 0.0,
            width: 100.0,
            height: 100.0,
          },
          constraints: {
            vertical: 'TOP',
            horizontal: 'LEFT',
          },
          fills: [
            {
              blendMode: 'NORMAL',
              type: 'SOLID',
              opacity: 0.0099999,
              color: {
                r: 0.48627451062202454,
                g: 0.60000002384185791,
                b: 0.49019607901573181,
                a: 1.0,
              },
            },
          ],
          strokes: [],
          strokeWeight: 1.0,
          strokeAlign: 'INSIDE',
          effects: [],
        },
      },
    },
  };

  const options: Required<ExtractOptions> = {
    figmaFile: '',
    figmaToken: '',
    inputColorThemeNamespace: true,
    outputDir: path.join(__dirname, '..', 'figma-export'),
    outputColorNamespace: '',
    outputColorFiles: defaultOutputColorFiles,
    outputCSSColorFormat: 'rgba',
    debug: true,
    outputDate: false,
    outputVersion: false,
  };

  describe(`${getFigmaColor.name}`, () => {
    it('should create a valid figma color from a raw figma style', () => {
      const key = Object.keys(rawStyle.nodes)[0];

      const expectedColor: FigmaColor = {
        id: key,
        colorNamespace: '',
        colorTheme: 'namespace',
        colorType: 'primary',
        colorLevel: '500',
        r: 124,
        g: 153,
        b: 125,
        a: 0.01,
      };

      expect(getFigmaColor(rawStyle.nodes['503:4824'] as any, options)).toEqual(expectedColor);
    });
  });

  describe(`${getFormattedColorNode.name}`, () => {
    it('should correctly format various name formatting', () => {
      expect(getFormattedColorNode('', options)).toEqual({
        colorNamespace: '',
        colorTheme: '',
        colorType: '',
        colorLevel: '',
      });
      const expected = {
        colorNamespace: '',
        colorTheme: 'namespace',
        colorType: 'primary',
        colorLevel: '500',
      };
      expect(getFormattedColorNode('Namespace / primary /500', options)).toEqual(expected);
      expect(getFormattedColorNode('namespace  /primary / 500', options)).toEqual(expected);
      expect(getFormattedColorNode('namespace/primary/500', options)).toEqual(expected);
      expect(getFormattedColorNode('namespace /primary /500', options)).toEqual(expected);
      expect(getFormattedColorNode('namespace /primary())&*)(*&) /500', options)).toEqual(expected);
    });
  });
});
