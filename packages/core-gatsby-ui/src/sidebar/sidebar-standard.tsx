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
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import React from 'react';
import { useStyles } from 'react-treat';
import { GatsbyLink } from '../links/gatsby-link';
import { SidebarBase } from './sidebar-base';
import * as styleRefs from './sidebar-standard.treat';
import { SidebarProps } from './sidebar.props';

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
                    <SidebarItem
                      key={id}
                      active={link?.page?.slug === activePathname}
                      AsElement={<GatsbyLink to={link?.page?.slug} noStyles={true} />}
                    >
                      {link?.label}
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
          <Link
            variantSize={PARAGRAPH_SIZE.small}
            className={styles.lang}
            AsElement={<GatsbyLink to={'/fr/'} />}
          >
            FR
          </Link>

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
