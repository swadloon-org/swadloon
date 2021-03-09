import { Main, MainWrapper } from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const Layout = React.memo<LayoutProps>((props) => {
  return (
    <MainWrapper>
      <Main minHeight={true}>{props.children}</Main>
    </MainWrapper>
  );
});
