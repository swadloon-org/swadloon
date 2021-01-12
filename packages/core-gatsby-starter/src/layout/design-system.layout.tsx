import {
  Main,
  MainWrapper,
  NavBar,
  SideBar,
  Link,
  NavItem,
  Label,
  NavItemGroup,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './design-system.layout.treat';
import { DesignSystemLayoutPageQuery } from '../../types/graphql-types';
import { title } from 'case';
import { GatsbyLink } from '@newrade/core-gatsby-ui';
import Logo from '../images/logo.svg';
import { useDesignSystemNavItems } from '../hooks/use-design-system-nav-items.hook';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const LayoutDesignSystem = React.memo<LayoutProps>((props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const navItems = useDesignSystemNavItems();
  const navItemsByDirName = new Set(navItems.map((item) => item.dirName));
  return (
    <MainWrapper>
      <NavBar
        DesktopSvgLogo={<Logo height={'70%'} />}
        MobileSvgLogo={<Logo height={'70%'} />}
        maxWidth={'100%'}
      ></NavBar>

      {navItems ? (
        <SideBar>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            {[...navItemsByDirName].map((dirName, index) => {
              return (
                <Stack key={index} gap={[cssTheme.sizing.var.x2]}>
                  {dirName === '' ? (
                    <NavItemGroup>Docs</NavItemGroup>
                  ) : (
                    <NavItemGroup>{title(dirName || '')}</NavItemGroup>
                  )}
                  <Stack>
                    {navItems
                      .filter((item) => item.dirName === dirName)
                      .map((item, itemIndex) => {
                        return (
                          <NavItem
                            key={itemIndex}
                            active={item.path === props.location?.pathname}
                            AsElement={<GatsbyLink to={item.path} />}
                          >
                            {item.name}
                          </NavItem>
                        );
                      })}
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </SideBar>
      ) : null}

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});
