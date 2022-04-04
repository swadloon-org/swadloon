import React, { PropsWithChildren, Suspense } from 'react';

import debug from 'debug';

import {
  ErrorBoundary,
  Stack,
  useCommonProps,
  useCSSTheme,
  useIsSSR,
} from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import {
  BlockAlignment,
  BlockAPI,
  BlockGoogleMapAPI,
  BlockType,
  LinkAPI,
} from '@newrade/core-website-api';

import { LinkRenderer } from '../links/link-renderer';

import { BlockRendererProps } from './block.props';
import { BlockGoogleMapLazy } from './block-google-map.lazy';
import { BlockImage } from './block-image';
import { BlockImageBackground } from './block-image-background';
import { BlockMarkdown } from './block-markdown';

import * as styles from './block-renderer.css';

const log = debug('nr:core-gatsby-ui:block-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

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

  const { getCSSColorModeClassnames } = useCSSTheme();

  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [
      block?.alignment ? styles[block.alignment as BlockAlignment] : '',
      getCSSColorModeClassnames({ colorMode: block?.colorMode, colorScheme: block?.colorScheme }),
    ],
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
          <Stack gap={[sizeVars.x5]} {...commonProps}>
            <BlockMarkdown block={blockText}>{blockText.text?.childMdx?.body}</BlockMarkdown>

            {blockText.link?.page?.slug ? (
              <LinkRenderer link={blockText.link as LinkAPI}></LinkRenderer>
            ) : null}
          </Stack>
        </ErrorBoundary>
      );
    }

    /**
     * Image Background Block
     */
    case BlockType.imageBackground: {
      const blockImage = block as BlockAPI;
      return (
        <ErrorBoundary>
          <BlockImageBackground
            version={'v2'}
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
          {inView ? (
            <Suspense fallback={<div></div>}>
              <BlockGoogleMapLazy
                inView={inView}
                blockGoogleMaps={blockGoogleMaps}
                {...commonProps}
              />
            </Suspense>
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
