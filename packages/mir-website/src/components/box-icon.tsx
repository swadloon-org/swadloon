import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box-icon.treat';
import { Heading } from './heading';
import { Illustration } from './illustration';
interface OwnProps {
  // variant: 'Default' | 'Reversed';
  icon: string;
  selected?: boolean;
}

export const BoxIcon: React.FC<OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${styles[props.selected ? 'Default' : 'Reversed']}`} onClick={props.onClick}>
      <div className={styles.container}>
        <Illustration className={styles.icon} width={50} height={50} name={`Illustration/${props.icon}`}></Illustration>
        <Heading className={styles.title} variant="h4">
          {props.children}
        </Heading>
      </div>
    </div>
  );
};
