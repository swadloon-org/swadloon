import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { CodeOutline, ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { IoMailOutline } from '@react-icons/all-files/io5/IoMailOutline';
import { IoPhonePortraitOutline } from '@react-icons/all-files/io5/IoPhonePortraitOutline';
import React from 'react';
import { lorenipsum } from '../../../utils/loren-ipsum';

type Props = {};

export const ListItemsMultiLine: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Stack as={'ul'} gap={[cssTheme.sizing.var.x2]}>
        <ListItem variantIcon={'icon'} Icon={<IoMailOutline />} variantSize={PARAGRAPH_SIZE.large}>
          {lorenipsum}
        </ListItem>

        <ListItem variantSize={PARAGRAPH_SIZE.medium}>
          {lorenipsum} <br /> {lorenipsum}
        </ListItem>

        <ListItem variantIcon={'icon'} Icon={<IoMailOutline />}>
          {lorenipsum}
        </ListItem>

        <ListItem variantIcon={'icon'} Icon={<IoPhonePortraitOutline />} variantSize={PARAGRAPH_SIZE.xSmall}>
          {lorenipsum}
        </ListItem>
      </Stack>
    </CodeOutline>
  );
};
