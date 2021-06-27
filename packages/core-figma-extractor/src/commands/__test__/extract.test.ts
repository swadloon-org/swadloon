import { extract } from '../extract';

describe('extract command', () => {
  describe(`${extract.name}`, () => {
    it('should create valid exports from raw figma styles', () => {
      // mock extractFigmaColors function https://jestjs.io/docs/en/mock-functions
      // mock create files https://stackoverflow.com/questions/64947786/how-to-mock-fs-promises-writefile-with-jest
      // test if the files are valid
      // expect(extract()).toEqual();
    });
  });
});
