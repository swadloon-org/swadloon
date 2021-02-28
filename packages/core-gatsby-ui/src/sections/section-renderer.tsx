import { keys } from '@newrade/core-react-ui';
import debug from 'debug';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BlockRenderer } from '../blocks/block-renderer';
import { SectionSwitcher } from './section-switcher';
import { SectionAPI } from './section.api';
import { SectionLayout } from './section.props';

const log = debug('newrade:core-gatsby-ui:section-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type Props<CustomSectionLayouts extends string = '', CustomBlockVariants extends string = ''> = {
  section: SectionAPI;
  sectionComponents?: { [key in CustomSectionLayouts]: React.ReactNode };
  // sectionComponents?: { [key in CustomSectionLayouts]: React.ReactNode };
  blockComponents?: { [key in CustomBlockVariants]: React.ReactNode };
  // blockComponents?: { [key in CustomBlockVariants]: React.ReactNode };
};

/**
 * Component that will render a Section object in their layout.
 */
export const SectionRenderer: React.FC<Props> = ({ section, ...props }) => {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (!section) {
    return null;
  }

  const sectionLayouts = keys(SectionLayout);

  if (sectionLayouts.includes(section.layout as SectionLayout)) {
    const sectionLayout = section.layout as SectionLayout;
    const blocks = section.blocks;

    log(`rendering: ${section.name}`);

    switch (sectionLayout) {
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
            LeftBlock={<BlockRenderer block={leftBlock} inView={sectionInView} />}
            RightBlock={<BlockRenderer block={rightBlock} inView={sectionInView} />}
          ></SectionSwitcher>
        );
      }
      default: {
        return <div>{section.name}</div>;
      }
    }
  }

  logWarn(`unsupported layout: ${section.layout}, skipping section: ${section.name}`);

  return null;
};
