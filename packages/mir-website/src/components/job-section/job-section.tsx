import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Accordions } from '../accordions';
import { Tags } from '../tags';
import { CheckLabel } from '../info-section-check';
import * as styleRefs from './job-section.treat';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { BoxIcon } from '../box-icon';
import { useViewportValues, useViewportBreakpoint } from '../../hooks/use-viewport.hook';
import { VIEWPORT } from 'core-design-system';
import {
  Maybe,
  GraphCms_JobSection,
  GraphCms_JobSectionType,
  GraphCms_JobType,
  GraphCms_Job,
} from '../../../types/graphql-types';
import { style } from 'treat/lib/types';

type OwnProps = {
  jobSection: Maybe<
    Pick<GraphCms_JobSection, 'title' | 'titleHighlight'> & {
      type?: Maybe<Pick<GraphCms_JobSectionType, 'title' | 'type'>>;
      groups: Array<{
        typeName?: Maybe<
          Pick<GraphCms_JobType, 'id' | 'title'> & {
            jobGroup: Array<{ jobs: Array<Pick<GraphCms_Job, 'id' | 'title'>> }>;
          }
        >;
      }>;
    }
  >;
};

export function JobSection(props: OwnProps) {
  const styles = useStyles(styleRefs);
  const { width } = useViewportValues();
  const { viewport } = useViewportBreakpoint();

  const [selectedAccordionsIndex, setSelectedAccordionsIndex] = useState<number>(1);
  const [selectedBoxIcon, setSelectedBoxIconIndex] = useState<number>(1);

  return (
    <div className={`${styles.wrapper} `}>
      <div className={styles.containerWrapper}>
        <RenderTitleHighlight
          className={styles.title}
          title={props?.jobSection?.title}
          titleHighlight={props?.jobSection?.titleHighlight}
        />
        {getVariantModifier(props?.jobSection?.type?.type)}
      </div>
    </div>
  );

  function getVariantModifier(value: GraphCms_JobSectionType['type']) {
    switch (value) {
      case 'candidates': {
        return (
          <div className={styles.container}>
            {props?.jobSection?.groups.map((jobType, index) => {
              return (
                <div className={styles.containerMobile} key={index}>
                  <div className={styles.containerBox}>
                    <div className={styles.boxIcon}>
                      <BoxIcon
                        icon="IllustrationFactory"
                        selected={index === selectedBoxIcon}
                        onClick={() => {
                          setSelectedBoxIconIndex(index);
                        }}
                      >
                        {jobType.typeName?.title}
                      </BoxIcon>
                    </div>

                    {selectedBoxIcon === index ? getMediaModifier(true, value) : getMediaModifier(false, value)}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }

      case 'employer': {
        return (
          <div className={styles.container}>
            {props.jobSection?.groups.map((jobType, index) => {
              return (
                <div>
                  <div className={styles.accordions} key={index}>
                    <Accordions
                      variant="reversed"
                      selected={index === selectedAccordionsIndex}
                      onClick={() => {
                        setSelectedAccordionsIndex(index);
                      }}
                    >
                      {jobType.typeName?.title}
                    </Accordions>
                  </div>
                  {selectedAccordionsIndex === index ? getMediaModifier(true, value) : getMediaModifier(false, value)}
                </div>
              );
            })}
          </div>
        );
      }
      default: {
        return '';
      }
    }
  }
  function getMediaModifier(value: boolean, type: any) {
    if (value === true) {
      switch (type) {
        case 'candidates': {
          return (
            <div className={`${styles.content}`}>
              {props?.jobSection?.groups[selectedBoxIcon].typeName?.jobGroup[0].jobs.map((job, index) => {
                return (
                  <div className={`${index % 2 == 0 ? styles.even : styles.unenven}`} key={index}>
                    <CheckLabel illustration="IllustrationCheck" size="medium">
                      {job.title}
                    </CheckLabel>
                  </div>
                );
              })}
            </div>
          );
        }
        case 'employer': {
          return (
            <div className={styles.content}>
              {props?.jobSection?.groups[selectedAccordionsIndex].typeName?.jobGroup[0].jobs.map((job, index) => {
                return (
                  <div className={styles.tagsUnique} key={index}>
                    <Tags numberIndex={`${index < 9 ? '0' : ''}${index + 1}`}> {job.title}</Tags>
                  </div>
                );
              })}
            </div>
          );
        }
      }
    } else {
      return <div className={`${styles.content}`}></div>;
    }
  }
}
