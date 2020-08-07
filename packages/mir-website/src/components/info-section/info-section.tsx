import React, { useState } from 'react';
import { GraphCms_Asset, GraphCms_InfoSection, GraphCms_InfoTile, Maybe } from '../../../types/graphql-types';
import { Button } from '../button';
import { Heading } from '../heading';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { Tab } from '../tab';
import { InfoTile } from './info-tile';
import styles from './info-section.module.scss';

export type SectionModelQuery = Pick<
  GraphCms_InfoSection,
  'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'
> & {
  infoTiles: Array<Pick<GraphCms_InfoTile, 'icon' | 'title' | 'text'>>;
  childs: Array<
    Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>
  >;
  image?: Maybe<Pick<GraphCms_Asset, 'url'>>;
};

type OwnProps = SectionModelQuery;

export const InfoSection: React.FC<OwnProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const hasTabs = !!props?.childs.length && props.showTabs;

  return (
    <div className={`${styles.wrapper} ${styles[props.type]} ${hasImage || hasInfoTiles ? styles.extraPadding : ''}`}>
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomLeft'}
          url={props.image?.url}
          className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
        />
      ) : null}

      {hasTabs ? (
        <div className={styles.tabsWrapper}>
          {props?.childs.map((child, index) => {
            return (
              <Tab
                key={index}
                size="small"
                selected={index === selectedTabIndex}
                onClick={() => {
                  setSelectedTabIndex(index);
                }}
              >
                {child.titleTab}
              </Tab>
            );
          })}
        </div>
      ) : null}

      {hasTabs
        ? props.childs.map((info, index) => (selectedTabIndex === index ? renderTabbedInfoSection(info, index) : null))
        : renderInfoSection(props)}
    </div>
  );

  function renderInfoSection(props: SectionModelQuery) {
    const hasInfoTiles = !!props?.infoTiles?.length;
    const hasTabs = !!props?.childs.length;

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
              return <InfoTile key={index} icon={info.icon} title={info.title} text={info.text} variant={props.type} />;
            })}
          </div>
        ) : null}

        {hasTabs ? null : (
          <Button
            type={'primary'}
            variant={'text'}
            size={'medium'}
            variantStyle={props.type === 'default' || props.type === 'defaultShadow' ? 'default' : 'reversed'}
          >
            {props.actionText}
          </Button>
        )}
      </React.Fragment>
    );
  }

  function renderTabbedInfoSection(props: Partial<SectionModelQuery>, sectionIndex: number) {
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

        <Button type={'primary'} variant={'text'} size={'medium'} variantStyle={'default'}>
          {props.actionText}
        </Button>
      </React.Fragment>
    );
  }
};
