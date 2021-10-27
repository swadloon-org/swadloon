import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { MarkdownTemplateQuery } from '@newrade/core-gatsb-config/config';
import { Badge, Cluster, Heading, Hr, Paragraph, Stack, Tag } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React from 'react';
import { useI18next } from '../i18next/use-i18next.hook';

type Props = {
  props: {
    data: MarkdownTemplateQuery;
  };
};

/**
 * Insert document heading, tags and other frontmatter metadata in .md document
 */
export const DocHeader = ({ props }: Props) => {
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
    <Stack gap={[sizingVars.var.x4, '24px', '24px']}>
      {/* {subject ? (
        <Label
          variant={LABEL_SIZE.small}
          variantStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >{`${subject.toUpperCase()}`}</Label>
      ) : null} */}

      {title ? <Heading>{title}</Heading> : null}

      {description ? (
        <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.large}>
          {description}
        </Paragraph>
      ) : null}

      {renderTags ? (
        <Cluster justifyContent={['flex-start']} gap={[sizingVars.var.x1]} wrap={true}>
          {status ? <Tag variant={Variant.secondary}>{`${status.toUpperCase()}`}</Tag> : null}

          {tags?.map((tag, index) => (
            <Tag variant={Variant.primary} key={index}>
              {tag}
            </Tag>
          ))}
        </Cluster>
      ) : null}

      {timeToRead ? (
        <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.xSmall}>
          {lastChangedAt} · {`${timeToRead} ${t('minutesToRead')}`}
        </Paragraph>
      ) : null}

      <Hr />

      {renderComponentInfos ? (
        <Stack gap={[sizingVars.var.x3]}>
          <Cluster wrap={true} justifyContent={['flex-start']} gap={[sizingVars.var.x1]}>
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
      ) : null}
    </Stack>
  );
};
