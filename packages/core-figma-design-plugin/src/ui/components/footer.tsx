import React from 'react';

import { LABEL_SIZE, Variant } from '@newrade/core-design-system';
import { BoxV2, Label } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { clientEnv } from '../../../types/dot-env-client.js';

import * as styles from './footer.css.js';

type Props = {};

export const Footer: React.FC<Props> = (props) => {
  return (
    <BoxV2 padding={[sizeVars.x1]} className={styles.footer}>
      <Label variant={LABEL_SIZE.xSmall} variantLevel={Variant.tertiary}>
        Swadloon Figma Plugin - v{clientEnv.APP_VERSION}
      </Label>
    </BoxV2>
  );
};
