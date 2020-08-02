import React from 'react';
import styles from './illustartion.module.scss';

import Desktop from '../illustrations/Illustration/Desktop.svg';
import Factory from '../illustrations/Illustration/Factory.svg';
import RoundedRectangle from '../illustrations/Illustration/RoundedRectangle.svg';
import Square from '../illustrations/Illustration/Square.svg';
import Tools from '../illustrations/Illustration/Tools.svg';

type ThisProps = {
  name: 'Desktop' | 'Factory' | 'RoundedRectangle' | 'Square' | 'Tools';
};

export const Illustration: React.FC<ThisProps> = (props) => {
  return (
    <div>
      <img src="../illustrations/Illustration/Tools.svg" alt="props.name" />
    </div>
  );
};
