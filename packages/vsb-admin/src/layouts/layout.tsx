import { DesktopSideBar, Main, MainWrapper, NavBar } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  return (
    <MainWrapper>
      <NavBar>hey</NavBar>
      <DesktopSideBar>Hey</DesktopSideBar>
      <Main minHeight={true} navbarPadding={true} desktopSidebarPadding={true}>
        {props.children}
      </Main>
    </MainWrapper>
  );
};
