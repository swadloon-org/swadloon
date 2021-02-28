import { ErrorBoundary, useIsSSR } from '@newrade/core-react-ui';
import debug from 'debug';
import React from 'react';
import { BlockGoogleMapAPI } from './block-google-map.api';
import { BlockMarkdown } from './block-markdown';
import { BlockAPI } from './block.api';
import { BlockProps, BlockVariant } from './block.props';

const log = debug('newrade:core-gatsby-ui:block-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type Props = {
  inView?: boolean;
  block?: BlockProps | BlockAPI | BlockGoogleMapAPI | null;
};

const BlockGoogleMap = React.lazy(() =>
  import('./block-google-map').then((comp) => ({ default: comp.BlockGoogleMap }))
);

/**
 * Renders a block according to its variant (type)
 */
export const BlockRenderer: React.FC<Props> = ({ block, inView, ...props }) => {
  const isSSR = useIsSSR();

  if (!block) {
    logWarn(`block was not defined`);
    return null;
  }

  log(`rendering: ${block.name} with variant ${block.variant}`);

  switch (block.variant) {
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
    default:
    case BlockVariant.text: {
      return <BlockMarkdown>{(block as BlockAPI).text?.childMdx.body}</BlockMarkdown>;
    }
  }
};
