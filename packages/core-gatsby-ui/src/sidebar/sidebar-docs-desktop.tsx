import { SITE_LANGUAGES } from '@newrade/core-common';
import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  Hr,
  InputLabel,
  InputText,
  InputWrapper,
  Link,
  Paragraph,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { LinkAPI, NavigationAPI } from '@newrade/core-website-api/src';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { useI18next } from '../i18next/use-i18next.hook';
import { LinkRenderer } from '../links/link-renderer';
import { SidebarBase } from './sidebar-base';
import { SidebarDocsDesktopGroup } from './sidebar-docs-desktop-group';
import { SidebarDocsDesktopItem } from './sidebar-docs-desktop-item';
import * as styleRefs from './sidebar-docs-desktop.treat';
import { SidebarProps } from './sidebar.props';

type Props = SidebarProps & {};

/**
 * Sidebar meant to be used on desktop, near the main content
 * @description
 *  - displays: title, collapsible sections for each sub navigation level
 */
export const SidebarDocsDesktop = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      sidebar,
      HomeLink,
      onClickMenuButton,
      activePathname,
      currentLanguage,
      languages,
      onChangeLang,
      ...props
    },
    ref
  ) => {
    const styles = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.base],
      ...props,
    });

    /**
     * Languages
     */

    const { t, getAlternativeLang } = useI18next();
    const alternativeLanguage = getAlternativeLang();

    /**
     * Navigation
     */

    const navigation = sidebar?.navigation;
    const sidebarNavigation = navigation;

    /**
     * Copyright and version
     */

    const version = sidebar?.version;
    const copyright = sidebar?.companyInfo?.copyright;
    const formattedVersion = version ? (/^v/gi.test(version) ? version : `v${version}`) : '';
    const copyrightAndVersion = [copyright, formattedVersion].filter((str) => !!str).join(' – ');

    /**
     * Filtering
     */

    const [filterValue, setFilterValue] = useState('');

    function handleOnFilter() {}

    /**
     * Rendering
     */

    function LinksRenderer(links?: PartialOrNull<LinkAPI>[] | null) {
      return (
        <>
          {links?.map((link, id) => {
            return (
              <SidebarDocsDesktopItem key={id} active={link?.page?.slug === activePathname}>
                <LinkRenderer key={id} link={link as LinkAPI}></LinkRenderer>
              </SidebarDocsDesktopItem>
            );
          })}
        </>
      );
    }

    function NavRenderer({
      navs,
      level = 1,
    }: { navs?: PartialOrNull<NavigationAPI>[]; level?: number } = {}) {
      return navs?.map((subNav, subNavIndex) => {
        if (!subNav) {
          return null;
        }

        const links = subNav.links;

        return (
          <Stack key={subNavIndex} gap={[`0px`]}>
            {subNav.label ? (
              <SidebarDocsDesktopGroup label={subNav.label}>
                {LinksRenderer(links as LinkAPI[])}
              </SidebarDocsDesktopGroup>
            ) : null}
          </Stack>
        );
      });
    }

    return (
      <SidebarBase
        sidebar={sidebar}
        sidebarMode={'sticky'}
        ref={ref}
        contentClassName={styles.wrapper}
        {...commonProps}
      >
        {/* Header */}
        <div className={styles.header}>
          <Hr />

          {/* Title */}
          {/* <Label variant={LABEL_SIZE.medium}>Documentation</Label> */}

          {/* Search box */}
          <InputWrapper style={{ display: 'none' }}>
            <InputLabel htmlFor={'sidebar-docs-search'} hidden={true}>
              Search
            </InputLabel>
            <InputText
              id={'sidebar-docs-search'}
              placeholder={'filter pages...'}
              onChange={handleOnFilter}
              value={filterValue}
            ></InputText>
          </InputWrapper>
        </div>

        <div className={styles.navigationWrapper}>
          {/* Navigation items */}
          <div className={styles.navigation}>
            {NavRenderer({ navs: [sidebarNavigation] as NavigationAPI[] })}
            {NavRenderer({ navs: sidebarNavigation?.subNavigation as NavigationAPI[] })}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footer}>
          {/* Language link */}
          {alternativeLanguage?.lang && onChangeLang ? (
            <Link
              variantSize={PARAGRAPH_SIZE.small}
              onClick={(event: React.MouseEvent) =>
                onChangeLang(alternativeLanguage.lang as SITE_LANGUAGES)
              }
            >
              {alternativeLanguage.label}
            </Link>
          ) : null}

          <Hr />

          {/* Copyright and Version */}
          <Paragraph variant={PARAGRAPH_SIZE.xSmall} variantLevel={Variant.secondary}>
            {copyrightAndVersion}
          </Paragraph>

          <Hr />
        </div>
      </SidebarBase>
    );
  }
);
