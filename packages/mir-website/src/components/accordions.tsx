import { ICON_SIZE } from 'core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Icon } from '../ui/icon';
import * as styleRefs from './accordions.treat';
import { Heading } from './heading';

type OwnProps = {
  selected?: boolean;
  variant: 'Default' | 'reversed';
};
export const Accordions: React.FC<
  HTMLAttributes<any> & OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }
> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div
      className={`${styles.wrapper} ${styles[props.variant]} ${styles[props.selected ? 'selected' : 'unselected']}`}
      onClick={props.onClick}
    >
      <div className={styles.container}>
        <Heading className={`${styles.label}`} variant="h4">
          {props.children}
        </Heading>

        <Icon size={ICON_SIZE.large} icon={props.selected ? 'IconMinusCircle' : 'IconPlusCircle'} />
      </div>
    </div>
  );
};
