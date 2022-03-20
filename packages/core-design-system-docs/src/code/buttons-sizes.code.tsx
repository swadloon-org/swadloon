import React from 'react';

import { ButtonSize } from '@newrade/core-design-system';
import { Button, Cluster, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ButtonsSizes: React.FC<Props> = (props) => {
  return (
    <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]}>
      <Stack gap={[sizeVars.x2]}>
        <Button size={ButtonSize.large}>Large</Button>
        <Button size={ButtonSize.medium}>Medium</Button>
        <Button size={ButtonSize.small}>Small</Button>
        <Button size={ButtonSize.xSmall}>XSmall</Button>
      </Stack>
      <Stack gap={[sizeVars.x2]}>
        <Button style={{ width: '100%' }} size={ButtonSize.large}>
          Large
        </Button>
        <Button style={{ width: '100%' }} size={ButtonSize.medium}>
          Medium
        </Button>
        <Button style={{ width: '100%' }} size={ButtonSize.small}>
          Small
        </Button>
        <Button style={{ width: '100%' }} size={ButtonSize.xSmall}>
          XSmall
        </Button>
      </Stack>
    </Cluster>
  );
};
