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
import { sizingVars, typographyVars } from '@newrade/core-react-ui/theme';
import { getCSSVar, keys } from '@newrade/core-react-ui/utilities';
import { NullableTokens } from '@vanilla-extract/css/dist/declarations/src/types';
import React, { Fragment, useState } from 'react';

type Props = {};

export const CSSVariables: React.FC<Props> = React.memo((props) => {
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

  return (
    <Stack gap={[sizingVars.var.x5]}>
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
                    Prop
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
              <TableBody>
                {renderVars({
                  namespace: '',
                  vars: sizingVars,
                })}
                {renderVars({
                  namespace: '',
                  vars: typographyVars,
                })}
              </TableBody>
            </Table>
          </TabContent>
        )}

        {activeTabId === 'json' && (
          <CodeBlock className="language-json">{JSON.stringify(typographyVars, null, 2)}</CodeBlock>
        )}
      </Tabs>
    </Stack>
  );
});

function renderVars({ namespace, vars }: { namespace: string; vars: NullableTokens }) {
  return keys(vars).map((prop, propIndex) => {
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
          })}
        </Fragment>
      );
    }

    return (
      <TableRow key={propIndex}>
        <TableCell>{`${namespace}.${prop}`}</TableCell>
        <TableCell>{nestedVars}</TableCell>
        <TableCell>
          {window.getComputedStyle(document.body).getPropertyValue(getCSSVar(nestedVars))}
        </TableCell>
      </TableRow>
    );
  });
}
