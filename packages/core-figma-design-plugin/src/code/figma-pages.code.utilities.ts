import { keys } from '@newrade/core-react-ui/utilities-iso';

import { FigmaPage } from '../common/figma-page.model';

import { log, logError } from './log.code.utilities';

type UpdateFigmaPageResults = {
  all: FigmaPage[];
  updated: FigmaPage[];
  created: FigmaPage[];
};

const separatorTemplateRegExp = /--- SEPARATOR (.*) ---/gi;
const separatorRegExp = /---/;

/**
 *
 * Utility functions to manipulate pages with the Figma Plugin API
 *
 */

export function createOrUpdateFigmaPages(): UpdateFigmaPageResults {
  //
  // if the current page is a separator, move to another page since we are removing all separator pages before continuing
  // and we can't remove a page if it's the current
  //
  if (figma.currentPage.name.match(separatorRegExp)) {
    const nonSeparatorPage = figma.root.children.find((page) => !page.name.match(separatorRegExp));
    if (!nonSeparatorPage) {
      const homePage = figma.createPage();
      homePage.name = '🏠  Home';
      figma.currentPage = homePage;
    }
    if (nonSeparatorPage) {
      figma.currentPage = nonSeparatorPage;
    }
  }

  //
  // remove separator pages
  //
  figma.root.children.forEach((page) => {
    if (page.name === '---') {
      page.remove();
    }
  });

  const existingPageNames = figma.root.children.map((page) => page.name);

  const predefinedPageNames = [
    '🏠  Home',
    '🔑  License',
    '--- SEPARATOR UX ---',
    ...predefinedUXPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedUXPageNames.includes(existingPageName)) {
        return /.(\s+)UX \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR EXPORT ---',
    ...predefinedExportPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedExportPageNames.includes(existingPageName)) {
        return /⬇️(\s+)Export \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR BRAND ---',
    ...predefinedBrandPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedBrandPageNames.includes(existingPageName)) {
        return /.(\s+)Brand \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR FOUNDATIONS ---',
    ...predefinedFoundationsPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedFoundationsPageNames.includes(existingPageName)) {
        return /.(\s+)Foundations \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR PROTOTYPES ---',
    ...predefinedPrototypesPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedPrototypesPageNames.includes(existingPageName)) {
        return /.(\s+)Prototypes \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR TEMPLATES ---',
    ...predefinedTemplatesPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedTemplatesPageNames.includes(existingPageName)) {
        return /🔰(\s+)Templates \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR PRINT ---',
    ...predefinedPrintTemplatesPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedPrintTemplatesPageNames.includes(existingPageName)) {
        return /📄(\s+)Templates \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR PATTERNS ---',
    ...predefinedPatternsPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedPatternsPageNames.includes(existingPageName)) {
        return /⚛️(\s+)Patterns \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR COMPONENTS ORGANISMS ---',
    ...predefinedComponentsOrganismsPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedComponentsOrganismsPageNames.includes(existingPageName)) {
        return /🔶(\s+)Components \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR COMPONENTS MOLECULES ---',
    ...predefinedComponentsMoleculesPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedComponentsMoleculesPageNames.includes(existingPageName)) {
        return /🔹(\s+)Components \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR COMPONENTS ATOMS ---',
    ...predefinedComponentsAtomsPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedComponentsAtomsPageNames.includes(existingPageName)) {
        return /◼(\s+)Components \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR UTILITIES ---',
    ...predefinedUtilitiesPageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedUtilitiesPageNames.includes(existingPageName)) {
        return /⚙️(\s+)Utilities \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR ARCHIVE ---',
    ...predefinedArchivePageNames,
    ...existingPageNames.filter((existingPageName) => {
      if (!predefinedArchivePageNames.includes(existingPageName)) {
        return /💾(\s+)Archive \/ /g.test(existingPageName);
      }
    }),
    '--- SEPARATOR END ---',
  ];

  const result: UpdateFigmaPageResults = {
    all: [],
    updated: [],
    created: [],
  };

  result.all = [
    ...existingPageNames.map((pageName) => ({
      name: pageName,
    })),
  ];

  predefinedPageNames.forEach((predefinedPageName) => {
    const existingPage = figma.root.children.find((existingPage) => {
      const exactMatch = existingPage.name === predefinedPageName;

      if (exactMatch) {
        return true;
      }

      // TODO: handle partial match (e.g. different number of spaces)
    });

    if (existingPage) {
      //
      // update existing
      //
      if (!existingPage.name.match(separatorTemplateRegExp)) {
        result.updated = [...result.updated, { name: existingPage.name }];
      }

      //
      // reorder at the correct index
      //
      figma.root.insertChild(predefinedPageNames.indexOf(predefinedPageName), existingPage);
      return;
    }

    //
    // create new
    //
    const newPage = figma.createPage();
    newPage.name = predefinedPageName;
    if (!newPage.name.match(separatorTemplateRegExp)) {
      result.created = [...result.created, { name: newPage.name }];
    }

    //
    // insert at the correct index
    //
    figma.root.insertChild(predefinedPageNames.indexOf(predefinedPageName), newPage);
  });

  //
  // rename section separators
  //
  figma.root.children.forEach((page) => {
    if (page.name.match(separatorTemplateRegExp)) {
      page.name = '---';
    }
  });

  return result;
}
