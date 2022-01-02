import React from 'react';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './main.css';

type Props = PrimitiveProps & {
  /**
   * Sticky layout allows a sidebar and an aside component to be next to the main centered content
   */
  stickyLayout?: boolean;
  /**
   * Offset the content to account for the sidebar (on desktop only)
   */
  desktopSidebarPadding?: boolean;
  /**
   * Offset the content to account for the aside (on desktop only)
   */
  desktopAsidePadding?: boolean;
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
 * Should be used inside `<MainWrapper/>`
 */
export const Main: React.FC<Props> = ({
  id,
  as,
  style,
  className,
  navbarPadding,
  contentPadding,
  desktopSidebarPadding,
  desktopAsidePadding,
  minHeight,
  fullHeight,
  ...props
}) => {
  const type = as ? as : 'main';
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [
      className,
      styles.wrapper,
      navbarPadding ? styles.navbar : '',
      contentPadding ? styles.contentPadding : '',
      desktopSidebarPadding ? styles.desktopSidebar : '',
      desktopAsidePadding ? styles.desktopAside : '',
      minHeight ? styles.minHeight : '',
      fullHeight ? styles.fullHeight : '',
    ],
    ...props,
  });

  return React.createElement(type, commonProps);
};
