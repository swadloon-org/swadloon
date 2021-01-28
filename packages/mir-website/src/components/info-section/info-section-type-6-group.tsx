import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-6-group.treat';

import { InfoSectionType6 } from './info-section-type-6';
import { SectionFragment } from '../../../types/graphql-types';

type OwnProps = SectionFragment;

export const InfoSectionType6Group: React.FC<OwnProps> = (props) => {
  const hasChilds = !!props?.subSections?.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {props?.children}
      {hasChilds
        ? props?.subSections?.map((section, index) => {
            return <InfoSectionType6 key={index} {...section} />;
          })
        : null}
    </div>
  );
};
