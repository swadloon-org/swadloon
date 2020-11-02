import React from 'react';
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import { useStyles } from 'react-treat';

import * as styleRefs from './info-section-type-2.treat';
import { RenderTitleHighlight } from './info-title-highligh';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE, SECTION_IMAGE_POSITION } from '../../templates/section.template';
import { Paragraph } from '../ui/paragraph';
import { Button } from '../ui/button';
import { SectionLinkButton } from './section-link-button';
import { ImageFrame } from '../ui/image-frame';
import { FadeIn } from '../animation/fade-in';
import { LayoutCentered } from '../../layouts/content-centered';

type OwnProps = SectionFragment;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as SECTION_TYPE;
  const imagePosition = props.imagePosition as SECTION_IMAGE_POSITION;
  const hasImage = !!props?.medias.medias?.length;
  const imageUrl = props.medias?.medias[0]?.file?.url;

  return (
    <LayoutCentered reverseOrder={imagePosition === SECTION_IMAGE_POSITION.RIGHT}>
      <FadeIn>
        {hasImage && imageUrl ? (
          <ImageFrame variant={'bottomRight'} url={imageUrl} className={`${styles.image}`} />
        ) : null}
      </FadeIn>

      <div>
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text.text}
        </Paragraph>

        <SectionLinkButton variant={'primaryDefault'} link={props.link} />
      </div>
    </LayoutCentered>
  );
};
