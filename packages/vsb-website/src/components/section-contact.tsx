import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-contact.treat';
import { SectionProps } from './section.props';
import { CommonComponentProps } from '@newrade/core-react-ui';

type Props = CommonComponentProps & SectionProps & {};

export const SectionContact: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <pre>{JSON.stringify(section.name, null, 2)}</pre>
    </div>
  );
};
