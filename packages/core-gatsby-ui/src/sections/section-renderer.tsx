import { keys, useTreatTheme } from '@newrade/core-react-ui';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';
import { BlockAPI } from '../api/block.api';
import { SectionAPI } from '../api/section.api';
import { BlockRenderer } from '../blocks/block-renderer';
import { BlockProps } from '../blocks/block.props';
import { SectionMessenger } from './section-messenger';
import { SectionStack } from './section-stack';
import { SectionSwitcher } from './section-switcher';
import { SectionLayout } from './section.props';

const log = debug('newrade:core-gatsby-ui:section-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type Props<CustomSectionLayouts extends string = '', CustomBlockVariants extends string = ''> = {
  section: SectionAPI;
  sectionComponents?: { [key in CustomSectionLayouts]: (props: { section: SectionAPI }) => React.ReactNode };
  blockComponents?: { [key in CustomBlockVariants]: (props: BlockProps & { block: BlockAPI }) => React.ReactNode };
};

/**
 * Component that will render a Section object in their layout.
 */
export function SectionRenderer<CustomSectionLayouts extends string, CustomBlockVariants extends string>({
  section,
  sectionComponents,
  blockComponents,
  ...props
}: PropsWithChildren<Props<CustomSectionLayouts, CustomBlockVariants>>) {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { cssTheme, theme } = useTreatTheme();

  if (!section) {
    return null;
  }

  const sectionLayouts = keys(SectionLayout);

  if (sectionLayouts.includes(section.layout as SectionLayout)) {
    const sectionLayout = section.layout as SectionLayout;
    const blocks = section.blocks;

    log(`rendering: ${section.name}`);

    switch (sectionLayout) {
      case SectionLayout.stack: {
        if (!blocks?.length) {
          logWarn(`blocks must be set for SectionStack ${section.name}`);
          return null;
        }

        return (
          <SectionStack
            ref={ref}
            variant={section.variant}
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
            variant={section.variant}
            LeftBlock={<BlockRenderer blockComponents={blockComponents} block={leftBlock} inView={sectionInView} />}
            RightBlock={<BlockRenderer blockComponents={blockComponents} block={rightBlock} inView={sectionInView} />}
          ></SectionSwitcher>
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
            variant={section.variant}
            LeftBlock={<BlockRenderer blockComponents={blockComponents} block={leftBlock} inView={sectionInView} />}
            RightBlocks={
              <>
                {rightBlocks.map((block, index) => (
                  <BlockRenderer blockComponents={blockComponents} key={index} block={block} inView={sectionInView} />
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
