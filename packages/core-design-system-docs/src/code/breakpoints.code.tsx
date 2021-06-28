import {
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/lib/utilities';
import React from 'react';
import { BREAKPOINT } from '../../../core-design-system/src/foundations/layout';

type Props = {};

export const Breakpoints: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  const breakpointsGroup = [
    'mobileXSmall',
    'mobileSmall',
    'mobileMedium',
    'tabletPortrait',
    'tabletLandscape',
    'desktopSmall',
    'desktopMedium',
    'desktopLarge',
    'desktopXLarge',
  ];
  {
    breakpointsGroup.map((value) => {
      const reg = new RegExp(value, 'gi');
      const breakpointsName = keys(cssTheme.layout.breakpoints).filter((key) => key.match(reg));

      if (!breakpointsGroup.length) {
        return null;
      }

      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableCellHeader>Name</TableCellHeader>
              <TableCellHeader>Value</TableCellHeader>
              <TableCellHeader>Breakpoints</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {breakpointsName.map((name, index) => {
              return (
                <TableRow>
                  {keys(cssTheme.layout.breakpoints).map((breakpoints, index) => (
                    <TableCell key={index} styles={BREAKPOINT[breakpoints]}></TableCell>
                  ))}
                  <TableCell key={value}></TableCell>
                  <TableCell key={name}></TableCell>
                  <TableCell key={index}></TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell>Lorem ipsum</TableCell>
              <TableCell>Lorem ipsum</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    });
  }
};
