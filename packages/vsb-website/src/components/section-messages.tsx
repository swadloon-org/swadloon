import { HEADING } from '@newrade/core-design-system';
import { BoxV2, Cluster, CommonComponentProps, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-messages.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionMessages: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  return (
    <div className={styles.grid}>
      <BoxV2 className={styles.gridTitle} alignItems={['flex-start']}>
        <Heading variant={HEADING.h4} as={'h1'}>
          {section?.title}
        </Heading>
      </BoxV2>

      <Stack gap={[cssTheme.sizing.var.x5]} className={styles.gridMessages}>
        {section?.announcements?.map((item: any, index: number) => {
          return (
            <Cluster key={index} justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x1]}>
              <MDXRenderer>{item.message.childMdx.body}</MDXRenderer>
            </Cluster>
          );
        })}
      </Stack>
    </div>
  );
};
