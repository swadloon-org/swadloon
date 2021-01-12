import { HEADING, LinkVariant, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import {
  BoxV2,
  Button,
  Details,
  Heading,
  NavBar,
  Stack,
  Summary,
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  useTreatTheme,
  Link,
  Label,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { LogoPlaceholder } from '../utils/logo-placeholder';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  const lorenipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack id={'Components'} gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Components</Heading>

        <Details id={'Links'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Links</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Variant</Label>

                <Link variant={LinkVariant.noUnderline}>Link</Link>
                <Link variant={LinkVariant.underline}>Link Underline</Link>
              </Stack>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Size</Label>

                <Link variantSize={PARAGRAPH_SIZE.large}>Link</Link>
                <Link variantSize={PARAGRAPH_SIZE.medium}>Link</Link>
                <Link variantSize={PARAGRAPH_SIZE.small}>Link</Link>
                <Link variantSize={PARAGRAPH_SIZE.xSmall}>Link</Link>
              </Stack>
            </Stack>
          </BoxV2>
        </Details>

        <Details id={'Navigation'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Navigation</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x4, '0']}>
            <Stack gap={['43px']}>
              <NavBar
                style={{ position: 'relative' }}
                MobileSvgLogo={<LogoPlaceholder />}
                DesktopSvgLogo={<LogoPlaceholder />}
              />
            </Stack>
          </BoxV2>
        </Details>

        <Details id={'Buttons'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Buttons</Heading>
          </Summary>

          <Stack gap={['43px']}>
            <Button>Button</Button>
          </Stack>
        </Details>

        <Details id={'Table'}>
          <Summary>
            <Heading variant={HEADING.h3}>Tables</Heading>
          </Summary>
          <Stack id={'Tables'} gap={['1em']}>
            <div style={{ borderRadius: '0.5rem' }}>
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
            </div>
          </Stack>
        </Details>
      </Stack>
    </Stack>
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
