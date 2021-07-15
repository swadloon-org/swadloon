import { ListItems, ListItemV2, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const ListItemsBullet: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <ListItems as={'ul'} gap={[cssTheme.sizing.var.x2]}>
        <ListItemV2></ListItemV2>
        <ListItemV2></ListItemV2>
        <ListItemV2></ListItemV2>
      </ListItems>
    </>
  );
};
