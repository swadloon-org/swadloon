import React from 'react';
import { useStyles } from 'react-treat';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { PrimitiveProps } from '../primitive/primitive.props';

import { Center } from './center';
import * as styleRefs from './main-docs.treat';

type Props = PrimitiveProps & {
  /**
   * Offset the navbar height
   */
  navbarPadding?: boolean;
  /**
   * Offset the navbar height and a default padding
   */
  contentPadding?: boolean;
  /**
   * Prevents the main content's height from collapsing
   */
  minHeight?: boolean;
  /**
   * Set the content height too 100% of the viewport
   */
  fullHeight?: boolean;
};

/**
 * High level layout component to create a <main/> area in a page.
 * Should be used inside <MainDocsWrapper/>
 *
 * <MainDocs/> layout is made to have 1 column on mobile and 3 on desktop, the direct children should be:
 * - a sidebar
 * - the main content
 * - an aside component
 */
export const MainDocs: React.FC<Props> = ({
  id,
  as,
  style,
  className,
  navbarPadding,
  contentPadding,
  minHeight,
  fullHeight,
  children,
  ...props
}) => {
  const { theme, cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);
  const type = as ? as : 'main';
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [
      className,
      navbarPadding ? styles.navbar : '',
      contentPadding ? styles.contentPadding : '',
      minHeight ? styles.minHeight : '',
      fullHeight ? styles.fullHeight : '',
    ],
    ...props,
  });

  return React.createElement(
    type,
    commonProps,
    <Center contentClassName={styles.wrapper}>{children}</Center>
  );
};
