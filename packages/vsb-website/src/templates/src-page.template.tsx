import { DEPLOY_ENV } from '@newrade/core-common';
import { GatsbyNodeSiteMetadataFragment, GatsbySrcPageContext } from '@newrade/core-gatsby-config';
import { DebugGasbyPage } from '@newrade/core-gatsby-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';

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
