import { Grid, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from '../utils/placeholder';
type Props = {};

export const LayoutGrid: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Grid gap={['1em']} variantGrid={'col'} columns={[1, 3, 3]}>
        <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Grid>

        <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
          <Placeholder>A</Placeholder>
          <Placeholder>B</Placeholder>
          <Placeholder>C</Placeholder>
        </Grid>

        <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
          <Placeholder>A1</Placeholder>
          <Placeholder>B1</Placeholder>
          <Placeholder>C1</Placeholder>
        </Grid>
      </Grid>
    </>
  );
};
