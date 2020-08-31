import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-skills.treat';

import { Tags } from '../tags';
import { Accordions } from '../accordions';

import { Heading } from '../heading';
import { SectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';
// import styles from './info-section.module.scss';

type OwnProps = Partial<SectionModelQuery>;

export const InfoSkills: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <div className={styles.container}>
        <div className={styles.accordions}>
          <Accordions variant="Default" icon="PlusCircle" onClick={helloworld}>
            Postes administratifs
          </Accordions>
        </div>
        <div className={styles.accordions}>
          <Accordions variant="reversed" icon="PlusCircle" onClick={helloworld}>
            Postes techniques
          </Accordions>{' '}
        </div>

        <div className={styles.content}>
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>{' '}
          <div className={styles.tagsUnique}>
            <Tags>Label LabelLabel LabelLabel Label </Tags>
          </div>
        </div>
      </div>
    </div>
  );
  function helloworld(value: any) {
    console.log(value.target.name);
  }
};
