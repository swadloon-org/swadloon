import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './blog-post-article.treat';
import { BlogPostFragment } from '../../types/graphql-types';
import { Heading } from '../components/ui/heading';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Label } from '../components/ui/label';
import { LABEL } from '../../../core-design-system-old/src';
import { Author } from '../components/blog-preview/author';
import GatsbyImage, { FluidObject } from 'gatsby-image';

type OwnProps = BlogPostFragment;

export const BlogPostArticleTemplate: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Label variant={LABEL.xSmallBoldUppercase} as="div" className={styles.subtitle}>
          {props.subtitle}
        </Label>
        <Heading variant={'h2'}>{props?.title}</Heading>
        <Author
          name={`${props?.blogAuthor?.[0]?.firstName} ${props?.blogAuthor?.[0]?.lastName}`}
          title={props?.blogAuthor?.[0]?.jobTitle}
          profileImageUrl={props?.blogAuthor?.[0]?.profilePicture?.file?.url}
        ></Author>
        <GatsbyImage fluid={props?.blogMainImage?.fluid as FluidObject}></GatsbyImage>
        <MDXRenderer>{props?.content?.childMdx?.body as any}</MDXRenderer>
      </div>
    </div>
  );
};
