import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './process-section.treat';
import { Heading } from '../ui/heading';
import { Paragraph } from '../ui/paragraph';
import { Label } from '../ui/label';
import { LABEL } from '@newrade/core-design-system-old';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';

type OwnProps = SectionFragment & SectionProps & {};

export const Process: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variants = props?.type?.name as SECTION_TYPE.PROCESS_PRIMARY | SECTION_TYPE.PROCESS_SECONDARY;
  const sectionStyle = variants === SECTION_TYPE.PROCESS_PRIMARY ? styles.Default : styles.Blue;

  return (
    <div className={`${styles.wrapper} ${sectionStyle}`}>
      <div className={`${styles.container}`}>
        <RenderTitleHighlight className={styles.title} title={props?.title} titleHighlight={props?.titleHighlight} />
        <div className={styles.content}>
          {/* <div className={styles.line}></div> */}
          {props?.processStep?.map((tile: any, index: number) => {
            return (
              <div className={`${styles.tileProcess}`} key={tile?.id}>
                <div className={styles.blocNumber}>
                  <div className={styles.circle}>
                    <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                      {`${index < 9 ? '0' : ''}${index + 1}`}
                    </Label>
                  </div>
                </div>
                <div
                  className={`${styles.blocContent}  ${
                    variants == SECTION_TYPE.PROCESS_SECONDARY ? styles.contentBlue : ''
                  }`}
                >
                  <Heading className={`${styles.blocTitle}`} variant="h4">
                    {tile?.title}
                  </Heading>
                  {variants == SECTION_TYPE.PROCESS_PRIMARY ? (
                    <Paragraph variant="small">{tile?.description?.description}</Paragraph>
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
