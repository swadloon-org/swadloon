import { getDirNameFromRelativePath } from '../dir-name.utilities';

describe('dir name utilities', () => {
  describe(`${getDirNameFromRelativePath.name}`, () => {
    it('should extract the dir name from a relative path', () => {
      expect(getDirNameFromRelativePath('/dir-name/page-name.tsx')).toBe('dir-name');
      expect(getDirNameFromRelativePath('dir-name/page-name.tsx')).toBe('dir-name');
      expect(getDirNameFromRelativePath('/page-name.tsx')).toBe('');
      expect(getDirNameFromRelativePath('page-name.tsx')).toBe('');
      expect(getDirNameFromRelativePath('/dir/page-name.tsx')).toBe('dir');
    });
  });
});
