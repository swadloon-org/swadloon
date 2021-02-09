import { SITE_LANGUAGES } from '../../config/site-languages';
import { getDirNameFromRelativePath, getPageFormattedName } from '../dir-name.utilities';

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

  describe(`${getPageFormattedName.name}`, () => {
    it('should format raw page path in a localized format', () => {
      expect(getPageFormattedName('page.page')).toBe('Page');
      expect(getPageFormattedName('')).toBe('Home');
      expect(getPageFormattedName('/')).toBe('Home');
      expect(
        getPageFormattedName('/', {
          locale: SITE_LANGUAGES.FR,
        })
      ).toBe('Accueil');
      expect(getPageFormattedName('dir-name/page.page')).toBe('Page');
      expect(getPageFormattedName('/dir-name/')).toBe('Dir Name');
      expect(getPageFormattedName('/dir-name/page.page')).toBe('Page');
      expect(getPageFormattedName('/dir-name/dir-a/dirb/page-name.page')).toBe('Page Name');
      expect(getPageFormattedName('/page-name.page')).toBe('Page Name');
      expect(getPageFormattedName('page-name.page')).toBe('Page Name');
    });
  });
});
