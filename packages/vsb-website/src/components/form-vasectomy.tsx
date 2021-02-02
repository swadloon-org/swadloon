import { CommonComponentProps, Heading } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './form-vasectomy.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const FormVasectomy: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <Heading>Formulaire</Heading>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/4DDfO2NdGE0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <pre>{JSON.stringify(section?.name, null, 2)}</pre>
    </div>
  );
};
