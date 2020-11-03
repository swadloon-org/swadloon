import React from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';
import { Button } from '../ui/button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Paragraph } from '../ui/paragraph';
import { BlogPreviewTileImage } from './/blog-preview-tile-image';
import * as styleRefs from './blog-preview-section.treat';
import { SECTION_TYPE } from '../../templates/section.template';
import { SectionFragment } from '../../../types/graphql-types';

type OwnProps = SectionFragment;

export const BlogPreviewSection: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as SECTION_TYPE.BLOG_PREVIEW;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <RenderTitleHighlight title={props.title} titleHighlight={'nouvelles'} className={styles.title} />

        <Paragraph variant="medium" className={styles.paragraph}>
          {props.text?.text}
        </Paragraph>

        <div className={styles.content}>
          {console.log(JSON.stringify(props, null, 2))}
          {props.blogPosts.map((post) => {
            return (
              <BlogPreviewTileImage
                key={post.id}
                imageUrl={post.blogMainImage.file.url}
                title={post.title}
                actionLabel="Lire l’article"
              ></BlogPreviewTileImage>
            );
          })}
        </div>

        {props.link?.page?.route ? (
          <GatsbyLink to={props.link.page?.route}>
            <Button variantType="primaryDefault" size="medium" variant="text">
              {props.link.label}
            </Button>
          </GatsbyLink>
        ) : null}
      </div>
    </div>
  );
};
