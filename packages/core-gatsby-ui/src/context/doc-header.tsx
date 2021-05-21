import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { Heading, Hr, Paragraph, Stack, TagStatus, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { DocTags } from './doc-tags';

type Props = {
  props: {
    data: {
      file: {
        childMdx: {
          frontmatter: { name?: string; tags?: string[]; description?: string; version?: string };
        };
      };
    };
  };
};

/**
 * Insert document heading, tags and other frontmatter metadata in .md document
 */
export const DocHeader = ({ props }: Props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x4]}>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading>{props?.data?.file?.childMdx?.frontmatter?.name}</Heading>

        {props?.data?.file?.childMdx?.frontmatter?.description ? (
          <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.large}>
            {props?.data?.file?.childMdx?.frontmatter?.description}
          </Paragraph>
        ) : null}

        {props?.data?.file?.childMdx?.frontmatter?.version ? (
          <TagStatus name="version" status="v1"></TagStatus>
        ) : null}

        {props?.data?.file?.childMdx?.frontmatter?.tags?.length ? <DocTags props={props} /> : null}
      </Stack>

      <Hr />
    </Stack>
  );
};
