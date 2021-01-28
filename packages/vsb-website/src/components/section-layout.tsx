import { BoxV2, Center, CommonComponentProps, getMergedClassname, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-layout.treat';

type Props = CommonComponentProps & {
  variant?: 'primary' | 'secondary';
  variantLayout?: 'center' | 'fullwidth' | 'banner';
};

export const SectionLayout: React.FC<Props> = ({
  id,
  style,
  className,
  variant,
  variantLayout = 'center',
  children,
  ...props
}) => {
  /**
   * Styling
   */
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className, variant ? styles[variant] : '']);
  const { cssTheme } = useTreatTheme();

  /**
   * Layout banner
   */
  if (variantLayout === 'banner') {
    return (
      <BoxV2 id={id} style={style} className={classNames} as={'section'}>
        {children}
      </BoxV2>
    );
  }

  /**
   * Layout fullwidth
   */
  if (variantLayout === 'fullwidth') {
    return (
      <BoxV2
        id={id}
        style={style}
        className={classNames}
        as={'section'}
        padding={[cssTheme.sizing.var.x7, 0]}
        justifyContent={['center']}
      >
        {children}
      </BoxV2>
    );
  }

  /**
   * Layout centered
   */
  return (
    <Center id={id} style={style} className={classNames} as={'section'}>
      <BoxV2 padding={[cssTheme.sizing.var.x7, 0]} justifyContent={['center']}>
        {children}
      </BoxV2>
    </Center>
  );
};
