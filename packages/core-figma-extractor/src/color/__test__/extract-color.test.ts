import { getFigmaColor } from '../extract-color';
import { FigmaColor } from '../figma-colors.model';

describe('colors utilities', () => {
  describe(`${getFigmaColor.name}`, () => {
    it('should create a valid figma color from a raw figma style', () => {
      const rawStyle = {
        nodes: {
          '503:4824': {
            document: {
              id: '503:4824',
              name: 'BoucherLight/primary/500',
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

      const key = Object.keys(rawStyle.nodes)[0];

      const expectedColor: FigmaColor = {
        id: key,
        colorType: 'primary',
        colorLevel: '500',
        r: 0.48627451062202454,
        g: 0.60000002384185791,
        b: 0.49019607901573181,
        a: 1.0,
      };

      expect(getFigmaColor(rawStyle, key)).toEqual(expectedColor);
    });
  });
});
