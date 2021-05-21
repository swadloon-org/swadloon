import { FluidObject } from 'gatsby-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { LinkFragment, SectionFragment } from '../../../types/graphql-types';
import { LayoutCentered } from '../../layout/content-centered';
import { SECTION_IMAGE_POSITION } from '../../templates/section.template';
import { FadeIn } from '../animation/fade-in';
import { ImageFrame } from '../ui/image-frame';
import { Paragraph } from '../ui/paragraph';
import * as styleRefs from './info-section-type-2.treat';
import { RenderTitleHighlight } from './info-title-highligh';
import { SectionLinkButton } from './section-link-button';

type OwnProps = SectionFragment;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const imagePosition = props?.imagePosition as SECTION_IMAGE_POSITION;
  const hasImage = !!props?.medias?.medias?.length;
  const imageFluid = props?.medias?.medias?.[0]?.mobileFluidImage as FluidObject;

  return (
    <LayoutCentered reverseOrder={imagePosition === SECTION_IMAGE_POSITION.RIGHT}>
      <FadeIn>
        {hasImage && imageFluid ? (
          <ImageFrame variant={'bottomRight'} fluid={imageFluid} className={`${styles.image}`} />
        ) : null}
      </FadeIn>

      <div className={styles.block}>
        <RenderTitleHighlight
          className={styles.title}
          title={props?.title}
          titleHighlight={props?.titleHighlight}
        />

        <Paragraph variant={'medium'} className={styles.text}>
          {props?.text?.text}
        </Paragraph>

        <SectionLinkButton variant={'primaryDefault'} link={props?.link as LinkFragment} />
      </div>
    </LayoutCentered>
  );
};
