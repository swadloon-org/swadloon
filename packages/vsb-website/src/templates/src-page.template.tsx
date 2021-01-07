import { GatsbySrcPageContext } from '@newrade/core-gatsby-config';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';

export type SrcPageTemplateProps = PageProps<{}, GatsbySrcPageContext>;

export type Props = Omit<SrcPageTemplateProps, 'children'> & { children: ReactNode };

export const SrcPageTemplate: React.FC<Props & { children: ReactNode }> = (props) => {
  return (
    <>
      {/* {props.pageContext.siteMetadata?.siteEnv === DEPLOY_ENV.LOCAL ? <DebugGasbyPage {...props} /> : null} */}
      {props.children}
    </>
  );
};
