import { keys, useTreatTheme } from '@newrade/core-react-ui';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionAPI } from '../api/section.api';
import { BlockRenderer } from '../blocks/block-renderer';
import { SectionDivider } from './section-divider';
import { SectionMessenger } from './section-messenger';
import { SectionStack } from './section-stack';
import { SectionSwitcher } from './section-switcher';
import { SectionLayout, SectionProps, SectionRendererProps } from './section.props';

const log = debug('newrade:core-gatsby-ui:section-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error'); // deepscan-disable-line UNUSED_DECL

/**
 * Component that will render a Section object in their layout.
 */
export function SectionRenderer<CustomSectionLayouts extends string, CustomBlockVariants extends string>({
  section,
  sectionComponents,
  blockComponents,
  ...props
}: PropsWithChildren<SectionRendererProps<CustomSectionLayouts, CustomBlockVariants>>) {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { cssTheme, theme } = useTreatTheme();

  if (!section) {
    return null;
  }
  const sectionLayout = section.layout as SectionLayout;

  log(`rendering: ${section.name} with layout: ${sectionLayout}`);

  /**
   * Custom components
   */
  if (sectionComponents && sectionComponents[sectionLayout]) {
    const CustomSection = sectionComponents[sectionLayout] as React.ElementType<SectionProps | SectionAPI>;

    return <CustomSection section={section} />;
  }

  const sectionLayouts = keys(SectionLayout);

  if (sectionLayouts.includes(section.layout as SectionLayout)) {
    const blocks = section.blocks;

    switch (sectionLayout) {
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
                  <BlockRenderer blockComponents={blockComponents} key={index} block={block} inView={sectionInView} />
                ))}
              </>
            }
          ></SectionStack>
        );
      }

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
          ></SectionSwitcher>
        );
      }

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
          ></SectionDivider>
        );
      }

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
          ></SectionMessenger>
        );
      }

      default: {
        return <div>{section.name}</div>;
      }
    }
  }

  logWarn(`unsupported layout: ${section.layout}, skipping section: ${section.name}`);

  return null;
}
