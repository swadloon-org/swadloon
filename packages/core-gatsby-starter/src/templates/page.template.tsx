import { Grid } from '@newrade/core-react-ui';
import React from 'react';
import { FilePageProps } from '../props/page.props';

const Page: React.FC<FilePageProps> = (props) => {
  return <>{props.children}</>;
};

export default Page;
