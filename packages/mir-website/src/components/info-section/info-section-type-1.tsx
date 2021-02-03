import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';
import { Paragraph } from '../ui/paragraph';
import * as styleRefs from './info-section-type-1.treat';
import { RenderTitleHighlight } from './info-title-highligh';
import { SectionLinkButton } from './section-link-button';

type OwnProps = SectionFragment;

export const InfoSectionType1: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type?.name as SECTION_TYPE.TYPE_1_NORMAL | SECTION_TYPE.TYPE_1_REVERSED;
  const sectionStyle = variant === SECTION_TYPE.TYPE_1_NORMAL ? styles.styleNormal : styles.styleReversed;

  return (
    <div className={`${styles.wrapper} ${sectionStyle}`}>
      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'medium'} className={styles.text}>
        {props.text?.text}
      </Paragraph>

      {props.link ? (
        <SectionLinkButton
          variant={props.type?.name === SECTION_TYPE.TYPE_1_NORMAL ? 'primaryDefault' : 'primaryReversed'}
          link={props.link}
        />
      ) : null}
    </div>
  );
};
