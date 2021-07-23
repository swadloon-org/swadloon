import loadable from '@loadable/component';
import {
  ErrorBoundary,
  Stack,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import {
  BlockAlignment,
  BlockAPI,
  BlockGoogleMapAPI,
  BlockType,
  LinkAPI,
} from '@newrade/core-website-api';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { useStyles } from 'react-treat';
import { LinkRenderer } from '../links/link-renderer';
import { BlockGoogleMapsProps } from './block-google-map';
import { BlockImage } from './block-image';
import { BlockImageBackground } from './block-image-background';
import { BlockMarkdown } from './block-markdown';
import * as styleRefs from './block-renderer.treat';
import { BlockRendererProps } from './block.props';

const log = debug('newrade:core-gatsby-ui:block-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

const BlockGoogleMap = loadable<BlockGoogleMapsProps>(
  // @ts-ignore
  () => {
    return import('./block-google-map');
  },
  {
    resolveComponent: (components: typeof import('./block-google-map')) =>
      components.BlockGoogleMap,
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
  const styles = useStyles(styleRefs);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [block?.alignment ? styles[block.alignment as BlockAlignment] : ''],
    ...props,
  });

  if (!block) {
    logWarn(`block was not defined`);
    return null;
  }

  log(`rendering: ${block.name} with variant ${block.variant} and type ${block.type}`);

  /**
   * Custom Blocks
   */
  if (
    block.variant &&
    blockComponents &&
    blockComponents[block.variant as CustomBlockVariants | BlockType]
  ) {
    const CustomBlock = blockComponents[
      block.variant as CustomBlockVariants | BlockType
    ] as React.ElementType<BlockRendererProps<CustomBlockVariants>>;
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
              <LinkRenderer link={blockText.link as LinkAPI}></LinkRenderer>
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
          <BlockImageBackground
            inView={inView}
            block={blockImage}
            {...commonProps}
          ></BlockImageBackground>
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
