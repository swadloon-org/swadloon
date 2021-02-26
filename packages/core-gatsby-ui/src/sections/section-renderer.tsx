import { keys } from '@newrade/core-react-ui';
import debug from 'debug';
import React from 'react';
import { BlockRenderer } from '../blocks/block-renderer';
import { SectionSwitcher } from './section-switcher';
import { SectionAPI } from './section.api';
import { SectionLayout } from './section.props';

const log = debug('newrade:core-gatsby-ui');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type Props<CustomSectionLayouts extends string = '', CustomBlockVariants extends string = ''> = {
  section: SectionAPI;
  sectionComponents?: { [key: string]: React.ReactNode };
  // sectionComponents?: { [key in CustomSectionLayouts]: React.ReactNode };
  blockComponents?: { [key: string]: React.ReactNode };
  // blockComponents?: { [key in CustomBlockVariants]: React.ReactNode };
};

/**
 * Component that will render a Section object in their layout.
 */
export const SectionRenderer: React.FC<Props> = ({ section, ...props }) => {
  if (!section) {
    return null;
  }

  const sectionLayouts = keys(SectionLayout);

  if (sectionLayouts.includes(section.layout as SectionLayout)) {
    const sectionLayout = section.layout as SectionLayout;
    const blocks = section.blocks;

    switch (sectionLayout) {
      case SectionLayout.switcher: {
        const leftBlock = blocks?.[0];
        const rightBlock = blocks?.[1];

        if (!leftBlock || !rightBlock) {
          return null;
        }

        return (
          <SectionSwitcher
            LeftBlock={<BlockRenderer block={leftBlock} />}
            RightBlock={<BlockRenderer block={rightBlock} />}
          ></SectionSwitcher>
        );
      }
      default: {
        return <div>{section.name}</div>;
      }
    }
  }

  logWarn(`unsupported layout, skipping section: ${section.name}`);

  return null;
};
