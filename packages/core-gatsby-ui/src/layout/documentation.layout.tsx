import { GatsbyLink, useDocsNavigation } from '@newrade/core-gatsby-ui/src';
import {
  Label,
  Main,
  MainWrapper,
  NavBar,
  NavItem,
  NavItemGroup,
  SideBar,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import { useIsSSR } from 'react-aria';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
};

export const LayoutDocumentation = React.memo<LayoutProps>(({ MobileSvgLogo, DesktopSvgLogo, ...props }) => {
  const { cssTheme } = useTreatTheme();

  /**
   * React Aria
   */
  const isSSR = useIsSSR();

  /**
   * Retrieve
   */
  const navigation = useDocsNavigation();

  return (
    <MainWrapper>
      <NavBar
        DesktopSvgLogo={DesktopSvgLogo}
        MobileSvgLogo={MobileSvgLogo}
        maxWidth={'100%'}
        MenuLinks={
          <>
            <Label>Design System</Label>
            <Label>Docs</Label>
            <Label>Core Docs</Label>
          </>
        }
      ></NavBar>

      {navigation && !isSSR ? (
        <SideBar>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            {navigation.items.map((item, index) => {
              return (
                <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                  {item.items?.length ? (
                    <NavItemGroup>{title(item.displayName || item.name || 'Docs')}</NavItemGroup>
                  ) : (
                    <NavItem
                      active={item.path === props.location?.pathname}
                      AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                    >
                      {item.name || item.displayName}
                    </NavItem>
                  )}
                  {item.items?.length ? (
                    <Stack>
                      {item.items?.map((item, itemIndex) => {
                        return (
                          <NavItem
                            key={itemIndex}
                            active={item.path === props.location?.pathname}
                            AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                          >
                            {item.name || item.displayName}
                          </NavItem>
                        );
                      })}
                    </Stack>
                  ) : null}
                </Stack>
              );
            })}
          </Stack>
        </SideBar>
      ) : null}

      <Main navbarPadding={true} minHeight={true}>
        {props.children}
      </Main>
    </MainWrapper>
  );
});
