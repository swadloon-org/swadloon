import React from 'react';

import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import { Center } from './center.js';
import * as styles from './main-docs.css.js';

type Props = PrimitiveProps<'main' | 'div'> & {
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
 * High level layout component to create a `<main/>` area in a page.
 * Should be used inside `<MainDocsWrapper/>`
 *
 * `<MainDocs/>` layout is made to have 1 column on mobile and 3 on desktop, the direct children should be:
 * - a sidebar
 * - the main content
 * - an aside component
 */
export const MainDocs: React.FC<Props> = ({
  as,
  navbarPadding,
  contentPadding,
  minHeight,
  fullHeight,
  children,
  ...props
}) => {
  const type = as ? as : 'main';

  return (
    <Primitive
      as={type}
      classNames={[
        navbarPadding ? styles.navbar : '',
        contentPadding ? styles.contentPadding : '',
        minHeight ? styles.minHeight : '',
        fullHeight ? styles.fullHeight : '',
      ]}
      {...props}
    >
      <Center contentClassName={styles.wrapper}>{children}</Center>
    </Primitive>
  );
};
