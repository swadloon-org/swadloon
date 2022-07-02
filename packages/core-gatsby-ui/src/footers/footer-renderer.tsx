import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import debug from 'debug';

import { useCommonProps } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities-iso';
import { FooterLayout } from '@newrade/core-website-api';

import { FooterProps, FooterRendererProps } from './footer.props.js';
import { FooterStandard } from './footer-standard.js';

const log = debug('nr:core-gatsby-ui:footer-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Component that will render a Footer object in their layout.
 */
export function FooterRenderer<
  CustomFooterLayouts extends string,
  CustomBlockVariants extends string
>({
  id,
  className,
  style,
  as,
  AsElement,
  footer,
  footerComponents,
  blockComponents,
  ...props
}: PropsWithChildren<FooterRendererProps<CustomFooterLayouts, CustomBlockVariants>>) {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const commonProps = useCommonProps<'footer'>({ id, style, className, ...props });

  if (!footer) {
    return null;
  }

  const footerLayout = footer.layout as FooterLayout;

  log(`rendering: ${footer.name} with layout: ${footerLayout}`);

  /**
   * Render custom sections (layouts)
   */
  if (footerComponents && footerComponents[footerLayout]) {
    const CustomFooter = footerComponents[footerLayout] as React.ElementType<FooterProps>;

    // @ts-ignore
    return <CustomFooter footer={footer} {...commonProps} />;
  }

  const footerLayouts = keys(FooterLayout);
  const blocks = footer.blocks;

  switch (footerLayout) {
    /**
     * Standard
     */
    case FooterLayout.standard: {
      return <FooterStandard ref={ref} footer={footer} {...commonProps}></FooterStandard>;
    }

    /**
     * Default layout which indicates a config problem, or
     * that a custom footer was passed but no component was provided for this layout
     */
    default: {
      logWarn(`unsupported layout: ${footer.layout}, skipping footer: ${footer.name}`);
      return <div {...commonProps}>{footer.name}</div>;
    }
  }
}
