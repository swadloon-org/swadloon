import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Accordions } from '../accordions';
import { Tags } from '../tags';
import * as styleRefs from './job-section.treat';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';

type OwnProps = {
  variant: 'candidate' | 'employer';
  title?: string | null;
  titleHighlight?: string | null;
};

export const JobSection: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  const [selectedAccordionsIndex, setSelectedAccordionsIndex] = useState<number>(1);

  return (
    <div className={`${styles.wrapper}`}>
      <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

      <div className={styles.container}>
        <div className={styles.accordions}>
          <Accordions
            variant="Default"
            selected={1 === selectedAccordionsIndex}
            onClick={() => {
              setSelectedAccordionsIndex(1);
            }}
          >
            Postes administratifs
          </Accordions>
        </div>
        <div className={styles.accordions}>
          <Accordions
            variant="reversed"
            selected={2 === selectedAccordionsIndex}
            onClick={() => {
              setSelectedAccordionsIndex(2);
            }}
          >
            Postes techniques
          </Accordions>
        </div>

        <div className={styles.content}>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="01">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="02">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="03">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="04">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="05">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="06">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="07">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="08">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="09">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="10">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="11">Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags numberIndex="12">Label LabelLabel LabelLabel Label </Tags>
          </div>
        </div>
      </div>
    </div>
  );
};
