import {
  GatsbyCommonPageContext,
  GatsbyMarkdownFilePageContext,
} from '@newrade/core-gatsb-config/config';
import { PartialOrNull } from '@newrade/core-website-api/utilities';

/**
 * Simplified type for a Page Node
 * uses the same context that is used to create all pages.
 *
 * It assumes that all values can be null or undefined (since null is the value
 * returned in graphql when something is not defined)
 */
export type GatsbyPageNode = PartialOrNull<{
  id: string;
  path: string;
  context?: GatsbyCommonPageContext | GatsbyMarkdownFilePageContext | null;
}>;
