import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import { Button, Link, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from '../styles/index.treat';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
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

      <Link href="test" target="blank">
        test
      </Link>
    </Stack>
  );
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export default Page;
