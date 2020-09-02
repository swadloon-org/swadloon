import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-tile.treat';

import { Heading } from '../heading';
import { Illustration } from '../illustration';
import { Paragraph } from '../paragraph';
import { GraphCms_InfoTile, Maybe, GraphCms_InfoSectionType } from '../../../types/graphql-types';

type OwnProps = {
  illustration?: string | null;
  className?: string;
  variant?: Maybe<GraphCms_InfoSectionType | 'borderWhite'>;
} & Pick<GraphCms_InfoTile, 'title' | 'text' | 'illustration'>;

export const InfoTile: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${props.className || ''} ${styles.wrapper} ${props.variant ? styles[props.variant] : ''}`}>
      <Illustration
        name={'Illustration/IllustrationRoundedRectangle'}
        className={`${styles.backgroundIllustration}`}
        preserveAspectRatio="xMidYMid meet"
        width={'100%'}
        height={'100%'}
      />

      <div className={`${styles.content}`}>
        {props.illustration ? (
          <Illustration
            className={`${styles.illustration}`}
            name={`Illustration/${props.illustration}`}
            width={42}
            height={42}
          />
        ) : null}
        <Heading variant={'h3'}>{props.title}</Heading>
        <Paragraph variant={'small'} className={styles.text}>
          {props.text}
        </Paragraph>
      </div>
    </div>
  );
};
