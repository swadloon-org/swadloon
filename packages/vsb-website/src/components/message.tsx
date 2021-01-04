import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './message.treat';
import { Box, Center, Stack, Cluster } from '@newrade/core-react-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { markdownComponents } from './markdown/components-markdown';

type OwnProps = SectionFragment;

export const Message: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <Cluster maxWidth={'1200px'}>
        <Box>{props?.title}</Box>
        <Box>
          <Stack>
            {/* ITEMS */}
            {props?.announcements?.map((item: any, index: number) => {
              return (
                <Box key={index}>
                  <h4>{item?.title}</h4>
                  <MDXRenderer components={markdownComponents}>{item.message.childMdx.body}</MDXRenderer>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Cluster>
    </div>
  );
};
