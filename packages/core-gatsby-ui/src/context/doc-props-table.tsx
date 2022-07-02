import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { CodeMarkupType, HEADING, Variant } from '@newrade/core-design-system';
import { MarkdownTemplateQuery } from '@newrade/core-gatsb-config/config';
import {
  Heading,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
} from '@newrade/core-react-ui';
import { Code } from '@newrade/core-react-ui/code';
import { MarkdownCSS } from '@newrade/core-react-ui/markdown';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { useI18next } from '../i18next/use-i18next.hook.js';

/**
 * @name DocPropsTableProps
 */
type Props = {
  props: {
    data: MarkdownTemplateQuery;
  };
};

/**
 * Render jsdoc extracted data `(@name, @prop, @param, ...)` in a tabular format
 */
export function DocPropsTable({ props }: Props) {
  const { t } = useI18next();

  return (
    <Stack gap={[sizeVars.x4]}>
      {props.data.jsdoc.nodes.map((jsDocNode, jsDocNodeIndex) => {
        const name = jsDocNode?.name;
        const description = jsDocNode?.description?.childMdx?.body;
        const typeValue = jsDocNode?.type?.name || jsDocNode?.type?.expression.name;
        const type = typeValue ? (
          <Heading
            variant={HEADING.h3}
            as={'span'}
            variantLevel={Variant.tertiary}
            style={{ display: 'inline-block' }}
          >
            {' - '}
            {'{'}
            {typeValue}
            {'}'}
          </Heading>
        ) : null;
        const memberof = jsDocNode?.memberof;
        const properties = jsDocNode?.properties;
        const params = jsDocNode?.params;
        const members = jsDocNode?.members;
        const staticMembers = jsDocNode?.members?.static;
        const topAndNestedProperties = [...(properties || []), ...(staticMembers || [])];

        return (
          <Stack key={jsDocNodeIndex} gap={[sizeVars.x3]}>
            <Heading variant={HEADING.h3}>
              {name} {type}
            </Heading>
            {description ? (
              <MarkdownCSS>
                <MDXRenderer>{description as string}</MDXRenderer>
              </MarkdownCSS>
            ) : null}

            {topAndNestedProperties.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCellHeader style={{ width: '35%' }}>Prop</TableCellHeader>
                    <TableCellHeader style={{ width: '35%' }}>Type</TableCellHeader>
                    <TableCellHeader style={{ width: '15%' }}>Optional</TableCellHeader>
                    <TableCellHeader style={{ width: '15%' }}>Default</TableCellHeader>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topAndNestedProperties.map((property, propertyIndex) => {
                    const propertyTypeValue =
                      property?.type?.name || property?.type?.expression.name;

                    return (
                      <TableRow key={propertyIndex}>
                        <TableCell>
                          <Code kind={CodeMarkupType.AttrName}>{property?.name}</Code>
                        </TableCell>
                        <TableCell>
                          <Code kind={CodeMarkupType.Keyword}>{propertyTypeValue || '-'}</Code>
                        </TableCell>
                        <TableCell>{'-'}</TableCell>
                        <TableCell>{'-'}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : null}

            {params?.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCellHeader style={{ width: '35%' }}>Param</TableCellHeader>
                    <TableCellHeader style={{ width: '35%' }}>Type</TableCellHeader>
                    <TableCellHeader style={{ width: '15%' }}>Optional</TableCellHeader>
                    <TableCellHeader style={{ width: '15%' }}>Default</TableCellHeader>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {params?.map((param, paramIndex) => {
                    const paramTypeValue = param?.type?.name || param?.type?.expression.name;

                    return (
                      <TableRow key={paramIndex}>
                        <TableCell>
                          <Code kind={CodeMarkupType.AttrName}>{param?.name}</Code>{' '}
                        </TableCell>
                        <TableCell>
                          <Code kind={CodeMarkupType.Keyword}>{paramTypeValue || '-'}</Code>
                        </TableCell>
                        <TableCell>{'-'}</TableCell>
                        <TableCell>{'-'}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : null}
          </Stack>
        );
      })}
    </Stack>
  );
}
