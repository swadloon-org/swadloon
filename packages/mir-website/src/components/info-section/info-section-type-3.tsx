import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefsBase from './info-section.treat';
import * as styleRefsType3 from './info-section-type-3.treat';

import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { Tab } from '../tab';
import { SectionModelQuery } from './info-section';
// import styles from './info-section.module.scss';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionModelQuery;

export const InfoSectionType3: React.FC<OwnProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const hasImage = !!props?.image;
  const hasTabs = !!props?.childs.length;
  const styleRefs = useStyles(styleRefsType3);
  const styleBase = useStyles(styleRefsBase);

  return (
    <div className={`${styleBase.wrapper} ${styleRefs[props.type]} ${styleBase[props.align]}`}>
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomRight'}
          url={props.image?.url}
          className={`${styleBase.image} ${hasTabs ? styleBase.imageTabs : ''}`}
        />
      ) : null}

      <div className={styleRefs.content}>
        {hasTabs ? (
          <div className={styleRefs.tabsWrapper}>
            {props?.childs.map((infoSecTab, index) => {
              return (
                <Tab
                  key={index}
                  size="small"
                  selected={index === selectedTabIndex}
                  onClick={() => {
                    setSelectedTabIndex(index);
                  }}
                >
                  {infoSecTab.titleTab}
                </Tab>
              );
            })}
          </div>
        ) : null}

        {props.childs.map((info, index) => (selectedTabIndex === index ? renderTabbedInfoSection(info, index) : null))}
      </div>
    </div>
  );

  function renderTabbedInfoSection(props: Partial<SectionModelQuery>, sectionIndex: number) {
    const styleRefs = useStyles(styleRefsType3);

    return (
      <React.Fragment key={`${sectionIndex}`}>
        <RenderTitleHighlight className={styleRefs.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styleRefs.text}>
          {props.text}
        </Paragraph>

        <Button type={'primaryDefault'} variant={'text'} size={'medium'} className={styleRefs.button}>
          {props.actionText}
        </Button>
      </React.Fragment>
    );
  }
};
