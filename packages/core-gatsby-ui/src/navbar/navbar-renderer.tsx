import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import debug from 'debug';

import { useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';
import { NavbarLayout } from '@newrade/core-website-api';

import { NavbarProps, NavbarRendererProps } from './navbar.props';
import { NavbarStandard } from './navbar-standard';

const log = debug('nr:core-gatsby-ui:navbar-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Component that will render a Navbar from a NavBar API object
 */
export function NavbarRenderer<
  CustomNavbarLayouts extends string,
  CustomBlockVariants extends string
>({
  id,
  className,
  style,
  as,
  AsElement,
  navbar,
  navbarComponents,
  blockComponents,
  ...props
}: PropsWithChildren<NavbarRendererProps<CustomNavbarLayouts, CustomBlockVariants>>) {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { cssTheme, theme } = useTreatTheme();
  const commonProps = useCommonProps<'nav'>({ id, style, className, ...props });

  if (!navbar) {
    return null;
  }

  const navbarLayout = navbar.layout as NavbarLayout;

  log(`rendering: ${navbar.name} with layout: ${navbarLayout}`);

  /**
   * Render custom sections (layouts)
   */
  if (navbarComponents && navbarComponents[navbarLayout]) {
    const CustomNavbar = navbarComponents[navbarLayout] as React.ElementType<NavbarProps>;

    // @ts-ignore
    return <CustomNavbar navbar={navbar} {...commonProps} />;
  }

  const navbarLayouts = keys(NavbarLayout);
  const blocks = navbar.blocks;

  switch (navbarLayout) {
    /**
     * Standard
     */
    case NavbarLayout.standard: {
      return <NavbarStandard ref={ref} navbar={navbar} {...commonProps}></NavbarStandard>;
    }

    /**
     * Default layout which indicates a config problem, or
     * that a custom navbar was passed but no component was provided for this layout
     */
    default: {
      logWarn(`unsupported layout: ${navbar.layout}, skipping navbar: ${navbar.name}`);
      return <div {...commonProps}>{navbar.name}</div>;
    }
  }
}
