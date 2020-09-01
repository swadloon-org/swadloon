import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { ICON_SIZE } from 'core-design-system';

import * as styleRefs from './InfoSectionCheckLabel.treat';

import { Label } from './label';

import { Illustration } from './illustration';
import { LABEL } from 'core-design-system';
import { Icon } from '../components-ui/icon';

type OwnProps = {
  icon: string;
  size: 'small' | 'medium' | 'large';
};

export const InfoSectionCheckLabel: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconCheck}>
        <Icon icon={props.icon} size={ICON_SIZE[props.size]}></Icon>
      </div>
      <Label className={`${styles.label}`} variant={LABEL.smallRegular}>
        {props.children}
      </Label>
    </div>
  );
};
