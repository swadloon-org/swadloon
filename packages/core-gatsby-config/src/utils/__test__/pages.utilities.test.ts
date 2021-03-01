import { SITE_LANGUAGES } from '../../config/site-languages';
import { getFullPageNodePath, getLocalePath, getPageFormattedName } from '../pages.utilities';

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
      expect(getPageFormattedName('dir-name/page')).toBe('Page');
      expect(getPageFormattedName('/dir-name/')).toBe('Dir Name');
      expect(getPageFormattedName('/dir-name/page.page')).toBe('Page');
      expect(getPageFormattedName('/dir-name/dir-a/dirb/page-name.page')).toBe('Page Name');
      expect(
        getPageFormattedName('/dir-name/dir-a/dirb/nom-de-la-page.page', {
          locale: SITE_LANGUAGES.FR,
        })
      ).toBe('Nom de la page');
      expect(getPageFormattedName('/page-name.page')).toBe('Page Name');
      expect(getPageFormattedName('page-name.page')).toBe('Page Name');
      expect(getPageFormattedName('en.page-name.page')).toBe('Page Name');
      expect(
        getPageFormattedName('fr.page-name.page', {
          locale: SITE_LANGUAGES.FR,
        })
      ).toBe('Page name');
    });
  });

  describe(`${getFullPageNodePath.name}`, () => {
    it('should format correct full page path', () => {
      expect(getFullPageNodePath(['/'])).toBe('/');
      expect(getFullPageNodePath(['/', ''])).toBe('/');
      expect(getFullPageNodePath(['en', '', 'page'])).toBe('/en/page/');
      expect(getFullPageNodePath(['', '', 'page'])).toBe('/page/');
      expect(getFullPageNodePath(['', '', 'section', 'page'])).toBe('/section/page/');
    });
  });

  describe(`${getLocalePath.name}`, () => {
    it('should return the dir name of the page, depending on the default language', () => {
      expect(getLocalePath('/en/', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocalePath('/', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocalePath('', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocalePath('/en-ca/page', SITE_LANGUAGES.EN)).toBe('');
      expect(getLocalePath('/fr-ca/page', SITE_LANGUAGES.EN)).toBe('fr');
      expect(getLocalePath('/fr-ca/page/name/fr', SITE_LANGUAGES.EN_CA)).toBe('fr');
      expect(getLocalePath('/fr-ca/page/name/en', SITE_LANGUAGES.EN)).toBe('fr');
      expect(getLocalePath('/fr/page/name/en', SITE_LANGUAGES.EN)).toBe('fr');
      expect(getLocalePath('/en/page/name/en', SITE_LANGUAGES.EN_CA)).toBe('');
      expect(getLocalePath('/en/page/name/en', SITE_LANGUAGES.EN)).toBe('');

      expect(getLocalePath('/en/page/name/en', SITE_LANGUAGES.FR)).toBe('en');
      expect(getLocalePath('/en/page-name', SITE_LANGUAGES.FR)).toBe('en');
      expect(getLocalePath('/page-name', SITE_LANGUAGES.FR)).toBe('');
      expect(getLocalePath('/', SITE_LANGUAGES.FR)).toBe('');
      expect(getLocalePath('', SITE_LANGUAGES.FR)).toBe('');
    });
  });
});
