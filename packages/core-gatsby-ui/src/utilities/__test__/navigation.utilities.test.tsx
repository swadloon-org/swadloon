import { Navigation } from '../../navigation/navigation.model';
import { getNavigationFromPageNodes, getPageDirFromPath } from '../navigation.utilities';
import { navigationMock } from './navigation.mock';

describe(`navigation utilities`, () => {
  describe(`${getPageDirFromPath.name}`, () => {
    it('should extract the page dir name from a path with no locale', () => {
      expect(getPageDirFromPath('/design-system/path-a/index.page')).toBe('path-a');
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
      expect(getPageDirFromPath('/fr/design-system/path-a/index.page')).toBe('path-a');
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
      expect(nav).toMatchSnapshot();
    });
  });
});
