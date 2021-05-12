import { Heading, Hr, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { DocTags } from './doc-tags';

type Props = {
  props: { data: { file: { childMdx: { frontmatter: { name?: string; tags?: string[] } } } } };
};

/**
 * Insert document heading, tags and other frontmatter metadata in .md document
 */
export const DocHeader = ({ props }: Props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x4]}>
      <Heading>{props.data.file.childMdx.frontmatter.name}</Heading>
      <Hr />
      <DocTags props={props} />
    </Stack>
  );
};
