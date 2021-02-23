import {
  BoxV2,
  CommonComponentProps,
  getMergedClassname,
  Stack,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockMarkdown } from '../blocks/block-markdown';
import * as styleRefs from './section.treat';

type Props = CommonComponentProps & {
  variant?: 'primary' | 'secondary';
};

export const SectionPlanSelection = React.forwardRef<any, Props>(
  ({ id, style, className, variant, children, ...props }, ref) => {
    /**
     * Styling
     */
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([styles.wrapper, className, variant ? styles[variant] : '']);
    const { cssTheme } = useTreatTheme();

    return (
      <Stack>
        <BoxV2>
          <BlockMarkdown></BlockMarkdown>
        </BoxV2>

        <Switcher>
          <BlockMarkdown></BlockMarkdown>

          <BlockMarkdown></BlockMarkdown>

          <BlockMarkdown></BlockMarkdown>
        </Switcher>
      </Stack>
    );
  }
);
