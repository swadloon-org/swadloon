import { Button, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import { SrcPageTemplateProps } from '../templates/src-page.template';
import * as styleRefs from './index.treat';

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
    </Stack>
  );
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export default Page;
