import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { MdxFrontmatter } from '@newrade/core-gatsby-config/lib/esm/config/site-graphql-types';
import {
  Badge,
  Cluster,
  Heading,
  Hr,
  Paragraph,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import React from 'react';
import { DocTags } from './doc-tags';

type Props = {
  props: {
    data: {
      file: {
        childMdx: {
          frontmatter: MdxFrontmatter;
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
  const showTags = !!(
    props?.data?.file?.childMdx?.frontmatter?.version &&
    props?.data?.file?.childMdx?.frontmatter?.status
  );

  return (
    <Stack gap={[cssTheme.sizing.var.x4]}>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading>{props?.data?.file?.childMdx?.frontmatter?.name}</Heading>

        {props?.data?.file?.childMdx?.frontmatter?.description ? (
          <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.large}>
            {props?.data?.file?.childMdx?.frontmatter?.description}
          </Paragraph>
        ) : null}

        {showTags ? (
          <Cluster wrap={true} justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x0]}>
            {props?.data?.file?.childMdx?.frontmatter?.version ? (
              <Badge
                name="version"
                status={props?.data?.file?.childMdx?.frontmatter?.version || 'n/a'}
              ></Badge>
            ) : null}

            {props?.data?.file?.childMdx?.frontmatter?.status ? (
              <Badge
                name="status"
                status={props?.data?.file?.childMdx?.frontmatter?.status || 'n/a'}
              ></Badge>
            ) : null}
          </Cluster>
        ) : null}

        {props?.data?.file?.childMdx?.frontmatter?.tags?.length ? <DocTags props={props} /> : null}
      </Stack>

      <Hr />
    </Stack>
  );
};
