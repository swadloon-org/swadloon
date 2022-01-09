import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
} from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const Breakpoints: React.FC<Props> = (props) => {
  const breakpoints = keys(cssTheme.layout.breakpoints);

  if (!breakpoints.length) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>Value</TableCellHeader>
        </TableRow>
      </TableHeader>

      <TableBody>
        {breakpoints.map((breakpoint, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={index}>{breakpoint}</TableCell>
              <TableCell key={index}>{cssTheme.layout.breakpoints[breakpoint]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
