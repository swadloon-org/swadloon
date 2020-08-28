import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

// import styles from './button.module.scss';
import * as styleRefs from './accordions.treat';

import { Heading } from './heading';

import MinusCircle from './illustrations/Illustration/MinusCircle.svg';
import PlusCircle from './illustrations/Illustration/PlusCircle.svg';
import { Illustration } from './illustration';

type OwnProps = {
  icon?: string;
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

        <Illustration
          className={`${styles.illustration}`}
          name={`Icon/${props.selected ? 'MinusCircle' : 'PlusCircle'}`}
          width={24}
          height={24}
        ></Illustration>
      </div>
    </div>
  );
};
