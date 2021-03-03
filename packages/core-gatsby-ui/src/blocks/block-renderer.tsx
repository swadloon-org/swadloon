import { ButtonSize, Variant } from '@newrade/core-design-system';
import { Button, ErrorBoundary, Stack, useIsSSR, useTreatTheme } from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { GatsbyLink } from '..';
import { BlockGoogleMapAPI } from '../api/block-google-map.api';
import { BlockAPI } from '../api/block.api';
import { BlockImage } from './block-image';
import { BlockMarkdown } from './block-markdown';
import { BlockRendererProps, BlockType } from './block.props';

const log = debug('newrade:core-gatsby-ui:block-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

const BlockGoogleMap = React.lazy(() =>
  import('./block-google-map').then((comp) => ({ default: comp.BlockGoogleMap }))
);

/**
 * Renders a block according to its variant (type)
 */
export function BlockRenderer<CustomBlockVariants extends string>({
  block,
  inView,
  blockComponents,
  ...props
}: PropsWithChildren<BlockRendererProps<CustomBlockVariants>>) {
  const isSSR = useIsSSR();
  const { cssTheme, theme } = useTreatTheme();

  if (!block) {
    logWarn(`block was not defined`);
    return null;
  }

  log(`rendering: ${block.name} with variant ${block.variant}`);

  /**
   * Custom Blocks
   */
  if (block.variant && blockComponents && blockComponents[block.variant as CustomBlockVariants | BlockType]) {
    const CustomBlock = blockComponents[block.variant as CustomBlockVariants | BlockType] as React.ElementType;
    if (!CustomBlock) {
      return null;
    }

    return <CustomBlock block={block as BlockAPI} />;
  }

  switch (block.type) {
    /**
     * Text / Generic Block
     */
    case BlockType.text: {
      const blockText = block as BlockAPI;
      return (
        <ErrorBoundary>
          <Stack gap={[cssTheme.sizing.var.x5]} {...props}>
            <BlockMarkdown block={blockText}>{blockText.text?.childMdx?.body}</BlockMarkdown>

            {blockText.link?.page?.slug ? (
              <Button
                size={ButtonSize.large}
                variant={Variant.secondary}
                Icon={<IoArrowForwardOutline />}
                AsElement={<GatsbyLink to={blockText.link?.page?.slug} />}
              >
                {blockText.link?.label}
              </Button>
            ) : null}
          </Stack>
        </ErrorBoundary>
      );
    }

    /**
     * Image Block
     */
    case BlockType.image: {
      const blockImage = block as BlockAPI;
      return (
        <ErrorBoundary>
          <BlockImage block={blockImage} {...props}></BlockImage>
        </ErrorBoundary>
      );
    }

    /**
     * Google Maps Block
     */
    case BlockType.googleMaps: {
      const blockGoogleMaps = block as BlockGoogleMapAPI;
      return (
        <ErrorBoundary>
          {!isSSR && inView ? (
            <React.Suspense fallback={<div />}>
              <BlockGoogleMap inView={inView} blockGoogleMaps={blockGoogleMaps} {...props} />
            </React.Suspense>
          ) : null}
        </ErrorBoundary>
      );
    }

    /**
     * No component defined for the block
     */
    default: {
      return null;
    }
  }
}
