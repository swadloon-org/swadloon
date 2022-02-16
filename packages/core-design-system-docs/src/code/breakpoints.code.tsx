import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
} from '@newrade/core-react-ui';
import { layoutVars } from '@newrade/core-react-ui/theme';
import { getCSSVarValue } from '@newrade/core-react-ui/utilities-browser';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const Breakpoints: React.FC<Props> = (props) => {
  const breakpoints = keys(layoutVars.breakpoints);

  if (!breakpoints.length) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>Value</TableCellHeader>
          <TableCellHeader style={{ minWidth: '280px' }}>Var</TableCellHeader>
        </TableRow>
      </TableHeader>

      <TableBody>
        {breakpoints.map((breakpoint, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`name-${index}`}>{breakpoint}</TableCell>
              <TableCell key={`value-${index}`}>
                {getCSSVarValue(layoutVars.breakpoints[breakpoint])}
              </TableCell>
              <TableCell key={`var-${index}`}>{layoutVars.breakpoints[breakpoint]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
