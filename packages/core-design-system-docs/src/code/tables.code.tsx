import React from 'react';

import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
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
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Jim</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>00001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Barb</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>0021001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Jim</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>00001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Barb</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>0021001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.xSmall}>Red</TableCell>
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
          <TableCell size={PARAGRAPH_SIZE.medium}>Jim</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>00001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.medium}>Barb</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>0021001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.medium}>Jim</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>00001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.medium}>Barb</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>0021001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.medium}>Red</TableCell>
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
          <TableCell size={PARAGRAPH_SIZE.large}>Jim</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>00001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.large}>Barb</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>0021001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>Red</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.large}>Jim</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>00001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>Blue</TableCell>
        </TableRow>
        <TableRow>
          <TableCell size={PARAGRAPH_SIZE.large}>Barb</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>0021001</TableCell>
          <TableCell size={PARAGRAPH_SIZE.large}>Red</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
