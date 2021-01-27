import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment, LinkFragment } from '../../../types/graphql-types';
import { LayoutCentered } from '../../layout/content-centered';
import { SECTION_IMAGE_POSITION } from '../../templates/section.template';
import { FadeIn } from '../animation/fade-in';
import { ImageFrame } from '../ui/image-frame';
import { Paragraph } from '../ui/paragraph';
import * as styleRefsType3 from './info-section-type-3.treat';
import { RenderTitleHighlight } from './info-title-highligh';
import { SectionLinkButton } from './section-link-button';
import { Tab } from './tab';
import { FluidObject } from 'gatsby-image';

type OwnProps = SectionFragment & SectionProps & {};

export const InfoSectionType3: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefsType3);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const imagePosition = props?.imagePosition as SECTION_IMAGE_POSITION;
  const hasTabs = !!props?.subSections?.length;
  const hasImage = !!props?.medias?.medias?.length;
  const imageUrl = props?.medias?.medias?.[0]?.file?.url;
  const imageUrlFluid = props?.medias?.medias?.[0]?.desktopFluidImage as FluidObject;

  return (
    <LayoutCentered reverseOrder={imagePosition === SECTION_IMAGE_POSITION.RIGHT}>
      <FadeIn>
        {hasImage && imageUrl ? (
          <ImageFrame variant={'bottomRight'} fluid={imageUrlFluid} className={`${styles.image}`} />
        ) : null}
      </FadeIn>
      <div>
        {hasTabs ? (
          <div className={styles.tabsWrapper}>
            {props?.subSections?.map((infoSecTab, index) => {
              return (
                <Tab
                  key={index}
                  size="small"
                  selected={index === selectedTabIndex}
                  onClick={() => {
                    setSelectedTabIndex(index);
                  }}
                >
                  {infoSecTab?.subTitle}
                </Tab>
              );
            })}
          </div>
        ) : null}

        {props?.subSections?.map((info, index) =>
          selectedTabIndex === index && info ? renderTabbedInfoSection(info, index) : null
        )}
      </div>
      ``
    </LayoutCentered>
  );

  function renderTabbedInfoSection(props: SectionFragment, sectionIndex: number) {
    const styleRefs = useStyles(styleRefsType3);

    return (
      <React.Fragment key={`${sectionIndex}`}>
        <RenderTitleHighlight className={styleRefs.title} title={props?.title} titleHighlight={props?.titleHighlight} />

        <Paragraph variant={'medium'} className={styleRefs.text}>
          {props?.text?.text}
        </Paragraph>

        <SectionLinkButton variant={'primaryDefault'} link={props?.link as LinkFragment} />
      </React.Fragment>
    );
  }
};
