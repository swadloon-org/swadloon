import { Navigation } from '../../navigation/navigation.model';
import { getNavigationFromPageNodes, getPageDirFromPath } from '../navigation.utilities';
import { navigationMock } from './navigation.mock';

describe(`navigation utilities`, () => {
  describe(`${getPageDirFromPath.name}`, () => {
    it('should extract the page dir name from a path with no locale', () => {
      expect(getPageDirFromPath('/design-system/page-name.tsx')).toBe('');
      expect(getPageDirFromPath('dir-name/page-name.tsx')).toBe('dir-name');
      expect(getPageDirFromPath('dir-name/page-name.md')).toBe('dir-name');
      expect(getPageDirFromPath('dir-name/page-name.mdx')).toBe('dir-name');
      expect(getPageDirFromPath('/page-name.tsx')).toBe('');
      expect(getPageDirFromPath('/index.tsx')).toBe('');
      expect(getPageDirFromPath('index.tsx')).toBe('');
      expect(getPageDirFromPath('page-name.tsx')).toBe('');
      expect(getPageDirFromPath('/dir/page-name.tsx')).toBe('dir');
    });

    it('should extract the page dir name from a path with locales', () => {
      expect(getPageDirFromPath('/fr/design-system/page-name.tsx')).toBe('');
      expect(getPageDirFromPath('/fr/dir-name/page-name.tsx')).toBe('dir-name');
      expect(getPageDirFromPath('/fr/dir-name/page-name.md')).toBe('dir-name');
      expect(getPageDirFromPath('/fr/dir-name/page-name.mdx')).toBe('dir-name');
      expect(getPageDirFromPath('/fr/')).toBe('');
      expect(getPageDirFromPath('/en/')).toBe('');
      expect(getPageDirFromPath('/fr/page-name.tsx')).toBe('');
      expect(getPageDirFromPath('/fr/page-name.tsx')).toBe('');
      expect(getPageDirFromPath('/fr/dir/page-name.tsx')).toBe('dir');
    });
  });

  describe(`utility ${getNavigationFromPageNodes.name}`, () => {
    const emptyNavigation: Navigation = {
      name: 'navigation test',
      items: [],
    };

    it('should return an empty Navigation object from Gatsby page nodes', () => {
      const nav = getNavigationFromPageNodes({
        name: 'navigation test',
        pageNodes: [],
      });

      expect(nav).toEqual(emptyNavigation);
    });

    it('should return a valid Navigation object from Gatsby page nodes', () => {
      const nav = getNavigationFromPageNodes(navigationMock);

      const expectedNav: Navigation = {
        name: 'navigation test',
        items: [
          {
            name: 'path-a',
            displayName: 'Path A',
            path: 'path-a',
            items: [
              {
                name: 'page-2',
                displayName: 'Page 2',
                path: '/design-system/path-a/page-2',
              },
              {
                name: 'page-1',
                displayName: 'Page 1',
                path: '/design-system/path-a/page-1',
              },
            ],
          },
          {
            name: 'Home',
            displayName: '',
            path: '',
            items: [
              {
                name: 'index',
                displayName: 'Home',
                path: '/',
              },
              {
                name: 'home',
                displayName: 'Home',
                path: '/design-system/',
              },
            ],
          },
          {
            name: 'path-b',
            displayName: 'Path B',
            path: 'path-b',
            items: [
              {
                name: 'page-1',
                displayName: 'Page 1',
                path: '/design-system/path-b/page-1',
              },
            ],
          },
        ],
      };

      expect(nav).toEqual(expectedNav);
    });
  });
});
