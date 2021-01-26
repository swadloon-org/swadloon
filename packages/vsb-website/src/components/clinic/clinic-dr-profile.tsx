import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import * as styleRefs from './treat/clinic-dr-profile.treat';

type OwnProps = SectionFragment;

export const ClinicDrProfile: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(props.name, null, 2)}</pre>
    </div>
  );
};
