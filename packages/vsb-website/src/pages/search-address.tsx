import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './search-address.treat';

type OwnProps = {};

export const SearchResult: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={`${styles.wrapper}`}></div>;
};
