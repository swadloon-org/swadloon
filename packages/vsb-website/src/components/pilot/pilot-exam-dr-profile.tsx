import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import * as styleRefs from './pilot-exam-dr-profile.treat';

type OwnProps = SectionFragment;

export const PilotExamDrProfile: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
