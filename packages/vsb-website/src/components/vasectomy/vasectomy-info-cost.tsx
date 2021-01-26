import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import * as styleRefs from './treat/vasectomy-info-cost.treat';

type OwnProps = SectionFragment;

export const VasectomyInfoCost: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(props.name, null, 2)}</pre>
    </div>
  );
};
