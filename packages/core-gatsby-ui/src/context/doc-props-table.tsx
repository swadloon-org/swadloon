import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { HEADING, Variant } from '@newrade/core-design-system';
import { MarkdownTemplateQuery } from '@newrade/core-gatsb-config/config';
import {
  Heading,
  Label,
  Paragraph,
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

import { useI18next } from '../i18next/use-i18next.hook';

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
                  <TableCellHeader>Prop</TableCellHeader>
                  <TableCellHeader>Type</TableCellHeader>
                  <TableCellHeader>Optional</TableCellHeader>
                  <TableCellHeader>Default</TableCellHeader>
                </TableHeader>
                <TableBody>
                  {topAndNestedProperties.map((property, propertyIndex) => {
                    const propertyTypeValue =
                      property?.type?.name || property?.type?.expression.name;

                    return (
                      <TableRow key={propertyIndex}>
                        <TableCell>
                          <Code>{property?.name}</Code>
                        </TableCell>
                        <TableCell>{propertyTypeValue || '-'}</TableCell>
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
                  <TableCellHeader>Param</TableCellHeader>
                  <TableCellHeader>Type</TableCellHeader>
                  <TableCellHeader>Optional</TableCellHeader>
                  <TableCellHeader>Default</TableCellHeader>
                </TableHeader>
                <TableBody>
                  {params?.map((param, paramIndex) => {
                    const paramTypeValue = param?.type?.name || param?.type?.expression.name;

                    return (
                      <TableRow key={paramIndex}>
                        <TableCell>
                          <Code>{param?.name}</Code>{' '}
                        </TableCell>
                        <TableCell>{paramTypeValue || '-'}</TableCell>
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
