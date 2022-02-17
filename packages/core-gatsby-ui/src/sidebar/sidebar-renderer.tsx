import React, { PropsWithChildren, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

import debug from 'debug';

import { useCommonProps } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities-iso';
import { SidebarLayout } from '@newrade/core-website-api';

import { SidebarProps, SidebarRendererProps } from './sidebar.props';
import { SidebarStandardLazy } from './sidebar-standard.lazy';

const log = debug('nr:core-gatsby-ui:sidebar-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Component that will render a Sidebar from a Sidebar API object
 */
export function SidebarRenderer<
  CustomSidebarLayouts extends string,
  CustomBlockVariants extends string
>({
  id,
  className,
  style,
  as,
  AsElement,
  sidebar,
  sidebarComponents,
  blockComponents,
  ...props
}: PropsWithChildren<SidebarRendererProps<CustomSidebarLayouts, CustomBlockVariants>>) {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const commonProps = useCommonProps<'nav'>({ id, style, className, ...props });

  if (!sidebar) {
    return null;
  }

  const sidebarLayout = sidebar.layout as SidebarLayout;

  log(`rendering: ${sidebar.name} with layout: ${sidebarLayout}`);

  /**
   * Render custom sections (layouts)
   */
  if (sidebarComponents && sidebarComponents[sidebarLayout]) {
    const CustomSidebar = sidebarComponents[sidebarLayout] as React.ElementType<SidebarProps>;

    // @ts-ignore
    return <CustomSidebar sidebar={sidebar} {...commonProps} />;
  }

  const sidebarLayouts = keys(SidebarLayout);
  const blocks = sidebar.blocks;

  switch (sidebarLayout) {
    /**
     * Standard
     */
    case SidebarLayout.standard: {
      return (
        <Suspense fallback={''}>
          <SidebarStandardLazy ref={ref} sidebar={sidebar} {...commonProps}></SidebarStandardLazy>
        </Suspense>
      );
    }

    /**
     * Default layout which indicates a config problem, or
     * that a custom sidebar was passed but no component was provided for this layout
     */
    default: {
      logWarn(`unsupported layout: ${sidebar.layout}, skipping sidebar: ${sidebar.name}`);
      return <div {...commonProps}>{sidebar.name}</div>;
    }
  }
}
