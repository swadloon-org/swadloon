import React, { HtmlHTMLAttributes, AllHTMLAttributes } from 'react';
import { Label } from './label';
import { useStyles } from 'react-treat';
import * as styleRefs from './tab.treat';
import { LABEL } from 'core-design-system';
interface OwnProps {
  size: 'small';
  selected: boolean;
}

export const Tab: React.FC<OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div
      className={`${styles.wrapper} ${styles[props.size]} ${styles[props.selected ? 'selected' : 'unselected']}`}
      onClick={props.onClick}
    >
      <Label variant={LABEL.smallBoldUppercase}>{props.children}</Label>
    </div>
  );
};
