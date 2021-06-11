import { CommonComponentProps } from '@newrade/core-react-ui';
import { FooterAPI } from '../api/footer.api';

/**
 * Minimal props for a Footer component
 */
export type FooterProps = CommonComponentProps & {
  /** footer data */
  footer?: FooterAPI;
};
