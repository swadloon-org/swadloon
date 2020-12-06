import React, { ReactNode } from 'react';
import { PageProps } from 'gatsby';
import { GatsbySrcPageContext } from '@newrade/core-gatsby-config';
import { GatsbyNodeSiteMetadataFragment } from '../../types/graphql-types';

export type SrcPageTemplateProps = PageProps<{}, GatsbySrcPageContext<GatsbyNodeSiteMetadataFragment>>;

export type Props = Omit<SrcPageTemplateProps, 'children'> & { children: ReactNode };

export const SrcPageTemplate: React.FC<Props & { children: ReactNode }> = (props) => {
  return <>{props.children}</>;
};
