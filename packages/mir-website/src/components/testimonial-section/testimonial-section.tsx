import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './testimonial-section.treat';

import { Heading } from '../heading';
import { Illustration } from '../illustration';
import { Paragraph } from '../paragraph';
import { Label } from '../label';

type Post = {
  contentText: string;
  name: string;
  job: string;
};

type OwnProps = {
  title: string;
  post: Post[];
};

export const Testimonial: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={`${styles.wrapper}`}></div>;
};
