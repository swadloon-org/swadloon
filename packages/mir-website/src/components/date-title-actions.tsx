import React, { HTMLAttributes } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './date-tile-actions.module.scss';
import { Label } from '../components/label';
import { Paragraph } from '../components/paragraph';
import { Heading } from '../components/heading';

type OwnProps = {};

export const DateTileActions: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  return (
    <div className={styles.date_tile_actions}>
      <Label size="small" variant="uppercase"></Label>
      <Heading variant="h4"></Heading>
    </div>
  );
};
