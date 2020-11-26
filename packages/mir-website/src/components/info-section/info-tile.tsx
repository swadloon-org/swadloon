import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-tile.treat';

import { Heading } from '../ui/heading';
import { Illustration } from '../ui/illustration';
import { Paragraph } from '../ui/paragraph';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';
import { Variant } from 'framer-motion';

type OwnProps = SectionFragment;
type PassProps = { Variants: SECTION_TYPE };

export const InfoTile: React.FC<OwnProps & PassProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div
      className={`${styles.wrapper} ${
        props?.Variants === SECTION_TYPE.TYPE_4_PRIMARY ? styles.type4Primary : styles.type4Secondary
      }`}
    >
      <Illustration
        name={'Illustration/IllustrationRoundedRectangle'}
        className={`${styles.backgroundIllustration}`}
        preserveAspectRatio="xMidYMid meet"
        width={'100%'}
        height={'100%'}
      />

      <div className={`${styles.content}`}>
        {props?.illustration ? (
          <Illustration
            className={`${styles.illustration}`}
            name={`Illustration/${props?.illustration?.title}`}
            width={42}
            height={42}
          />
        ) : null}

        <Heading variant={'h3'}>{props?.title}</Heading>

        <Paragraph variant={'small'} className={styles.text}>
          {props?.text?.text}
        </Paragraph>
      </div>
    </div>
  );
};
