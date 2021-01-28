import { CommonComponentProps } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-faq.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionFaq: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(section?.name, null, 2)}</pre>
    </div>
  );
};
