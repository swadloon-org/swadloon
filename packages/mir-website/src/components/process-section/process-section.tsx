import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './process-section.treat';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Label } from '../label';
import { LABEL } from '@newrade/core-design-system';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import {
  Maybe,
  GraphCms_ProcessSection,
  GraphCms_ProcessSectionType,
  GraphCms_ProcessStep,
} from '../../../types/graphql-types';

type OwnProps = {
  processSection?: Maybe<
    Pick<GraphCms_ProcessSection, 'title' | 'titleHighlight'> & {
      type?: Maybe<Pick<GraphCms_ProcessSectionType, 'title'>>;
      steps: Array<Pick<GraphCms_ProcessStep, 'title' | 'description' | 'id'>>;
    }
  >;
};

export const Process: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.processSection?.type?.title}`}>
      <div className={`${styles.container}`}>
        <RenderTitleHighlight
          className={styles.title}
          title={props.processSection?.title}
          titleHighlight={props.processSection?.titleHighlight}
        />
        <div className={styles.content}>
          {/* <div className={styles.line}></div> */}
          {props.processSection?.steps.map((tile: any, index: number) => {
            return (
              <div className={`${styles.tileProcess}`} key={tile.id}>
                <div className={styles.blocNumber}>
                  <div className={styles.circle}>
                    <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                      {`${index < 9 ? '0' : ''}${index + 1}`}
                    </Label>
                  </div>
                </div>
                <div
                  className={`${styles.blocContent}  ${
                    props.processSection?.type?.title == 'Blue' ? styles.contentBlue : ''
                  }`}
                >
                  <Heading variant="h4">{tile.title}</Heading>
                  {props.processSection?.type?.title == 'Default' ? (
                    <Paragraph className={styles.textBloc} variant="small">
                      {tile.description}
                    </Paragraph>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
