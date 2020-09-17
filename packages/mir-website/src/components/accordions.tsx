import { ICON_SIZE } from 'core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Icon } from '../ui/icon';
import * as styleRefs from './accordions.treat';
import { Heading } from './heading';
import { Illustration } from './illustration';

type OwnProps = {
  type: 'candidates' | 'employer';
  icon?: string;
  selected?: boolean;
  variant: 'Default' | 'reversed' | 'none'; // only use none on candidates types
};
export const Accordions: React.FC<
  HTMLAttributes<any> & OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }
> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div
      className={`${styles.wrapper} ${styles[props.type]} ${styles[props.variant]} ${
        styles[props.selected && props.variant === 'none' ? 'Default' : 'reversed']
      }`}
      onClick={props.onClick}
    >
      <div className={styles.container}>
        {props.type === 'candidates' ? (
          <Illustration
            className={styles.icon}
            width={50}
            height={50}
            name={`Illustration/${props.icon}`}
          ></Illustration>
        ) : (
          ''
        )}
        <Heading className={`${styles.heading}`} variant="h4">
          {props.children}
        </Heading>
        {props.type === 'employer' ? (
          <Icon size={ICON_SIZE.large} icon={props.selected ? 'IconMinusCircle' : 'IconPlusCircle'} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
