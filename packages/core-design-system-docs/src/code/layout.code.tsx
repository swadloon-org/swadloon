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

export const ContentMargins: React.FC<Props> = (props) => {
  const margins = keys(layoutVars.contentMargins);

  if (!margins.length) {
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
        {margins.map((margin, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`name-${index}`}>{margin}</TableCell>
              <TableCell key={`value-${index}`}>
                {getCSSVarValue(layoutVars.contentMargins[margin])}
              </TableCell>
              <TableCell key={`var-${index}`}>{layoutVars.contentMargins[margin]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const ContentWidths: React.FC<Props> = (props) => {
  const widths = keys(layoutVars.contentWidth);

  if (!widths.length) {
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
        {widths.map((width, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`name-${index}`}>{width}</TableCell>
              <TableCell key={`value-${index}`}>
                {getCSSVarValue(layoutVars.contentWidth[width])}
              </TableCell>
              <TableCell key={`var-${index}`}>{layoutVars.contentWidth[width]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const SidebarWidths: React.FC<Props> = (props) => {
  const widths = keys(layoutVars.sidebarWidth);

  if (!widths.length) {
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
        {widths.map((width, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`name-${index}`}>{width}</TableCell>
              <TableCell key={`value-${index}`}>
                {getCSSVarValue(layoutVars.sidebarWidth[width])}
              </TableCell>
              <TableCell key={`var-${index}`}>{layoutVars.sidebarWidth[width]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const NavbarHeights: React.FC<Props> = (props) => {
  const heights = keys(layoutVars.navbarHeight);

  if (!heights.length) {
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
        {heights.map((height, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`name-${index}`}>{height}</TableCell>
              <TableCell key={`value-${index}`}>
                {getCSSVarValue(layoutVars.navbarHeight[height])}
              </TableCell>
              <TableCell key={`var-${index}`}>{layoutVars.navbarHeight[height]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const ZIndexes: React.FC<Props> = (props) => {
  const zIndexes = keys(layoutVars.zIndex);

  if (!zIndexes.length) {
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
        {zIndexes.map((z, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`name-${index}`}>{z}</TableCell>
              <TableCell key={`value-${index}`}>{getCSSVarValue(layoutVars.zIndex[z])}</TableCell>
              <TableCell key={`var-${index}`}>{layoutVars.zIndex[z]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
