import { Navigation } from '../../navigation/navigation.model';
import { getDirNameFromRelativePath, getNavigationFromPageNodes } from '../navigation.utilities';
import { navigationMock } from './navigation.mock';

describe(`navigation utilities`, () => {
  describe(`${getDirNameFromRelativePath.name}`, () => {
    it('should extract the dir name from a relative path', () => {
      expect(getDirNameFromRelativePath('/dir-name/page-name.tsx')).toBe('dir-name');
      expect(getDirNameFromRelativePath('dir-name/page-name.tsx')).toBe('dir-name');
      expect(getDirNameFromRelativePath('/page-name.tsx')).toBe('');
      expect(getDirNameFromRelativePath('page-name.tsx')).toBe('');
      expect(getDirNameFromRelativePath('/dir/page-name.tsx')).toBe('dir');
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
            name: '',
            displayName: '',
            path: '',
            items: [
              {
                name: 'index',
                displayName: 'Index',
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
