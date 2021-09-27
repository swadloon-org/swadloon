import { PrimitiveProps } from '@newrade/core-react-ui';
import { BreadcrumbsAPI } from '@newrade/core-website-api';

/**
 * Minimal props for a Breadcrumbs component
 */
export type BreadcrumbsProps = PrimitiveProps<'nav'> & {
  /** breadcrumbs data */
  breadcrumbs?: BreadcrumbsAPI;
};
