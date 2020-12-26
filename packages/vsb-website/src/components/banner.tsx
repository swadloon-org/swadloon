import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './banner.treat';

type OwnProps = SectionFragment;

export const Banner: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
