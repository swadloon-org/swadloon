import React from 'react';
import { Button, defaultTheme, getCSSColor } from '@newrade/core-react-ui';
import { Provider, Button as ReakitButton } from 'reakit';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

type Props = {};

const DesignPage: React.FC<Props> = (props) => {
  return (
    <div>
      <nav>Navigation</nav>
      <Provider>
        <ReakitButton>Button</ReakitButton>
      </Provider>
      <TreatProvider theme={light}>
        <Button>hey</Button>
        <code>
          <pre>{JSON.stringify(defaultTheme?.colors?.primary, null, 2)}</pre>
        </code>
      </TreatProvider>
      <code>
        <pre>
          {JSON.stringify(
            getCSSColor({
              h: 222,
              s: 20,
              l: 50,
            }),
            null,
            2
          )}
        </pre>
      </code>
    </div>
  );
};

export default DesignPage;
