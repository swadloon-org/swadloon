import React, { useState } from 'react';
import styles from './tab.module.scss';

interface OwnProps {
  name: 'tab';
  size: 'small';
  state: 'default' | 'selected';
}

export const Tab: React.FC<OwnProps> = (props) => {
  const clicked: boolean = false;
  const [clicks, setClicks] = useState(props.state);

  // const handleClick (nbclick:Number) => {
  //     console.log(nbclick);
  // };

  return (
    <div className={`${styles[props.name]} ${styles[props.size]} ${styles[props.state]}`}>
      {/* <div onClick={handleClick(+1)}> */}
      {props.children}
      {/* </div> */}
    </div>
  );
};
