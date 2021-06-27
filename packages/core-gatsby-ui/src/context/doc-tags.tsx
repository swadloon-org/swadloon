import { Cluster, Tag, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {
  props: { data: { file: { childMdx: { frontmatter: { name?: string; tags?: string[] } } } } };
};

/**
 * Display frontmatter tags
 */
export const DocTags = ({ props }: Props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x1]} wrap={true}>
      {props?.data?.file?.childMdx?.frontmatter?.tags?.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Cluster>
  );
};
