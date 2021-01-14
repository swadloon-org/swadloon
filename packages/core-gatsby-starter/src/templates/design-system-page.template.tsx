import { GatsbySrcPageContext } from '@newrade/core-gatsby-config';
import { getMetaBasicTags, Center } from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

export type DesignSystemPageProps = PageProps<{}, GatsbySrcPageContext>;

type Props = Omit<DesignSystemPageProps, 'children'> & { children: ReactNode };

export const DesignSystemPageTemplate: React.FC<Props & { children: ReactNode }> = (props) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {getMetaBasicTags()}
      </Helmet>
      <Center maxWidth={`900px`}>{props.children}</Center>
    </>
  );
};

export default DesignSystemPageTemplate;
