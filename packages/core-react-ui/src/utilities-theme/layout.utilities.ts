import { kebab } from 'case';

import {
  Breakpoints,
  Layout,
  MEDIA_FEATURE,
  MEDIA_OPERATOR,
  MEDIA_TYPE,
  MediaQueries,
  MediaQuery,
  MediaQueryGroup,
  MediaQueryType,
  PartialLayout,
} from '@newrade/core-design-system';

import { CSSLayoutV2, LayoutVarNames, LayoutVars } from '../css-design-system/design-system.js';
import { defaultPartialLayout } from '../default-theme/default-layout.js';
import { cssVar } from '../utilities-iso/css-variables.utilities.js';
import { keys, px } from '../utilities-iso/utilities.js';

export const defaultLayoutVarNames: LayoutVarNames = getCSSVarNamesForLayout({
  layout: defaultPartialLayout,
});

export const defaultLayoutVar: LayoutVars = getCSSVarForLayout({
  layout: defaultPartialLayout,
});

/**
 * Transform the Layout object into a CSS compatible one.
 *
 * v2:
 *  - zIndex in string
 *
 */
export function getCSSLayoutV2(options: Layout): CSSLayoutV2 {
  return {
    media: getCSSMediaQueries(options.media),
    breakpoints: keys(options.breakpoints).reduce((previous, current) => {
      const value = options.breakpoints[current];
      previous = { ...previous, [current]: px({ value: value }) };
      return previous;
    }, {} as Breakpoints<string>),
    contentMargins: keys(options.contentMargins).reduce((previous, current) => {
      const value = options.contentMargins[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['contentMargins']),
    contentWidth: keys(options.contentWidth).reduce((previous, current) => {
      const value = options.contentWidth[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['contentWidth']),
    sidebarWidth: keys(options.sidebarWidth).reduce((previous, current) => {
      const value = options.sidebarWidth[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['sidebarWidth']),
    navbarHeight: keys(options.navbarHeight).reduce((previous, current) => {
      const value = options.navbarHeight[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['navbarHeight']),
    asideWidth: px({ value: options.asideWidth }),
    footerHeight: keys(options.footerHeight).reduce((previous, current) => {
      const value = options.footerHeight[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['footerHeight']),
    varNames: defaultLayoutVarNames,
    var: defaultLayoutVar,
    zIndex: {
      chatBubble: options.zIndex.chatBubble.toString(),
      notifications: options.zIndex.notifications.toString(),
      navBar: options.zIndex.navBar.toString(),
      sideBarMobile: options.zIndex.sideBarMobile.toString(),
      sideBarDesktop: options.zIndex.sideBarDesktop.toString(),
      dialog: options.zIndex.dialog.toString(),
      content: options.zIndex.content.toString(),
    },
  };
}

/**
 *
 * @example
 *  in:
 *  [VIEWPORT.tablet]: {
 *    queryA: {
 *      type: MEDIA_TYPE.screen,
 *    },
 *    operator: MEDIA_OPERATOR.and,
 *    queryB: {
 *      queryA: {
 *        type: MEDIA_TYPE.screen,
 *        feature: MEDIA_FEATURE['min-width'],
 *        value: defaultBreakpoints.tabletPortrait,
 *      },
 *      operator: MEDIA_OPERATOR.and,
 *      queryB: {
 *        type: MEDIA_TYPE.screen,
 *        feature: MEDIA_FEATURE['max-width'],
 *        value: defaultBreakpoints.desktopSmall,
 *      },
 *    },
 *  },
 *  out:
 *  [VIEWPORT.tablet]: `screen and (min-width: ${defaultBreakpoints.tabletPortrait.px}) and (max-width: ${defaultBreakpoints.desktopSmall.px})`,
 */
export function getCSSMediaQueries(media: MediaQueries): MediaQueries<string> {
  return keys(media).reduce((previous, current) => {
    const query = media[current];
    return { ...previous, [current]: getCSSMediaQuery(query) };
  }, {} as MediaQueries<string>);
}

export function getCSSMediaQuery(query?: MediaQueryGroup): MediaQueryType<string> {
  if (!query) {
    return ``;
  }

  const cssQuery = keys(query).reduce((previous, current) => {
    const partQuery = query[current];
    const partQueryResult: string[] = [];
    // if it's an operator, convert and append
    if (current === 'operator') {
      partQueryResult.push(extractQueryOperator(partQuery as MEDIA_OPERATOR));
    }
    // if it's a query, traverse and convert to string
    if (current === 'queryA') {
      partQueryResult.push(extractQueryType(partQuery));
    }
    if (current === 'queryB') {
      partQueryResult.push(extractQueryType(partQuery));
    }
    return [...previous, ...partQueryResult];
  }, [] as string[]);

  return cssQuery ? cssQuery.join('') : '';
}

export function extractQueryType(
  query: MediaQuery | MediaQueryGroup | MEDIA_OPERATOR | undefined
): string {
  if (!query) {
    return ``;
  }

  const queryString: string[] = [];

  if ((query as MediaQuery).type) {
    queryString.push(extractQueryMediaType(query as MediaQuery));
  }

  if ((query as MediaQuery).feature) {
    queryString.push(extractQueryFeature(query as MediaQuery));
  }

  if ((query as MediaQueryGroup).queryA) {
    queryString.push(extractQueryType((query as MediaQueryGroup).queryA));
  }

  if ((query as MediaQueryGroup).operator) {
    queryString.push(extractQueryOperator((query as MediaQueryGroup).operator));
  }

  if ((query as MediaQueryGroup).queryB) {
    queryString.push(extractQueryType((query as MediaQueryGroup).queryB as MediaQueryGroup));
  }

  return queryString.join('');
}

export function extractQueryMediaType(query: MediaQuery) {
  switch (query.type) {
    case MEDIA_TYPE.all: {
      return `${MEDIA_TYPE.all}`;
    }
    case MEDIA_TYPE.screen: {
      return `${MEDIA_TYPE.screen}`;
    }
    default: {
      return ``;
    }
  }
}

export function extractQueryFeature(query: MediaQuery) {
  switch (query.feature) {
    case MEDIA_FEATURE.minWidth: {
      return query.value !== undefined
        ? `(${MEDIA_FEATURE.minWidth}: ${px({ value: query.value })})`
        : ``;
    }
    case MEDIA_FEATURE.maxWidth: {
      return query.value !== undefined
        ? `(${MEDIA_FEATURE.maxWidth}: ${px({ value: query.value })})`
        : ``;
    }
    default: {
      return ``;
    }
  }
}

export function extractQueryOperator(operator?: MEDIA_OPERATOR) {
  switch (operator) {
    case MEDIA_OPERATOR.and:
    case MEDIA_OPERATOR.not:
    case MEDIA_OPERATOR.only: {
      return ` ${operator} `;
    }
    case MEDIA_OPERATOR[',']: {
      return `${operator} `;
    }
    default: {
      return ``;
    }
  }
}

/**
 * Generate CSS statement to access variables
 */
export function getCSSVarForLayout({ layout }: { layout: PartialLayout }): LayoutVars {
  return getNameForLayout({ layout, prefix: 'layout', wrapWithVar: true });
}

/**
 * Generate CSS variable names from the layout object.
 */
export function getCSSVarNamesForLayout({ layout }: { layout: PartialLayout }): LayoutVarNames {
  return getNameForLayout({ layout, prefix: 'layout', wrapWithVar: false });
}

function getNameForLayout({
  layout,
  prefix,
  wrapWithVar,
}: {
  layout: PartialLayout;
  prefix: string;
  wrapWithVar: boolean;
}) {
  const varNames: LayoutVarNames = {} as LayoutVarNames;

  keys(layout).forEach((layoutProp) => {
    const value = layout[layoutProp];

    if (!value) {
      return;
    }

    // for layout props that are nested
    if (typeof value === 'number') {
      const formattedCurrentLayoutProp = kebab(layoutProp);
      const varString = `--${prefix}-${formattedCurrentLayoutProp}`;
      varNames[layoutProp as 'asideWidth'] = wrapWithVar ? cssVar(varString) : varString;
    }

    // for colors that don't have a nested structure
    if (typeof value === 'object') {
      if (!varNames[layoutProp]) {
        varNames[layoutProp] = {} as any;
      }

      // don't traverse objects that have viewports
      if ((keys(value) as string[]).includes('mobile')) {
        const varString = `--${prefix}-${kebab(layoutProp)}` as any;
        varNames[layoutProp] = wrapWithVar ? cssVar(varString) : varString;
        return;
      }

      keys(value).forEach((nestedLayoutProp: string) => {
        const formattedCurrentLayoutProp = kebab(layoutProp);
        const formattedNestedLayoutProp = kebab(`${nestedLayoutProp}`);
        const varString =
          `--${prefix}-${formattedCurrentLayoutProp}-${formattedNestedLayoutProp}` as any;
        // @ts-ignore
        varNames[layoutProp][nestedLayoutProp] = wrapWithVar ? cssVar(varString) : varString;
      });
    }
  });

  return varNames;
}
