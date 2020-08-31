import { ICON_SIZE, VIEWPORT } from 'core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Icon } from '../components-ui/icon';
import * as styleRefs from './accordions.treat';
import { Heading } from './heading';
import { useViewportBreakpoint } from '../hooks/use-viewport.hook';

type OwnProps = {
  icon?: string;
  selected?: boolean;
  variant: 'Default' | 'reversed';
};
export const Accordions: React.FC<
  HTMLAttributes<any> & OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }
> = (props) => {
  const styles = useStyles(styleRefs);
  // const { viewport } = useViewportBreakpoint();

  return (
    <div
      className={`${styles.wrapper} ${styles[props.variant]} ${styles[props.selected ? 'selected' : 'unselected']}`}
      onClick={props.onClick}
    >
      <div className={styles.container}>
        <Heading className={`${styles.label}`} variant="h4">
          {props.children}
        </Heading>

        {/* <Icon
          size={viewport === VIEWPORT.DESKTOP ? ICON_SIZE.large : ICON_SIZE.small}
          icon={props.selected ? 'MinusCircle' : 'PlusCircle'}
        /> */}

        <Icon size={ICON_SIZE.large} icon={props.selected ? 'MinusCircle' : 'PlusCircle'} />
      </div>
    </div>
  );
};
