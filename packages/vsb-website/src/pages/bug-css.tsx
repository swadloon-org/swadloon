import { getCSSColor, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from '../styles/bug-css.treat';
import * as styleRefs2 from '../styles/no-bug-css.treat';

type Props = {};

export const BugCSS: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);
  const { styles: styles2 } = useStyles(styleRefs2);

  return (
    <>
      <div className={styles.bug}>
        <pre>{getCSSColor(theme.colors.colors.primary[100])}</pre>
      </div>
      <div className={styles2.bug}>
        <pre>{getCSSColor(theme.colors.colors.primary[100])}</pre>
      </div>
    </>
  );
};

export default BugCSS;
