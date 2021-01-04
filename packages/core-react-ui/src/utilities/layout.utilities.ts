import {
  Breakpoints,
  Layout,
  MediaQueries,
  MediaQuery,
  MediaQueryGroup,
  MediaQueryType,
  MEDIA_FEATURE,
  MEDIA_OPERATOR,
  MEDIA_TYPE,
} from '@newrade/core-design-system';
import { keys, px } from './utilities';

/**
 * Transform the Layout object into a CSS compatible one.
 */
export function getCSSLayout(options: Layout): Layout<string> {
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
    topbarHeight: keys(options.topbarHeight).reduce((previous, current) => {
      const value = options.topbarHeight[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['topbarHeight']),
    asideWidth: px({ value: options.asideWidth }),
    footerHeight: keys(options.footerHeight).reduce((previous, current) => {
      const value = options.footerHeight[current];
      previous = { ...previous, [current]: px({ value }) };
      return previous;
    }, {} as Layout<string>['footerHeight']),
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
    let partQueryResult: string[] = [];
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

export function extractQueryType(query: MediaQuery | MediaQueryGroup | MEDIA_OPERATOR | undefined): string {
  if (!query) {
    return ``;
  }

  let queryString: string[] = [];

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
      return query.value !== undefined ? `(${MEDIA_FEATURE.minWidth}: ${px({ value: query.value })})` : ``;
    }
    case MEDIA_FEATURE.maxWidth: {
      return query.value !== undefined ? `(${MEDIA_FEATURE.maxWidth}: ${px({ value: query.value })})` : ``;
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
