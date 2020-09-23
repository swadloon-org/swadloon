import { VIEWPORT } from '@newrade/core-design-system';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { GraphCms_JobSectionType, JobSectionsFragment } from '../../../types/graphql-types';
import { useViewportBreakpoint } from '../../hooks/use-viewport.hook';
import { Accordions } from '../accordions';
import { CheckLabel } from '../info-section-check';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Tags } from '../tags';
import * as styleRefs from './job-section.treat';

type OwnProps = {
  jobSection: JobSectionsFragment;
};

export function JobSection(props: OwnProps) {
  const styles = useStyles(styleRefs);
  const [accordionOpenState, setAccordionsOpenState] = useState([{ state: 'opened' }, { state: 'closed' }]);

  const { viewport } = useViewportBreakpoint();

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
            {props.jobSection?.groups.map((group, index) => {
              let lengthJobs: any = props.jobSection?.groups[index].jobs.length;
              let RowNumber: number =
                viewport === VIEWPORT.desktop ? Math.ceil(lengthJobs / 3) : Math.ceil(lengthJobs / 1);
              return (
                <div className={styles.containerBloc} key={index}>
                  <div className={styles.accordions}>
                    <Accordions
                      type="candidates"
                      icon={group.illustration ? group.illustration : 'IllustrationSettings'}
                      variant="none"
                      selected={accordionOpenState[index].state === 'opened'}
                      onClick={() => {
                        getIndexState(index);
                      }}
                    >
                      {group.typeName?.title}
                    </Accordions>
                  </div>
                  <div
                    className={`${styles.content} ${styles.withCheck}  ${
                      accordionOpenState[index].state === 'opened' ? styles.selected : styles.unselected
                    }`}
                    style={{ gridTemplateRows: `repeat(${RowNumber}, 1fr)` }}
                  >
                    {props?.jobSection?.groups[index].jobs.map((job, index) => {
                      return (
                        <div className={`${index % 2 == 0 ? styles.even : styles.unenven}`} key={index}>
                          <CheckLabel illustration="IllustrationCheck" size="medium">
                            {job.title}
                          </CheckLabel>
                        </div>
                      );
                    })}
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
              let lengthJobs: any = props.jobSection?.groups[index].jobs.length;
              let RowNumber: number =
                viewport === VIEWPORT.desktop ? Math.ceil(lengthJobs / 3) : Math.ceil(lengthJobs / 1);

              return (
                <div className={styles.containerBloc} key={index}>
                  <div className={styles.accordions}>
                    <Accordions
                      type="employer"
                      variant="reversed"
                      selected={accordionOpenState[index].state === 'opened'}
                      onClick={() => {
                        getIndexState(index);
                      }}
                    >
                      {jobType.typeName?.title}
                    </Accordions>
                  </div>

                  <div
                    className={`${styles.content} ${styles.withTags} ${
                      accordionOpenState[index].state === 'opened' ? styles.selected : styles.unselected
                    }`}
                    style={{ gridTemplateRows: `repeat(${RowNumber}, 1fr)` }}
                  >
                    {props?.jobSection?.groups[index].jobs.map((job, index) => {
                      return (
                        <div className={styles.tagsUnique} key={index}>
                          <Tags numberIndex={`${index < 9 ? '0' : ''}${index + 1}`}> {job.title}</Tags>
                        </div>
                      );
                    })}
                  </div>
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

  function getIndexState(index: number) {
    let newArr = [...accordionOpenState];
    accordionOpenState[index].state === 'opened' ? (newArr[index].state = 'closed') : (newArr[index].state = 'opened');
    setAccordionsOpenState(newArr);
  }
}
