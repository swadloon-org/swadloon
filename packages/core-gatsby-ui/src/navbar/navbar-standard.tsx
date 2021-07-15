import {
  ButtonIcon,
  ButtonSize,
  ICON,
  LinkIcon,
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
import { LinkType, NavComponent } from '@newrade/core-website-api';
import React from 'react';
import { useStyles } from 'react-treat';
import { GatsbyLink } from '../links/gatsby-link';
import { NavbarBase } from './navbar-base';
import * as styleRefs from './navbar-standard.treat';
import { NavbarProps } from './navbar.props';

type Props = NavbarProps & {};

export const NavbarStandard = React.forwardRef<any, Props>(
  ({ id, style, className, navbar, HomeLink, onClickMenuButton, ...props }, ref) => {
    const styles = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.base],
      ...props,
    });

    const navigation = navbar?.navigation;
    const navbarNavigation = navigation?.component === NavComponent.navbar ? navigation : null;

    return (
      <NavbarBase navbar={navbar} ref={ref} contentClassName={styles.content} {...commonProps}>
        {/* Mobile */}

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

        <Link className={styles.lang}>FR</Link>

        {/* Desktop */}

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
                    if (link?.type === LinkType.externalUrl) {
                      return (
                        <Link
                          key={id}
                          variantSize={PARAGRAPH_SIZE.small}
                          href={link?.url || ' '}
                          variantIcon={LinkIcon.right}
                          Icon={<IconComp name={ICON.OPEN}></IconComp>}
                        >
                          {link?.label || link?.url || ' '}
                        </Link>
                      );
                    }

                    return (
                      <Link
                        key={id}
                        variantSize={PARAGRAPH_SIZE.small}
                        AsElement={<GatsbyLink to={link?.page?.slug || ''} />}
                      >
                        {link?.label || ' '}
                      </Link>
                    );
                  })}
                </Cluster>
              </Cluster>
            );
          })}

          <MenuSeparator />

          <Link variantSize={PARAGRAPH_SIZE.small} className={styles.langDesktop}>
            FR
          </Link>
        </div>
      </NavbarBase>
    );
  }
);
