import { BoxV2, Center, CommonComponentProps, getMergedClassname, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-layout.treat';

type Props = CommonComponentProps & {
  variant?: 'primary' | 'secondary';
};

export const SectionLayout: React.FC<Props> = ({ id, style, className, variant, children, ...props }) => {
  /**
   * Styling
   */
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className, variant ? styles[variant] : '']);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * Layout
   */
  return (
    <Center id={id} style={style} className={classNames} as={'section'}>
      <BoxV2 padding={[cssTheme.sizing.var.x7, 0]} justifyContent={['center']}>
        {children}
      </BoxV2>
    </Center>
  );
};
