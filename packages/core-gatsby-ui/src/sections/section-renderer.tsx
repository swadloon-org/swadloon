import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import debug from 'debug';

import { useCommonProps } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities-iso';
import { BlockType, SectionAPI, SectionLayout } from '@newrade/core-website-api';

import { BlockRenderer } from '../blocks/block-renderer.js';

import { SectionProps, SectionRendererProps } from './section.props.js';
import { SectionBanner } from './section-banner.js';
import { SectionDivider } from './section-divider.js';
import { SectionMessenger } from './section-messenger.js';
import { SectionShowcase } from './section-showcase.js';
import { SectionStack } from './section-stack.js';
import { SectionStatement } from './section-statement.js';
import { SectionSwitcher } from './section-switcher.js';

const log = debug('nr:core-gatsby-ui:section-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Component that will render a Section object in their layout.
 */
export function SectionRenderer<
  CustomSectionLayouts extends string,
  CustomBlockVariants extends string
>({
  id,
  className,
  style,
  as,
  AsElement,
  inView,
  section,
  sectionComponents,
  blockComponents,
  ...props
}: PropsWithChildren<SectionRendererProps<CustomSectionLayouts, CustomBlockVariants>>) {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const commonProps = useCommonProps<'section'>({ id, style, className, ...props });

  if (!section) {
    return null;
  }
  const sectionLayout = section.layout as SectionLayout;

  log(`rendering: ${section.name} with layout: ${sectionLayout}`);

  /**
   * Render custom sections (layouts)
   */
  if (sectionComponents && sectionComponents[sectionLayout]) {
    const CustomSection = sectionComponents[sectionLayout] as React.ElementType<
      SectionProps | SectionAPI
    >;

    // @ts-ignore
    return <CustomSection section={section} {...commonProps} />;
  }

  const sectionLayouts = keys(SectionLayout);

  const blocks = section.blocks;

  switch (sectionLayout) {
    /**
     * Switcher
     */
    case SectionLayout.switcher: {
      const leftBlock = blocks?.[0];
      const rightBlock = blocks?.[1];

      if (!leftBlock || !rightBlock) {
        logWarn(`both blocks must be set for SectionSwitcher ${section.name}`);
        return null;
      }

      return (
        <SectionSwitcher
          ref={ref}
          section={section}
          LeftBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={leftBlock}
              inView={sectionInView}
            />
          }
          RightBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={rightBlock}
              inView={sectionInView}
            />
          }
          {...commonProps}
        ></SectionSwitcher>
      );
    }

    /**
     * Stack
     */
    case SectionLayout.stack: {
      if (!blocks?.length) {
        logWarn(`blocks must be set for SectionStack ${section.name}`);
        return null;
      }

      return (
        <SectionStack
          ref={ref}
          section={section}
          Blocks={
            <>
              {blocks.map((block, index) => (
                <BlockRenderer<CustomBlockVariants>
                  blockComponents={blockComponents}
                  key={index}
                  block={block}
                  inView={sectionInView}
                />
              ))}
            </>
          }
          {...commonProps}
        ></SectionStack>
      );
    }

    /**
     * Statement
     */
    case SectionLayout.statement: {
      const topBlock = blocks?.[0];
      const leftBlock = blocks?.[1];
      const rightBlock = blocks?.[2];

      if (!topBlock || !leftBlock || !rightBlock) {
        logWarn(`both blocks must be set for SectionStatement ${section.name}`);
        return null;
      }

      return (
        <SectionStatement
          ref={ref}
          section={section}
          TopBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={topBlock}
              inView={sectionInView}
            />
          }
          LeftBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={leftBlock}
              inView={sectionInView}
            />
          }
          RightBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={rightBlock}
              inView={sectionInView}
            />
          }
          {...commonProps}
        ></SectionStatement>
      );
    }

    /**
     * Divider
     */
    case SectionLayout.divider: {
      const leftBlock = blocks?.[0];
      const rightBlock = blocks?.[1];

      if (!leftBlock || !rightBlock) {
        logWarn(`both blocks must be set for SectionSwitcher ${section.name}`);
        return null;
      }

      return (
        <SectionDivider
          ref={ref}
          section={section}
          LeftBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={leftBlock}
              inView={sectionInView}
            />
          }
          RightBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={rightBlock}
              inView={sectionInView}
            />
          }
          {...commonProps}
        ></SectionDivider>
      );
    }

    case SectionLayout.showcase: {
      const leftTextBlock = blocks?.[0];
      const leftBackgroundBlock = blocks?.[1];
      const rightTextBlock = blocks?.[2];
      const rightBackgroundBlock = blocks?.[3];

      if (!leftTextBlock || !rightTextBlock) {
        logWarn(`both blocks must be set for SectionShowcase ${section.name}`);
        return null;
      }

      return (
        <SectionShowcase
          ref={ref}
          section={section}
          LeftTextBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={leftTextBlock}
              inView={sectionInView}
            />
          }
          LeftBGBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={leftBackgroundBlock}
              inView={sectionInView}
            />
          }
          RightTextBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={rightTextBlock}
              inView={sectionInView}
            />
          }
          RightBGBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={rightBackgroundBlock}
              inView={sectionInView}
            />
          }
        ></SectionShowcase>
      );
    }

    /**
     * Messenger
     */
    case SectionLayout.messenger: {
      const leftBlock = blocks?.[0];
      const rightBlocks = blocks?.slice(1);

      if (!leftBlock || !rightBlocks) {
        logWarn(`both blocks must be set for SectionMessenger ${section.name}`);
        return null;
      }

      return (
        <SectionMessenger
          ref={ref}
          section={section}
          LeftBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={leftBlock}
              inView={sectionInView}
            />
          }
          RightBlocks={
            <>
              {rightBlocks.map((block, index) => (
                <BlockRenderer<CustomBlockVariants>
                  blockComponents={blockComponents}
                  key={index}
                  block={block}
                  inView={sectionInView}
                />
              ))}
            </>
          }
          {...commonProps}
        ></SectionMessenger>
      );
    }

    /**
     * Banner
     */
    case SectionLayout.banner: {
      const backgroundBlock = blocks?.find((block) => block?.type === BlockType.imageBackground);
      const contentBlock = blocks?.find((block) => block?.type === BlockType.text);

      if (!backgroundBlock || !contentBlock) {
        logWarn(`both blocks must be set for SectionBanner ${section.name}`);
      }

      return (
        <SectionBanner
          ref={ref}
          section={section}
          BackgroundBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={backgroundBlock}
              inView={sectionInView}
            />
          }
          ContentBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={contentBlock}
              inView={sectionInView}
            />
          }
          {...commonProps}
        ></SectionBanner>
      );
    }

    /**
     * Banner
     */
    case SectionLayout.callout: {
      const backgroundBlock = blocks?.find((block) => block?.type === BlockType.imageBackground);
      const contentBlock = blocks?.find((block) => block?.type === BlockType.text);

      return (
        <SectionBanner
          ref={ref}
          section={section}
          inView={inView}
          BackgroundBlock={
            backgroundBlock ? (
              <BlockRenderer<CustomBlockVariants>
                blockComponents={blockComponents}
                block={backgroundBlock}
                inView={sectionInView}
              />
            ) : null
          }
          ContentBlock={
            <BlockRenderer<CustomBlockVariants>
              blockComponents={blockComponents}
              block={contentBlock}
              inView={sectionInView}
            />
          }
          callout={true}
          {...commonProps}
        ></SectionBanner>
      );
    }

    /**
     * Default layout which indicates a config problem, or
     * that a custom section was passed but no component was provided for this layout
     */
    default: {
      logWarn(`unsupported layout: ${section.layout}, skipping section: ${section.name}`);
      return <div {...commonProps}>{section.name}</div>;
    }
  }
}
