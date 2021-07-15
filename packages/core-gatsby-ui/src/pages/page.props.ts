import { PrimitiveProps } from '@newrade/core-react-ui/src';
import { PageLayout, PageTemplate } from '@newrade/core-gatsby-config';

/**
 * UI only props
 */
export type PageProps = PrimitiveProps & {
  /**
   * Page's layout
   * @default PageLayout.default
   */
  layout?: PageLayout;
  /**
   * Page's template
   * @default PageLayout.default
   */
  template?: PageTemplate;
};
