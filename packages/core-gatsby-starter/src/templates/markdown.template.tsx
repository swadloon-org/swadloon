import { Grid } from '@newrade/core-react-ui';
import React from 'react';
import { ProjectPageProps } from '../props/page.props';

const Page: React.FC<ProjectPageProps> = (props) => {
  return <Grid gap="20px">{props.children}</Grid>;
};

export default Page;
