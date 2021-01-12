import { Main, MainWrapper, NavBar, SideBar, Link, NavItem, Label } from '@newrade/core-react-ui';
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
  const navItems = useDesignSystemNavItems();
  return (
    <MainWrapper>
      <NavBar DesktopSvgLogo={<Logo height={'80%'} />} MobileSvgLogo={<Logo />} maxWidth={'100%'}></NavBar>
      {navItems ? (
        <SideBar>
          {navItems.map((item, index) => (
            <NavItem key={index} AsElement={<GatsbyLink to={item.path} />}>
              <Label>{item.name}</Label>
            </NavItem>
          ))}
        </SideBar>
      ) : null}
      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});
