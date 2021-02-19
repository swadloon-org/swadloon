import { GatsbySrcPageContext } from '@newrade/core-gatsby-config';
import {
  Center,
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  Hr,
  MarkdownCSS,
  OPEN_GRAPH_TYPE,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import { I18nProvider } from 'react-aria';
import Helmet from 'react-helmet';

export type DesignSystemPageProps = PageProps<{}, GatsbySrcPageContext> & {
  contentWidth?: string;
};

type Props = Omit<DesignSystemPageProps, 'children'> & { children: ReactNode };

export const DesignSystemPageTemplate: React.FC<Props & { children: ReactNode }> = (props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <>
      <Helmet>
        <html lang={props.pageContext.locale} />
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
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.pageContext.displayName || props.pageContext.name || props.pageContext.siteMetadata.title}`,
          // url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulBlogPost?.blogSlug}`,
          description: `No description provided`,
          // image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          // site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: props.pageContext.locale,
          locale: props.pageContext.locale,
          // localeAlternate: data?.contentfulBlogPost?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
      </Helmet>
      <I18nProvider locale={props.pageContext.locale}>
        <Center maxWidth={props.contentWidth ? props.contentWidth : `900px`}>
          <MarkdownCSS>
            {props.children}

            <Hr />
          </MarkdownCSS>
        </Center>
      </I18nProvider>
    </>
  );
};
