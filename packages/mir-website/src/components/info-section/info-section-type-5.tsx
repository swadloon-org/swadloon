import { FluidObject } from 'gatsby-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { LayoutCentered } from '../../layout/content-centered';
import { SECTION_IMAGE_POSITION } from '../../templates/section.template';
import { FadeIn } from '../animation/fade-in';
import { ImageFrame } from '../ui/image-frame';
import { Paragraph } from '../ui/paragraph';
import { CheckLabel } from './info-section-check';
import * as styleRefs from './info-section-type-5.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionFragment;

export const InfoSectionType5: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  const imagePosition = props?.imagePosition as SECTION_IMAGE_POSITION;
  const hasImage = !!props?.medias?.medias?.length;
  const imageFluid = props?.medias?.medias?.[0]?.desktopFluidImage;

  return (
    <div className={`${styles.wrapper} ${styles.type5} }`}>
      <LayoutCentered reverseOrder={imagePosition === SECTION_IMAGE_POSITION.RIGHT}>
        <FadeIn>
          {hasImage && imageFluid ? (
            <ImageFrame variant={'bottomRight'} fluid={imageFluid as FluidObject} className={`${styles.image}}`} />
          ) : null}
        </FadeIn>

        <div className={styles.content}>
          <RenderTitleHighlight className={styles.title} title={props?.title} titleHighlight={props?.titleHighlight} />

          <Paragraph variant={'medium'} className={styles.text}>
            {props?.text?.text}
          </Paragraph>

          {props?.infoChecks?.map((check, index) => {
            return (
              <CheckLabel illustration="IllustrationCheck" size="medium" key={check?.id}>
                {check?.text}
              </CheckLabel>
            );
          })}
        </div>
      </LayoutCentered>
    </div>
  );
};
