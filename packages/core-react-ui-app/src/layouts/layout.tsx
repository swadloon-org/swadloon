import { Main, MainWrapper } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  return (
    <MainWrapper>
      <Main minHeight={true}>{props.children}</Main>
    </MainWrapper>
  );
};
