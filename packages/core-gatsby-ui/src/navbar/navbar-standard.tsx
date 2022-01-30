import React from 'react';

import { SITE_LANGUAGES } from '@newrade/core-common';
import {
  ButtonIcon,
  ButtonSize,
  ICON,
  LOGO,
  PARAGRAPH_SIZE,
  Variant,
} from '@newrade/core-design-system';
import {
  BoxV2,
  Button,
  Cluster,
  IconComp,
  Link,
  Logo,
  NavbarSeparatorItem,
  Tag,
  useCommonProps,
} from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { LinkAPI, NavComponent } from '@newrade/core-website-api';

import { useI18next } from '../i18next/use-i18next.hook';
import { LinkRenderer } from '../links/link-renderer';

import { NavbarProps } from './navbar.props';
import { NavbarBase } from './navbar-base';

import * as styles from './navbar-standard.css';

type Props = NavbarProps & {};

/**
 * Preconfigured navbar with the essentials.
 *
 * Renders data from the passed navbar object.
 */
export const NavbarStandard = React.forwardRef<any, Props>(function NavbarStandard(
  {
    id,
    style,
    className,
    navbar,
    HomeLink,
    tagText,
    currentLanguage,
    languages,
    onChangeLang,
    onClickMenuButton,
    ...props
  },
  ref
) {
  /**
   * Languages
   */

  const { t, getAlternativeLang, changeLanguage } = useI18next();
  const alternativeLanguage = getAlternativeLang();

  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.base],
    ...props,
  });

  /**
   * Navigation
   */

  const navigation = navbar?.navigation;
  const navbarNavigation = navigation?.component === NavComponent.navbar ? navigation : null;

  function renderLinks(links: LinkAPI[]) {
    return (
      <>
        {links?.map((link, id) => {
          return <LinkRenderer key={id} link={link as LinkAPI}></LinkRenderer>;
        })}
      </>
    );
  }

  return (
    <NavbarBase navbar={navbar} ref={ref} contentClassName={styles.content} {...commonProps}>
      {/*
       * Mobile
       */}

      {/* Menu button */}
      <Button
        aria-pressed={true}
        aria-label={'Menu'}
        className={styles.button}
        size={ButtonSize.large}
        variant={Variant.tertiary}
        collapsePadding={'left'}
        Icon={<IconComp name={ICON.MENU} />}
        icon={ButtonIcon.icon}
        onClick={onClickMenuButton}
      ></Button>

      {/* Centered square logo & link */}
      <BoxV2
        aria-label={'Home'}
        draggable={false}
        justifyContent={['center']}
        className={styles.logoWrapper}
        padding={[sizeVars.x2, 0]}
        AsElement={HomeLink}
      >
        <Logo name={LOGO.SYMBOL} className={styles.logo}></Logo>
      </BoxV2>

      {/* Language link */}
      {alternativeLanguage?.lang && onChangeLang ? (
        <Link
          className={styles.lang}
          onClick={(event: React.MouseEvent) =>
            onChangeLang(alternativeLanguage.lang as SITE_LANGUAGES)
          }
        >
          {alternativeLanguage.label}
        </Link>
      ) : null}

      {/*
       * Desktop
       */}

      {/* Standard logo & link */}
      <Cluster alignItems={['center']} gap={[sizeVars.x2]} className={styles.logoDesktopWrapper}>
        <BoxV2
          draggable={false}
          aria-label={'Home'}
          alignItems={['center']}
          justifyContent={['center']}
          padding={[sizeVars.x2, 0]}
          AsElement={HomeLink}
        >
          {/* Logo as a link to the home page */}
          <Logo name={LOGO.STANDARD} className={styles.logoDesktop}></Logo>
        </BoxV2>

        {/* Optional tag next to the logo */}
        {tagText ? <Tag>{tagText}</Tag> : null}
      </Cluster>

      <div className={styles.navLinksDesktop}>
        {navbarNavigation?.links ? renderLinks(navbarNavigation?.links as LinkAPI[]) : null}
        {navbarNavigation?.subNavigation?.map((subNav, subNavIndex) => {
          if (!subNav) {
            return null;
          }

          const links = subNav.links;

          return (
            <Cluster key={subNavIndex} gap={[sizeVars.x4, sizeVars.x4, sizeVars.x3]}>
              <Cluster key={subNavIndex} gap={[sizeVars.x4, sizeVars.x4, sizeVars.x3]}>
                {renderLinks(links as LinkAPI[])}
              </Cluster>
            </Cluster>
          );
        })}

        <NavbarSeparatorItem />

        <Button
          aria-label={'Search'}
          size={ButtonSize.xSmall}
          variant={Variant.tertiary}
          Icon={<IconComp name={ICON.SEARCH} />}
          icon={ButtonIcon.icon}
          // onClick={onClickMenuButton}
        ></Button>

        {/* Language link */}
        {alternativeLanguage?.lang && onChangeLang ? (
          <Link
            size={PARAGRAPH_SIZE.small}
            className={styles.langDesktop}
            onClick={(event: React.MouseEvent) =>
              onChangeLang(alternativeLanguage.lang as SITE_LANGUAGES)
            }
          >
            {alternativeLanguage.label}
          </Link>
        ) : null}
      </div>
    </NavbarBase>
  );
});
