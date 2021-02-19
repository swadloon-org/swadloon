import { getFigmaColor } from '../extract-color';
import { FigmaColor } from '../figma-colors.model';

describe('colors utilities', () => {
  describe(`${getFigmaColor.name}`, () => {
    it('should create a valid figma color from a raw figma style', () => {
      const rawStyle = {
        id: '503:4824',
        name: 'BoucherLight/Primary/500',
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
      };

      const id = `${rawStyle.id}`;

      const expectedColor: FigmaColor = {
        id: `${rawStyle.id}`,
        name: 'primary500',
        r: '0.486',
        g: '0.6',
        b: '0.49',
        a: '1.0',
      };

      expect(getFigmaColor(rawStyle, id)).toBe(expectedColor);
    });
  });
});
