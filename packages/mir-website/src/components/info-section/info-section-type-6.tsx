import React from 'react';
import { useStyles } from 'react-treat';
import { Heading } from '../ui/heading';
import { Illustration } from '../ui/illustration';
import { Paragraph } from '../ui/paragraph';

import * as styleRefs from './info-section-type-6.treat';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';

type OwnProps = SectionFragment;

export const InfoSectionType6: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as
    | SECTION_TYPE.TYPE_6_PRIMARY
    | SECTION_TYPE.TYPE_6_SECONDARY
    | SECTION_TYPE.TYPE_6_TERTIARY;
  function sectionStyle() {
    switch (variant) {
      case SECTION_TYPE.TYPE_6_PRIMARY: {
        return styles.type6Primary;
      }
      case SECTION_TYPE.TYPE_6_SECONDARY: {
        return styles.type6Secondary;
      }
      case SECTION_TYPE.TYPE_6_TERTIARY: {
        return styles.type6Tertiary;
      }
    }
  }

  return (
    <div className={`${styles.wrapper} ${sectionStyle()}`} key={props.title}>
      <img className={`${styles.illustration}`} src={`${props.illustration.file.url}`} />

      <Heading variant="h3" className={styles.title}>
        {props.title}
      </Heading>
      <Paragraph variant={'small'} className={styles.text}>
        {props.text.text}
      </Paragraph>
    </div>
  );
};
