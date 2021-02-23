import { SITE_LANGUAGES } from '../../config/site-languages';
import { getLocaleDirName, getPageFormattedName } from '../dir-name.utilities';

describe('dir name utilities', () => {
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

  describe(`${getLocaleDirName.name}`, () => {
    it('should return the dir name of the page, depending on the default language', () => {
      expect(getLocaleDirName('/en/', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocaleDirName('/', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocaleDirName('', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocaleDirName('/en-ca/page', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocaleDirName('/fr-ca/page', SITE_LANGUAGES.EN)).toBe('fr');
      expect(getLocaleDirName('/fr-ca/page/name/fr', SITE_LANGUAGES.EN_CA)).toBe('fr');
      expect(getLocaleDirName('/fr-ca/page/name/en', SITE_LANGUAGES.EN)).toBe('fr');
      expect(getLocaleDirName('/fr/page/name/en', SITE_LANGUAGES.EN)).toBe('fr');
      expect(getLocaleDirName('/en/page/name/en', SITE_LANGUAGES.EN_CA)).toBe('');
      expect(getLocaleDirName('/en/page/name/en', SITE_LANGUAGES.EN)).toBe('');

      expect(getLocaleDirName('/en/page/name/en', SITE_LANGUAGES.FR)).toBe('en');
      expect(getLocaleDirName('/en/page-name', SITE_LANGUAGES.FR)).toBe('en');
      expect(getLocaleDirName('/page-name', SITE_LANGUAGES.FR)).toBe('');
      expect(getLocaleDirName('/', SITE_LANGUAGES.FR)).toBe('');
      expect(getLocaleDirName('', SITE_LANGUAGES.FR)).toBe('');
    });
  });
});
