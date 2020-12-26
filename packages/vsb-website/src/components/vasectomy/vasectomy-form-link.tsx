import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import * as styleRefs from './vasectomy-form-link.treat';

type OwnProps = SectionFragment;

export const VasectomyFormLink: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
