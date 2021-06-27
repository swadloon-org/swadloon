import { CommonComponentProps } from '@newrade/core-react-ui';
import { FooterAPI } from '@newrade/core-website-api';

/**
 * Minimal props for a Footer component
 */
export type FooterProps = CommonComponentProps & {
  /** footer data */
  footer?: FooterAPI;
};
