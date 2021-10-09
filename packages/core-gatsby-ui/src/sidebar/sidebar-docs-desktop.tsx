import { SITE_LANGUAGES } from '@newrade/core-common';
import { LABEL_SIZE, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  Cluster,
  Hr,
  InputLabel,
  InputText,
  InputWrapper,
  Label,
  Link,
  Paragraph,
  Stack,
  useCommonProps,
  useEventListener,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { LinkAPI, NavigationAPI } from '@newrade/core-website-api/src';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { useI18next } from '../i18next/use-i18next.hook';
import { GatsbyLink } from '../links/gatsby-link';
import { getPathParts, isPathActive } from '../utilities/navigation-api.utilities';
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
    const isSSR = useIsSSR();
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
    const baseNavigationPath = sidebarNavigation?.path;
    const baseNavigationPathParts = getPathParts({ path: baseNavigationPath });
    const pathnameParts = getPathParts({ path: activePathname }).filter(
      (part) => !baseNavigationPathParts.find((basePart) => basePart === part)
    );

    /**
     * Scroll management
     */
    const [isScrollSticky, setIsScrollSticky] = useState(false);
    useEventListener<'scroll'>(
      'scroll',
      (event) => {
        if (isSSR) {
          return;
        }
        const isSticky = window.scrollY >= theme.layout.navbarHeight.desktop;
        if (isScrollSticky !== isSticky) {
          setIsScrollSticky(isSticky);
        }
      },
      {
        passive: true,
      }
    );

    /**
     * Copyright and version
     */

    const version = sidebar?.version;
    const formattedVersion = version ? (/^v/gi.test(version) ? version : `v${version}`) : '';

    /**
     * Filtering
     */

    const [filterValue, setFilterValue] = useState('');

    function handleOnFilter() {}

    /**
     * Rendering
     */

    function LinksRenderer(links?: PartialOrNull<LinkAPI>[] | null, level?: number) {
      return (
        <>
          {links?.map((link, id) => {
            const linkActive = isPathActive({
              path: link?.page?.slug,
              pathname: activePathname,
            });

            return (
              <SidebarDocsDesktopItem
                key={id}
                active={linkActive.match && linkActive.exact}
                style={{
                  // @ts-ignore
                  '--sidebar-docs-desktop-item-icon': level && level >= 1 ? `16px` : '0px',
                }}
                level={level !== undefined ? (level as 0) : 0}
                AsElement={
                  <GatsbyLink
                    noStyles={true}
                    to={`${link?.page?.slug || '/'}${isScrollSticky ? '#main-docs' : ''}`}
                  />
                }
              >
                {link?.label || ' '}
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
        // only consider the subnav path without the base one
        const subNavPath = getPathParts({ path: subNav.path }).filter(
          (part) => !baseNavigationPathParts.find((basePart) => basePart === part)
        );
        const subNavPathOnly = subNavPath[0] || '/';
        // split the pathname and consider the first parent
        const pathnameParent = pathnameParts.find((part) => subNavPath[0]) || '/';
        const subNavOpened = isPathActive({
          path: subNavPathOnly,
          pathname: pathnameParent,
        });

        return (
          <Stack key={subNavIndex} gap={[`0px`]}>
            {subNav.label ? (
              <SidebarDocsDesktopGroup
                label={subNav.label}
                isOpen={subNavOpened.exact}
                pathname={activePathname}
              >
                {LinksRenderer(links as LinkAPI[], 1)}
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
          <Cluster gap={[cssTheme.sizing.var.x1]}>
            {/* Title */}
            <Label variant={LABEL_SIZE.medium}>Documentation</Label>
            {/* Version */}
            <Paragraph variant={PARAGRAPH_SIZE.xSmall} variantLevel={Variant.secondary}>
              {formattedVersion}
            </Paragraph>
          </Cluster>

          <Hr />

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
            {LinksRenderer(sidebarNavigation?.links as LinkAPI[], 0)}
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
        </div>
      </SidebarBase>
    );
  }
);
