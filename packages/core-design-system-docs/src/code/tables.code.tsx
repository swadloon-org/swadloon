import {
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const Tables: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
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
    </>
  );
};
