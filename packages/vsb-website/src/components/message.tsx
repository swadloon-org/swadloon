import { Box, Center, Cluster, Stack, useTreatTheme, Heading, BoxV2 } from '@newrade/core-react-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './message.treat';
import { HEADING } from '../../../core-design-system/src';

type OwnProps = SectionFragment;

export const Message: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  return (
    <Center className={`${styles.wrapper}`}>
      <BoxV2 padding={[cssTheme.sizing.var.x6, 0]}>
        <div className={styles.grid}>
          <Box className={styles.gridTitle}>
            <Heading variant={HEADING.h3}>{props?.title}</Heading>
          </Box>

          <Stack gap={[cssTheme.sizing.var.x4]} className={styles.gridMessages}>
            {props?.announcements?.map((item: any, index: number) => {
              return (
                <Cluster key={index} justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x1]}>
                  <MDXRenderer>{item.message.childMdx.body}</MDXRenderer>
                </Cluster>
              );
            })}
          </Stack>
        </div>
      </BoxV2>
    </Center>
  );
};
