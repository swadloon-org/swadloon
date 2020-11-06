import React from 'react';
import { LayoutCenter } from '@newrade/core-react-ui/';
import * as styleRefs from './index.treat';
import { useStyles } from 'react-treat';

const IndexPage: React.FC<{}> = (props) => {
  return <Index {...props} />;
};

export const Index: React.FC = () => {
  return (
    <div>
      <LayoutCenter className={'test'}>
        <div>Hello World !</div>
      </LayoutCenter>
    </div>
  );
};

export default IndexPage;
