import React from 'react';
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5';

import { ListItemV2, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ListItemsIcon: React.FC<Props> = (props) => {
  return (
    <>
      <Stack as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2 IconSVG={<IoMailOutline />}>info@website.ca</ListItemV2>
        <ListItemV2 IconSVG={<IoPhonePortraitOutline />}>444-555-2222</ListItemV2>
      </Stack>
    </>
  );
};
