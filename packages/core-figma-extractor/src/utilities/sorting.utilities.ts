export const defaultColorThemeSortOrder = ['light', 'dark'];
export const defaultColorNamesSortOrder = ['primary', 'secondary', 'accent', 'grey'];
export const defaultColorLevelSortOrder = [
  '1000',
  '900',
  '800',
  '700',
  '600',
  '500',
  '400',
  '300',
  '200',
  '100',
  '50',
  '25',
  '0',
  '0White',
];

export function sortColorNames(
  colorNames: string[],
  colorThemeSortOrder = defaultColorThemeSortOrder,
  colorNamesSortOrder = defaultColorNamesSortOrder,
  colorLevelSortOrder = defaultColorLevelSortOrder
) {
  return (
    colorNames
      // sort by name
      .sort((nameA, nameB) => {
        if (!colorNamesSortOrder) {
          return 0;
        }

        const indexAMatch = colorNamesSortOrder.find((name) => new RegExp(name, 'gi').test(nameA));
        const indexBMatch = colorNamesSortOrder.find((name) => new RegExp(name, 'gi').test(nameB));

        const indexA = indexAMatch ? colorNamesSortOrder.indexOf(indexAMatch) : -1;
        const indexB = indexBMatch ? colorNamesSortOrder.indexOf(indexBMatch) : -1;

        if (indexA === indexB) {
          return 0;
        }

        if (indexA === -1) {
          return 1;
        }

        if (indexB === -1) {
          return -1;
        }

        return indexA > indexB ? 1 : -1;
      })
      // sort by level (numeric)
      .sort((nameA, nameB) => {
        if (!colorLevelSortOrder) {
          return 0;
        }

        // find if they have the same name, expect for the numeric part
        const matchNameIndexA = /^([a-z]+)(\d+[a-z]*)?/gi.exec(nameA);
        const matchNameIndexB = /^([a-z]+)(\d+[a-z]*)?/gi.exec(nameB);

        if (!matchNameIndexA) {
          return 0;
        }

        if (!matchNameIndexB) {
          return 0;
        }

        const matchNameIndexAResult = matchNameIndexA[1];
        const matchNameIndexBResult = matchNameIndexB[1];

        // if 2 name don't have the same non numeric part, leave as is
        if (matchNameIndexAResult !== matchNameIndexBResult) {
          return 0;
        }

        const matchNameIndexAResultNumeric = matchNameIndexA[2];
        const matchNameIndexBResultNumeric = matchNameIndexB[2];

        const indexAMatch = colorLevelSortOrder.find((colorLevel) =>
          new RegExp(colorLevel, 'gi').test(matchNameIndexAResultNumeric)
        );
        const indexBMatch = colorLevelSortOrder.find((colorLevel) =>
          new RegExp(colorLevel, 'gi').test(matchNameIndexBResultNumeric)
        );

        const indexA = indexAMatch ? colorLevelSortOrder.indexOf(indexAMatch) : -1;
        const indexB = indexBMatch ? colorLevelSortOrder.indexOf(indexBMatch) : -1;

        if (indexA === indexB) {
          return 0;
        }

        if (indexA === -1) {
          return 1;
        }

        if (indexB === -1) {
          return -1;
        }

        return indexA > indexB ? 1 : -1;
      })
      // sort by theme
      .sort((nameA, nameB) => {
        if (!colorThemeSortOrder) {
          return 0;
        }

        const indexAMatch = colorThemeSortOrder.find((name) => new RegExp(name, 'gi').test(nameA));
        const indexBMatch = colorThemeSortOrder.find((name) => new RegExp(name, 'gi').test(nameB));

        const indexA = indexAMatch ? colorThemeSortOrder.indexOf(indexAMatch) : -1;
        const indexB = indexBMatch ? colorThemeSortOrder.indexOf(indexBMatch) : -1;

        if (indexA === indexB) {
          return 0;
        }

        if (indexA === -1) {
          return 1;
        }

        if (indexB === -1) {
          return -1;
        }

        return indexA > indexB ? 1 : -1;
      })
  );
}
