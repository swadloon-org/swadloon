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
  IconComp,
  Link,
  Logo,
  Paragraph,
  SidebarItem,
  SidebarItemGroup,
  Stack,
  useCommonProps,
} from '@newrade/core-react-ui';
import { LinkAPI } from '@newrade/core-website-api';

import { useI18next } from '../i18next/use-i18next.hook';
import { LinkRenderer } from '../links/link-renderer';

import { SidebarProps } from './sidebar.props';
import { SidebarBase } from './sidebar-base';

type Props = SidebarProps & {};

export const SidebarStandard = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      sidebar,
      HomeLink,
      onClickMenuButton,
      onClickBackdrop,
      activePathname,
      currentLanguage,
      languages,
      onChangeLang,
      ...props
    },
    ref
  ) => {
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
    const copyright = sidebar?.companyInfo?.copyright;
    const version = sidebar?.version;

    return (
      <SidebarBase
        sidebar={sidebar}
        ref={ref}
        contentClassName={styles.content}
        onClickBackdrop={onClickBackdrop}
        {...commonProps}
      >
        {/* Header */}
        <div className={styles.header}>
          {/* Centered square logo & link */}
          <BoxV2
            aria-label={'Close Sidemenu'}
            draggable={false}
            justifyContent={['center']}
            className={styles.logoWrapper}
            AsElement={HomeLink}
          >
            <Logo name={LOGO.STANDARD} className={styles.logo}></Logo>
          </BoxV2>

          {/* Close button */}
          <Button
            aria-pressed={true}
            aria-label={'Menu'}
            size={ButtonSize.large}
            variant={Variant.tertiary}
            collapsePadding={'left'}
            Icon={<IconComp name={ICON.CLOSE} />}
            icon={ButtonIcon.icon}
            onClick={onClickMenuButton}
          ></Button>
        </div>

        {/* Navigation items */}
        <div className={styles.items}>
          {sidebarNavigation?.subNavigation?.map((subNav, subNavIndex) => {
            if (!subNav) {
              return null;
            }

            const links = subNav.links;

            return (
              <Stack key={subNavIndex} gap={[`0px`]}>
                {subNav.label ? <SidebarItemGroup>{subNav.label}</SidebarItemGroup> : null}

                {links?.map((link, id) => {
                  return (
                    <SidebarItem key={id} active={link?.page?.slug === activePathname}>
                      <LinkRenderer key={id} link={link as LinkAPI}></LinkRenderer>
                    </SidebarItem>
                  );
                })}
              </Stack>
            );
          })}
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          {/* Language link */}
          {alternativeLanguage?.lang && onChangeLang ? (
            <Link
              variantSize={PARAGRAPH_SIZE.small}
              className={styles.lang}
              onClick={(event: React.MouseEvent) =>
                onChangeLang(alternativeLanguage.lang as SITE_LANGUAGES)
              }
            >
              {alternativeLanguage.label}
            </Link>
          ) : null}

          {/* Copyright and Version */}
          <Paragraph variant={PARAGRAPH_SIZE.xSmall} variantLevel={Variant.secondary}>
            {copyright}
            {version ? ` — ${version}` : ''}
          </Paragraph>
        </div>
      </SidebarBase>
    );
  }
);
