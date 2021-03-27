import loadable from '@loadable/component';
import { ButtonSize, Variant } from '@newrade/core-design-system';
import { Button, ErrorBoundary, Stack, useCommonProps, useIsSSR, useTreatTheme } from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { BlockGoogleMapAPI } from '../api/block-google-map.api';
import { BlockAPI } from '../api/block.api';
import { GatsbyLink } from '../links/gatsby-link';
import { BlockGoogleMapsProps } from './block-google-map';
import { BlockImage } from './block-image';
import { BlockImageBackground } from './block-image-background';
import { BlockMarkdown } from './block-markdown';
import { BlockRendererProps, BlockType } from './block.props';

const log = debug('newrade:core-gatsby-ui:block-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

const BlockGoogleMap = loadable<BlockGoogleMapsProps>(
  // @ts-ignore
  () => {
    return import('./block-google-map');
  },
  {
    resolveComponent: (components: typeof import('./block-google-map')) => components.BlockGoogleMap,
  }
);

/**
 * Renders a block according to its variant (type)
 */
export function BlockRenderer<CustomBlockVariants extends string>({
  id,
  style,
  className,
  as,
  AsElement,
  inView,
  block,
  blockComponents,
  ...props
}: PropsWithChildren<BlockRendererProps<CustomBlockVariants>>) {
  const isSSR = useIsSSR();
  const { cssTheme, theme } = useTreatTheme();
  const commonProps = useCommonProps({ id, style, className, ...props });

  if (!block) {
    logWarn(`block was not defined`);
    return null;
  }

  log(`rendering: ${block.name} with variant ${block.variant}`);

  /**
   * Custom Blocks
   */
  if (block.variant && blockComponents && blockComponents[block.variant as CustomBlockVariants | BlockType]) {
    const CustomBlock = blockComponents[block.variant as CustomBlockVariants | BlockType] as React.ElementType<
      BlockRendererProps<CustomBlockVariants>
    >;
    if (!CustomBlock) {
      return null;
    }

    return <CustomBlock inView={inView} block={block as BlockAPI} {...commonProps} />;
  }

  switch (block.type) {
    /**
     * Text / Generic Block
     */
    case BlockType.text: {
      const blockText = block as BlockAPI;
      return (
        <ErrorBoundary>
          <Stack gap={[cssTheme.sizing.var.x5]} {...commonProps}>
            <BlockMarkdown block={blockText}>{blockText.text?.childMdx?.body}</BlockMarkdown>

            {blockText.link?.page?.slug ? (
              <Button
                size={ButtonSize.large}
                variant={(blockText.variant as Variant) || Variant.secondary}
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
     * Image background
     */
    case BlockType.imageBackground: {
      const blockImage = block as BlockAPI;
      return (
        <ErrorBoundary>
          <BlockImageBackground inView={inView} block={blockImage} {...commonProps}></BlockImageBackground>
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
          <BlockImage inView={inView} block={blockImage} {...commonProps}></BlockImage>
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
            <BlockGoogleMap inView={inView} blockGoogleMaps={blockGoogleMaps} {...commonProps} />
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
