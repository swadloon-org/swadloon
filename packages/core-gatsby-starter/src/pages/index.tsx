import { Stack } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

const IndexPage: React.FC<{}> = (props) => {
  return <Index {...props} />;
};

export const Index: React.FC = () => {
  return (
    <div>
      <TreatProvider theme={light}>
        <Stack gap={'20px'} padding={'20px'}>
          <Stack gap={'20px'} padding={'20px'}>
            <div>hello</div>
          </Stack>

          <Stack gap={'20px'} padding={'20px'}>
            <div>hello</div>
          </Stack>
        </Stack>
      </TreatProvider>
    </div>
  );
};

export default IndexPage;
