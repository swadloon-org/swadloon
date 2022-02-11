import React from 'react';

import { Switcher } from '@newrade/core-react-ui';
import { Placeholder } from '@newrade/core-react-ui/doc-components';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const LayoutSwitcher: React.FC<Props> = (props) => {
  return (
    <>
      <Switcher gap={[sizeVars.x2]} col={3}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </Switcher>
    </>
  );
};
