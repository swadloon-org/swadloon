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
  MenuSeparator,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import { LinkAPI, NavComponent } from '@newrade/core-website-api';
import React from 'react';
import { useStyles } from 'react-treat';
import { useI18next } from '../i18next/use-i18next.hook';
import { LinkRenderer } from '../links/link-renderer';
import { NavbarBase } from './navbar-base';
import * as styleRefs from './navbar-standard.treat';
import { NavbarProps } from './navbar.props';

type Props = NavbarProps & {};

export const NavbarStandard = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      navbar,
      HomeLink,
      currentLanguage,
      languages,
      onChangeLang,
      onClickMenuButton,
      ...props
    },
    ref
  ) => {
    const styles = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();

    /**
     * Languages
     */
    const { t, getAlternativeLang } = useI18next();
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

    return (
      <NavbarBase navbar={navbar} ref={ref} contentClassName={styles.content} {...commonProps}>
        {/* Mobile */}

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
          padding={[cssTheme.sizing.var.x2, 0]}
          AsElement={HomeLink}
        >
          <Logo name={LOGO.SYMBOL} className={styles.logo}></Logo>
        </BoxV2>

        {/* Language link */}
        {alternativeLanguage && onChangeLang ? (
          <Link
            className={styles.lang}
            onClick={(event: React.MouseEvent) => onChangeLang(alternativeLanguage.lang)}
          >
            {alternativeLanguage.label}
          </Link>
        ) : null}

        {/*
         * Desktop
         */}

        {/* Standard logo & link */}
        <BoxV2
          draggable={false}
          aria-label={'Home'}
          className={styles.logoDesktopWrapper}
          justifyContent={['center']}
          padding={[cssTheme.sizing.var.x2, 0]}
          AsElement={HomeLink}
        >
          <Logo name={LOGO.STANDARD} className={styles.logoDesktop}></Logo>
        </BoxV2>

        <div className={styles.navLinksDesktop}>
          {navbarNavigation?.subNavigation?.map((subNav, subNavIndex) => {
            if (!subNav) {
              return null;
            }

            const links = subNav.links;

            return (
              <Cluster
                key={subNavIndex}
                gap={[cssTheme.sizing.var.x4, cssTheme.sizing.var.x4, cssTheme.sizing.var.x3]}
              >
                <Cluster
                  key={subNavIndex}
                  gap={[cssTheme.sizing.var.x4, cssTheme.sizing.var.x4, cssTheme.sizing.var.x3]}
                >
                  {links?.map((link, id) => {
                    return <LinkRenderer key={id} link={link as LinkAPI}></LinkRenderer>;
                  })}
                </Cluster>
              </Cluster>
            );
          })}

          <MenuSeparator />

          <Button
            aria-label={'Search'}
            size={ButtonSize.xSmall}
            variant={Variant.tertiary}
            Icon={<IconComp name={ICON.SEARCH} />}
            icon={ButtonIcon.icon}
            // onClick={onClickMenuButton}
          ></Button>

          {/* Language link */}
          {alternativeLanguage && onChangeLang ? (
            <Link
              variantSize={PARAGRAPH_SIZE.small}
              className={styles.langDesktop}
              onClick={(event: React.MouseEvent) => onChangeLang(alternativeLanguage.lang)}
            >
              {alternativeLanguage.label}
            </Link>
          ) : null}
        </div>
      </NavbarBase>
    );
  }
);
