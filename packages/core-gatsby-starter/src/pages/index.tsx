import { Button, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { ProjectPageProps } from '../props/page.props';
import * as styleRefs from './index.treat';

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <Stack gap={'20px'}>
      <Stack gap={'20px'}>
        <div>hello</div>
      </Stack>

      <Stack gap={'13px'}>
        <h1>Buttons</h1>
        <Button>Button</Button>
      </Stack>
    </Stack>
  );
};

const Page: React.FC<ProjectPageProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export default Page;
