import { HEADING } from '@newrade/core-design-system';
import {
  BoxV2,
  Heading,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { PageHeader } from '../utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Tables components'}>How the table component should be used.</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Tables</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
          <Stack id={'Tables'} gap={['1em']}>
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
          </Stack>
        </BoxV2>
      </Stack>
    </>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;
