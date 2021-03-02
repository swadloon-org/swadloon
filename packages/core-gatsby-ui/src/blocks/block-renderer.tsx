import { ButtonSize, ButtonVariant } from '@newrade/core-design-system';
import { Button, ErrorBoundary, Stack, useIsSSR, useTreatTheme } from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { GatsbyLink } from '..';
import { BlockGoogleMapAPI } from '../api/block-google-map.api';
import { BlockAPI } from '../api/block.api';
import { BlockMarkdown } from './block-markdown';
import { BlockRendererProps, BlockVariant } from './block.props';

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
  if (block.variant && blockComponents && blockComponents[block.variant as CustomBlockVariants | BlockVariant]) {
    const CustomBlock = blockComponents[block.variant as CustomBlockVariants | BlockVariant] as React.ElementType;
    if (!CustomBlock) {
      return null;
    }

    return <CustomBlock block={block as BlockAPI} />;
  }

  switch (block.variant) {
    /**
     * Google Maps Block
     */
    case BlockVariant.googleMaps: {
      const blockGoogleMaps = block as BlockGoogleMapAPI;
      return (
        <ErrorBoundary>
          {!isSSR && inView ? (
            <React.Suspense fallback={<div />}>
              <BlockGoogleMap inView={inView} {...blockGoogleMaps} />
            </React.Suspense>
          ) : null}
        </ErrorBoundary>
      );
    }

    /**
     * Image Block
     */
    case BlockVariant.image: {
      const blockText = block as BlockAPI;
      return (
        <ErrorBoundary>
          <Stack gap={[cssTheme.sizing.var.x5]}>
            <BlockMarkdown block={blockText}>{blockText.text?.childMdx?.body}</BlockMarkdown>

            {blockText.link?.page?.slug ? (
              <Button
                size={ButtonSize.large}
                variant={ButtonVariant.secondary}
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
     * Text / Generic Block
     */
    case BlockVariant.text: {
      const blockText = block as BlockAPI;
      return (
        <ErrorBoundary>
          <Stack gap={[cssTheme.sizing.var.x5]}>
            <BlockMarkdown block={blockText}>{blockText.text?.childMdx?.body}</BlockMarkdown>

            {blockText.link?.page?.slug ? (
              <Button
                size={ButtonSize.large}
                variant={ButtonVariant.secondary}
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
     * No component defined for the block
     */
    default: {
      return null;
    }
  }
}
