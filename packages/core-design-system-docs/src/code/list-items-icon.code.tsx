import React from 'react';

import { ICON } from '@newrade/core-design-system';
import { ListItemV2, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ListItemsIcon: React.FC<Props> = (props) => {
  return (
    <>
      <Stack as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2 Icon={ICON.MAIL}>info@website.ca</ListItemV2>
        <ListItemV2 Icon={ICON.MAIL}>444-555-2222</ListItemV2>
      </Stack>
    </>
  );
};
