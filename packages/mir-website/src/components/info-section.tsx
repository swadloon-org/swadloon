import React, { useState } from 'react';
import { Heading } from './heading';
import styles from './info-section.module.scss';
import { Paragraph } from './paragraph';
import { Button } from './button';
import { InfoTile } from './info-tile';
import { ImageFrame } from './image-frame';
import { GraphCms_InfoSection, Maybe, GraphCms_Asset, GraphCms_InfoTile } from '../../types/graphql-types';
import { Tab } from './tab';

type InfoSectionWithTabs = Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'text' | 'actionText' | 'style'> & {
  image?: Maybe<Pick<GraphCms_Asset, 'url'>>;
  infoTabs: Array<
    Pick<GraphCms_InfoSection, 'titleTab' | 'title' | 'titleHighlight' | 'text' | 'actionText' | 'style'>
  >;
  infoTiles: Array<Pick<GraphCms_InfoTile, 'icon' | 'title' | 'text'>>;
};

type OwnProps = InfoSectionWithTabs;

export const InfoSection: React.FC<OwnProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const hasTabs = !!props?.infoTabs.length;

  return (
    <div className={`${styles.wrapper} ${styles[props.style]} ${hasImage || hasInfoTiles ? styles.extraPadding : ''}`}>
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomLeft'}
          url={props.image?.url}
          className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
        />
      ) : null}

      {hasTabs ? (
        <div className={styles.tabsWrapper}>
          {props?.infoTabs.map((infoSecTab, index) => {
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

      {hasTabs
        ? props.infoTabs.map((info, index) =>
            selectedTabIndex === index ? renderTabbedInfoSection(info, index) : null
          )
        : renderInfoSection(props)}
    </div>
  );

  function renderInfoSection(props: InfoSectionWithTabs) {
    const hasInfoTiles = !!props?.infoTiles?.length;
    const hasTabs = !!props?.infoTabs.length;

    return (
      <React.Fragment>
        <Heading variant={'h3'} className={styles.title}>
          {props.titleHighlight
            ? props.title.split(' ').map((word, index) =>
                word === props.titleHighlight ? (
                  <span key={index} className={styles.titleHighlight}>
                    {index > 0 ? ' ' : ''}
                    {word}
                  </span>
                ) : (
                  <span key={index}>
                    {index > 0 ? ' ' : ''}
                    {word}
                  </span>
                )
              )
            : props.title}
        </Heading>

        <Paragraph variant={'small'} className={styles.text}>
          {props.text}
        </Paragraph>

        {hasInfoTiles ? (
          <div className={styles.infoTilesWrapper}>
            {props.infoTiles.map((info, index) => {
              return (
                <InfoTile key={index} icon={info.icon} title={info.title} text={info.text} variant={props.style} />
              );
            })}
          </div>
        ) : null}

        {hasTabs ? null : (
          <Button type="secondary" variant="default" size="medium">
            {props.actionText}
          </Button>
        )}
      </React.Fragment>
    );
  }

  function renderTabbedInfoSection(props: Partial<InfoSectionWithTabs>, sectionIndex: number) {
    return (
      <React.Fragment key={`${sectionIndex}`}>
        <Heading variant={'h3'} className={styles.title}>
          {props.titleHighlight
            ? props.title.split(' ').map((word, index) =>
                word === props.titleHighlight ? (
                  <span key={`${index}`} className={styles.titleHighlight}>
                    {index > 0 ? ' ' : ''}
                    {word}
                  </span>
                ) : (
                  <span key={`${index}`}>
                    {index > 0 ? ' ' : ''}
                    {word}
                  </span>
                )
              )
            : props.title}
        </Heading>

        <Paragraph variant={'small'} className={styles.text}>
          {props.text}
        </Paragraph>

        <Button type="secondary" variant="default" size="medium">
          {props.actionText}
        </Button>
      </React.Fragment>
    );
  }
};
