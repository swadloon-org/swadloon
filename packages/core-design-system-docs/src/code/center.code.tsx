import React from 'react';

import { Center } from '@newrade/core-react-ui';
import { Placeholder } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const LayoutCenter: React.FC<Props> = (props) => {
  return (
    <>
      <Center>
        <Placeholder>Content</Placeholder>
      </Center>
    </>
  );
};
