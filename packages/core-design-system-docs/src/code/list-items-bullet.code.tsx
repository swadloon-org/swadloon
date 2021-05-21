import { ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ListItemsBullet: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack as={'ul'} gap={[cssTheme.sizing.var.x2]}>
        <ListItem></ListItem>

        <ListItem></ListItem>

        <ListItem></ListItem>
      </Stack>
    </>
  );
};
