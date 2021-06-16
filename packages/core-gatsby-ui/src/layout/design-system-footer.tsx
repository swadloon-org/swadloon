import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  CommonComponentProps,
  Paragraph,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './design-system-footer.treat';

type Props = CommonComponentProps & {};

export const DesignSystemFooter: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({ id, style, className, classNames: [styles.wrapper] });

  return (
    <footer {...commonProps}>
      <div className={styles.content}>
        <Paragraph variant={PARAGRAPH_SIZE.xSmall} variantLevel={Variant.secondary}>
          Edit this page
        </Paragraph>
      </div>
    </footer>
  );
};
