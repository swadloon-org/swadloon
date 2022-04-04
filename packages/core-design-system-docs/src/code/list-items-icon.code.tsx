import React from 'react';

import { ICON } from '@newrade/core-design-system';
import { ListItems, ListItemV2, Stack } from '@newrade/core-react-ui';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ListItemsIcon: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x4]}>
      <ListItems as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2>Normal bullet</ListItemV2>
        <ListItemV2>Normal bullet</ListItemV2>
        <ListItemV2>Normal bullet</ListItemV2>
        <ListItemV2>Normal bullet</ListItemV2>
      </ListItems>

      <ListItems as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2 data-custom-bullet={'✅'}>Custom bullet</ListItemV2>
        <ListItemV2 data-custom-bullet={'✅'}>Custom bullet</ListItemV2>
        <ListItemV2 data-custom-bullet={'✅'}>Custom bullet</ListItemV2>
        <ListItemV2 data-custom-bullet={'✅'}>Custom bullet</ListItemV2>
      </ListItems>

      <ListItems as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2 Icon={ICON.MAIL}>info@website.ca</ListItemV2>
        <ListItemV2 Icon={ICON.CALL}>444-555-2222</ListItemV2>
        <ListItemV2 Icon={ICON.CALL}>444-555-2222</ListItemV2>
        <ListItemV2 Icon={ICON.CALL}>444-555-2222</ListItemV2>
      </ListItems>

      <ListItems as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2
          IconSVG={
            <svg preserveAspectRatio="xMidYMid meet" width={32} height={32}>
              <circle r={16} cx={16} cy={16} fill={colorVars.colors.primary[700]}></circle>
            </svg>
          }
        >
          SVG or React Node
        </ListItemV2>
        <ListItemV2
          IconSVG={
            <svg preserveAspectRatio="xMidYMid meet" width={32} height={32}>
              <circle r={16} cx={16} cy={16} fill={colorVars.colors.primary[700]}></circle>
            </svg>
          }
        >
          SVG or React Node
        </ListItemV2>
        <ListItemV2
          IconSVG={
            <svg preserveAspectRatio="xMidYMid meet" width={32} height={32}>
              <circle r={16} cx={16} cy={16} fill={colorVars.colors.primary[700]}></circle>
            </svg>
          }
        >
          SVG or React Node
        </ListItemV2>
        <ListItemV2
          IconSVG={
            <svg preserveAspectRatio="xMidYMid meet" width={32} height={32}>
              <circle r={16} cx={16} cy={16} fill={colorVars.colors.primary[700]}></circle>
            </svg>
          }
        >
          SVG or React Node
        </ListItemV2>
      </ListItems>
    </Stack>
  );
};
