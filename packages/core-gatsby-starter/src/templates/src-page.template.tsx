import React, { ReactNode } from 'react';
import { PageProps } from 'gatsby';
import { GatsbySrcPageContext } from '@newrade/core-gatsby-config';
import { GatsbyNodeSiteMetadataFragment } from '../../types/graphql-types';
import { DEPLOY_ENV } from '@newrade/core-env';
import { DebugGasbyPage } from '../components/debug-gatsby-page';

export type SrcPageTemplateProps = PageProps<{}, GatsbySrcPageContext<GatsbyNodeSiteMetadataFragment>>;

export type Props = Omit<SrcPageTemplateProps, 'children'> & { children: ReactNode };

export const SrcPageTemplate: React.FC<Props & { children: ReactNode }> = (props) => {
  return (
    <>
      {props.pageContext.siteMetadata?.siteEnv === DEPLOY_ENV.LOCAL ? <DebugGasbyPage {...props} /> : null}
      {props.children}
    </>
  );
};
