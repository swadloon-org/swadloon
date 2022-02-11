import React from 'react';

import { TableCellSize } from '@newrade/core-design-system';
import {
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
} from '@newrade/core-react-ui';

type Props = {};

export const Tables: React.FC<Props> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>ID</TableCellHeader>
          <TableCellHeader>Favorite Color</TableCellHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Jim</TableCell>
          <TableCell>00001</TableCell>
          <TableCell>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Barb</TableCell>
          <TableCell>0021001</TableCell>
          <TableCell>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jim</TableCell>
          <TableCell>00001</TableCell>
          <TableCell>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Barb</TableCell>
          <TableCell>0021001</TableCell>
          <TableCell>Red</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const TablesDensityXSmall: React.FC<Props> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>ID</TableCellHeader>
          <TableCellHeader>Favorite Color</TableCellHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell size={TableCellSize.xSmall}>Jim</TableCell>
          <TableCell size={TableCellSize.xSmall}>00001</TableCell>
          <TableCell size={TableCellSize.xSmall}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.xSmall}>Barb</TableCell>
          <TableCell size={TableCellSize.xSmall}>0021001</TableCell>
          <TableCell size={TableCellSize.xSmall}>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.xSmall}>Jim</TableCell>
          <TableCell size={TableCellSize.xSmall}>00001</TableCell>
          <TableCell size={TableCellSize.xSmall}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.xSmall}>Barb</TableCell>
          <TableCell size={TableCellSize.xSmall}>0021001</TableCell>
          <TableCell size={TableCellSize.xSmall}>Red</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const TablesDensityMedium: React.FC<Props> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>ID</TableCellHeader>
          <TableCellHeader>Favorite Color</TableCellHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell size={TableCellSize.medium}>Jim</TableCell>
          <TableCell size={TableCellSize.medium}>00001</TableCell>
          <TableCell size={TableCellSize.medium}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.medium}>Barb</TableCell>
          <TableCell size={TableCellSize.medium}>0021001</TableCell>
          <TableCell size={TableCellSize.medium}>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.medium}>Jim</TableCell>
          <TableCell size={TableCellSize.medium}>00001</TableCell>
          <TableCell size={TableCellSize.medium}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.medium}>Barb</TableCell>
          <TableCell size={TableCellSize.medium}>0021001</TableCell>
          <TableCell size={TableCellSize.medium}>Red</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const TablesDensityLarge: React.FC<Props> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>ID</TableCellHeader>
          <TableCellHeader>Favorite Color</TableCellHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell size={TableCellSize.large}>Jim</TableCell>
          <TableCell size={TableCellSize.large}>00001</TableCell>
          <TableCell size={TableCellSize.large}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.large}>Barb</TableCell>
          <TableCell size={TableCellSize.large}>0021001</TableCell>
          <TableCell size={TableCellSize.large}>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.large}>Jim</TableCell>
          <TableCell size={TableCellSize.large}>00001</TableCell>
          <TableCell size={TableCellSize.large}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={TableCellSize.large}>Barb</TableCell>
          <TableCell size={TableCellSize.large}>0021001</TableCell>
          <TableCell size={TableCellSize.large}>Red</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
