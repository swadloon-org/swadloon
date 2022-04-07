import React from 'react';

import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { MarkdownTemplateQuery } from '@newrade/core-gatsb-config/config';
import { Badge, Cluster, Heading, Hr, Link, Paragraph, Stack, Tag } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { useI18next } from '../i18next/use-i18next.hook';

type Props = {
  props: {
    data: MarkdownTemplateQuery;
  };
};

/**
 * Insert document heading, tags and other frontmatter metadata in a .md document
 * @param {object} See `site-mdx-frontmatter.ts` for all `frontmatter` fields
 * @example
 * ```markdown
 * ---
 * title: Code
 * description:
 *   Utility components to render components in an iframe with viewport controls.
 *   It can also render source code with syntax highlighting.
 * tags:
 *   - organism
 *   - prism
 *   - tools
 *   - development
 *   - documentation
 * jsdoc: ['@newrade/core-gatsby-ui/src/context/theme-wrapper.tsx']
 * ---
 *
 * <DocHeader props={props}/>
 *
 * Rest of the markdown file
 * ```
 */
export const DocPagePreview = ({ props }: Props) => {
  const { t } = useI18next();

  const status = props?.data?.file?.childMdx?.frontmatter?.status;
  const subject = props?.data?.file?.childMdx?.frontmatter?.subject;
  const title = props?.data?.file?.childMdx?.frontmatter?.title;
  const description = props?.data?.file?.childMdx?.frontmatter?.description;
  const timeToRead = props?.data?.file?.childMdx?.timeToRead;
  const lastChangedAt = props?.data?.file?.changeTime;
  const tags = props?.data?.file?.childMdx?.frontmatter?.tags;
  const renderTags = tags?.length || status;
  const componentVersion = props?.data?.file?.childMdx?.frontmatter?.componentVersion;
  const componentStatus = props?.data?.file?.childMdx?.frontmatter?.componentStatus;
  const componentTests = props?.data?.file?.childMdx?.frontmatter?.componentTests;
  const renderComponentInfos = componentVersion || componentStatus || componentTests;

  return (
    <Stack gap={[sizeVars.x4]}>
      {/* {subject ? (
        <Label
          variant={LABEL_SIZE.small}
          textStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >{`${subject.toUpperCase()}`}</Label>
      ) : null} */}

      <Cluster gap={[sizeVars.x2]} justifyContent={['flex-start']} alignItems={['flex-end']}>
        {title ? <Heading>{title}</Heading> : null}{' '}
        {status ? <Tag variant={Variant.secondary}>{`${status.toUpperCase()}`}</Tag> : null}
      </Cluster>

      {description ? (
        <Paragraph kind={Variant.secondary} size={PARAGRAPH_SIZE.large}>
          {description}
        </Paragraph>
      ) : null}

      <Cluster justifyContent={['flex-start']} gap={[sizeVars.x0]} wrap={true}>
        {timeToRead ? (
          <Paragraph kind={Variant.secondary} size={PARAGRAPH_SIZE.xSmall}>
            {lastChangedAt} · {`${timeToRead} ${t('minutesToRead')}`}
          </Paragraph>
        ) : null}
        {renderTags && tags?.length ? (
          <Paragraph kind={Variant.secondary} size={PARAGRAPH_SIZE.xSmall}>
            -
          </Paragraph>
        ) : null}
        {renderTags
          ? tags?.map((tag, tagIndex) => (
              <Link kind={Variant.primary} size={PARAGRAPH_SIZE.xSmall} key={tagIndex}>
                {tag}
                {tagIndex < tags.length - 1 ? ', ' : null}
              </Link>
            ))
          : null}
      </Cluster>

      {renderComponentInfos ? (
        <Stack gap={[sizeVars.x3]}>
          <Hr />

          <Cluster wrap={true} justifyContent={['flex-start']} gap={[sizeVars.x1]}>
            {componentVersion ? <Badge name="version" status={componentVersion}></Badge> : null}

            {componentStatus ? (
              <Badge
                name="status"
                status={componentStatus}
                kind={componentStatus === 'wip' ? 'warning' : 'success'}
              ></Badge>
            ) : null}

            {componentTests ? (
              <Badge
                name="tests"
                status={componentTests}
                kind={componentTests === 'missing' ? 'warning' : 'success'}
              ></Badge>
            ) : null}
          </Cluster>

          <Hr />
        </Stack>
      ) : (
        <Hr />
      )}
    </Stack>
  );
};
