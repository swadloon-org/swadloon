import { BoxV2, Center, Cluster, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { useStyles } from 'react-treat';
import { HEADING } from '@newrade/core-design-system';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './section-messages.treat';
import { SectionProps } from './section.props';

type OwnProps = SectionFragment & SectionProps & {};

export const SectionMessages: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  return (
    <Center className={`${styles.wrapper}`}>
      <BoxV2 padding={[cssTheme.sizing.var.x6, 0]}>
        <div className={styles.grid}>
          <BoxV2 className={styles.gridTitle} alignItems={['flex-start']}>
            <Heading variant={HEADING.h4} as={'h1'}>
              {props?.title}
            </Heading>
          </BoxV2>

          <Stack gap={[cssTheme.sizing.var.x5]} className={styles.gridMessages}>
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
