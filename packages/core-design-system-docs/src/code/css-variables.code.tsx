import React, { Fragment, useState } from 'react';

import { NullableTokens } from '@vanilla-extract/css/dist/declarations/src/types';

import {
  Stack,
  Tab,
  TabContent,
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  TabList,
  Tabs,
  useIsSSR,
} from '@newrade/core-react-ui';
import { CodeBlock } from '@newrade/core-react-ui/code';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { getCSSVar, keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {
  namespace: string;
  vars: NullableTokens;
  preview: 'text' | 'color' | 'raw';
};

export const CSSVariables: React.FC<Props> = React.memo(
  ({ namespace = '', vars = {}, preview = 'raw' }) => {
    const isSSR = useIsSSR();

    const [activeTabId, setActiveTabId] = useState<'list' | 'json'>('json');

    function handleSelectTab(event: React.MouseEvent<HTMLDivElement>) {
      const value = event.currentTarget.id;
      if (activeTabId !== value) {
        setActiveTabId(value as 'list' | 'json');
      }
    }

    if (isSSR) {
      return <></>;
    }

    let count = 0;
    const rows = renderVars({
      namespace,
      vars,
      preview,
    });

    return (
      <Stack gap={[sizeVars.x5]}>
        <Tabs>
          <TabList>
            <Tab id={'list'} selected={activeTabId === 'list'} onClick={handleSelectTab}>
              List
            </Tab>

            <Tab id={'json'} selected={activeTabId === 'json'} onClick={handleSelectTab}>
              JSON
            </Tab>
          </TabList>

          {activeTabId === 'list' && (
            <TabContent>
              <Table
                style={{
                  tableLayout: 'fixed',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <TableHeader>
                  <TableRow>
                    <TableCellHeader
                      style={{
                        width: '30%',
                      }}
                    >
                      Prop ({count})
                    </TableCellHeader>
                    <TableCellHeader
                      style={{
                        width: '30%',
                      }}
                    >
                      Var
                    </TableCellHeader>
                    <TableCellHeader
                      style={{
                        width: '40%',
                      }}
                    >
                      Value
                    </TableCellHeader>
                  </TableRow>
                </TableHeader>
                <TableBody>{rows}</TableBody>
              </Table>
            </TabContent>
          )}

          {activeTabId === 'json' && (
            <CodeBlock className="language-json">{JSON.stringify(vars, null, 2)}</CodeBlock>
          )}
        </Tabs>
      </Stack>
    );

    function renderVars({ namespace, vars, preview }: Props) {
      const rows = keys(vars).map((prop, propIndex) => {
        const nestedVars = vars[prop];

        if (!nestedVars) {
          return null;
        }

        if (typeof nestedVars === 'object') {
          return (
            <Fragment key={propIndex}>
              {renderVars({
                namespace: namespace.length ? `${namespace}.${prop}` : `${prop}`,
                vars: nestedVars,
                preview,
              })}
            </Fragment>
          );
        }

        count++;

        return (
          <TableRow key={propIndex}>
            <TableCell>{`${namespace}.${prop}`}</TableCell>
            <TableCell>{nestedVars}</TableCell>
            <TableCell>
              <CSSVariablePreview
                namespace={namespace}
                vars={vars}
                preview={preview}
                value={nestedVars}
              />
            </TableCell>
          </TableRow>
        );
      });

      return rows;
    }
  }
);

const CSSVariablePreview: React.FC<Props & { value?: string }> = React.memo(
  ({ namespace, vars, preview, value }) => {
    if (preview === 'color') {
      return <CSSVariableColorPreview value={value} />;
    }

    return <CSSVariableRawPreview value={value} />;
  }
);

const CSSVariableColorPreview: React.FC<{ value?: string }> = React.memo(({ value }) => {
  return <div style={{ backgroundColor: value, width: `100%`, height: `100%` }}>{value}</div>;
});

const CSSVariableRawPreview: React.FC<{ value?: string }> = React.memo(({ value }) => {
  const rawDomValue = window.getComputedStyle(document.body).getPropertyValue(getCSSVar(value));
  return <div>{rawDomValue}</div>;
});
