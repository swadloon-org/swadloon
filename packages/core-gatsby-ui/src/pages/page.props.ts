import { CommonComponentProps } from '@newrade/core-react-ui';
import { PageLayout, PageTemplate } from '@newrade/core-gatsby-config';

/**
 * UI only props
 */
export type PageProps = CommonComponentProps & {
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
