import { VIEWPORT } from '@newrade/core-design-system-old';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { useViewportBreakpoint } from '../../hooks/use-viewport.hook';
import { SECTION_TYPE } from '../../templates/section.template';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Accordions } from '../ui/accordions';
import { CheckLabel } from './info-section-check';
import * as styleRefs from './job-section.treat';
import { Tags } from './tags';

type OwnProps = SectionFragment;

export function JobSection(props: OwnProps) {
  const styles = useStyles(styleRefs);
  const [accordionOpenState, setAccordionsOpenState] = useState([
    { state: 'opened' },
    { state: 'closed' },
  ]);

  const { viewport } = useViewportBreakpoint();

  const variant = props?.type?.name as SECTION_TYPE.JOB_CANDIDATES | SECTION_TYPE.JOB_EMPLOYER;

  return (
    <div className={`${styles.wrapper} `}>
      <div className={styles.containerWrapper}>
        <RenderTitleHighlight
          className={styles.title}
          title={props?.title}
          titleHighlight={props?.titleHighlight}
        />
        {getVariantModifier(variant)}
      </div>
    </div>
  );

  function getVariantModifier(value: any) {
    switch (value) {
      case SECTION_TYPE.JOB_CANDIDATES: {
        return (
          <div className={styles.container}>
            {props?.jobGroup?.map((group, index) => {
              const lengthJobs: any = props?.jobGroup?.[index]?.jobs?.length;

              const RowNumber: number =
                viewport >= VIEWPORT.desktop
                  ? Math.ceil(lengthJobs / 3)
                  : Math.ceil(lengthJobs / 1);

              return (
                <div className={styles.containerBloc} key={index}>
                  <div className={styles.accordions}>
                    <Accordions
                      type="candidates"
                      icon={group?.illustration?.title}
                      variant="none"
                      selected={accordionOpenState[index].state === 'opened'}
                      onClick={() => {
                        getIndexState(index);
                      }}
                    >
                      {group?.typeName}
                    </Accordions>
                  </div>
                  <div
                    className={`${styles.content} ${styles.withCheck}  ${
                      accordionOpenState[index].state === 'opened'
                        ? styles.selected
                        : styles.unselected
                    }`}
                    style={{ gridTemplateRows: `repeat(${RowNumber}, 1fr)` }}
                  >
                    {props?.jobGroup?.[index]?.jobs?.map((job, index) => {
                      return (
                        <div
                          className={`${index % 2 == 0 ? styles.even : styles.unenven}`}
                          key={index}
                        >
                          <CheckLabel illustration="IllustrationCheck" size="medium">
                            {job?.title}
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

      case SECTION_TYPE.JOB_EMPLOYER: {
        return (
          <div className={styles.container}>
            {props?.jobGroup?.map((jobType, index) => {
              const lengthJobs: any = props?.jobGroup?.[index]?.jobs?.length;

              const RowNumber: number =
                viewport >= VIEWPORT.desktop
                  ? Math.ceil(lengthJobs / 3)
                  : Math.ceil(lengthJobs / 1);

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
                      {jobType?.typeName}
                    </Accordions>
                  </div>

                  <div
                    className={`${styles.content} ${styles.withTags} ${
                      accordionOpenState[index].state === 'opened'
                        ? styles.selected
                        : styles.unselected
                    }`}
                    style={{ gridTemplateRows: `repeat(${RowNumber}, 1fr)` }}
                  >
                    {props?.jobGroup?.[index]?.jobs?.map((job, index) => {
                      return (
                        <div className={styles.tagsUnique} key={index}>
                          <Tags numberIndex={`${index < 9 ? '0' : ''}${index + 1}`}>
                            {' '}
                            {job?.title}
                          </Tags>
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
    const newArr = [...accordionOpenState];

    if (accordionOpenState[index].state === 'opened') {
      newArr[index].state = 'closed';
    } else {
      newArr[index].state = 'opened';
    }

    setAccordionsOpenState(newArr);
  }
}
