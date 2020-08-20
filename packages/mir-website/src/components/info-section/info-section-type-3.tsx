import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-section.treat';

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
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${styles[props.type]}`}>
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomLeft'}
          url={props.image?.url}
          className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
        />
      ) : null}

      <div className={styles.content}>
        {hasTabs ? (
          <div className={styles.tabsWrapper}>
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
    const styles = useStyles(styleRefs);

    return (
      <React.Fragment key={`${sectionIndex}`}>
        <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text}
        </Paragraph>

        <Button type={'primaryDefault'} variant={'text'} size={'medium'} className={styles.button}>
          {props.actionText}
        </Button>
      </React.Fragment>
    );
  }
};
