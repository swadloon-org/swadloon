import { SITE_LANGUAGES } from '@newrade/core-common';

import {
  getFullPageNodePath,
  getLocaleFromPath,
  getLocalePath,
  getPageFormattedName,
  remoteExtension,
} from '../pages.utilities.js';

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

  describe(`${getLocaleFromPath.name}`, () => {
    it('should retrieve the correct locale from a path', () => {
      const defaultLocale = SITE_LANGUAGES.FR_CA;
      expect(getLocaleFromPath('/', defaultLocale)).toBe('fr-CA');
      expect(getLocaleFromPath('/src/pages/index.tsx', defaultLocale)).toBe('fr-CA');
      expect(getLocaleFromPath('/src/pages/fr.index.tsx/', defaultLocale)).toBe('fr');
      expect(getLocaleFromPath('en.index', defaultLocale)).toBe('en');
      expect(getLocaleFromPath('index', defaultLocale)).toBe('fr-CA');
      expect(getLocaleFromPath('/src/pages/fr.index.tsx', defaultLocale)).toBe('fr');
      expect(getLocaleFromPath('/src/pages/fr.index.md', defaultLocale)).toBe('fr');
      expect(getLocaleFromPath('/fr.index/', defaultLocale)).toBe('fr');
      expect(getLocaleFromPath('/src/pages/fr.index', defaultLocale)).toBe('fr');
      expect(getLocaleFromPath('/src/pages/en.index.tsx', defaultLocale)).toBe('en');
      expect(getLocaleFromPath('/src/pages/folder/en.index.tsx', defaultLocale)).toBe('en');
    });
  });

  describe(`${remoteExtension.name}`, () => {
    it('should correctly remove an extension from a path', () => {
      expect(remoteExtension('/')).toBe('/');
      expect(remoteExtension('/src/pages/index.tsx')).toBe('/src/pages/index');
      expect(remoteExtension('/src/pages/folder/en-GB.index.tsx')).toBe(
        '/src/pages/folder/en-GB.index'
      );
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
      expect(getLocalePath('/front-end', SITE_LANGUAGES.EN_CA)).toBe('');
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
