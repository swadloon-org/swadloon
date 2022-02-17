import React from 'react';

import { title } from 'case';

import { HEADING } from '@newrade/core-design-system';

import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { Heading } from '../text/heading';
import { sizeVars, typographyVars } from '../theme';
import { getCSSVarValue } from '../utilities-browser/css-variables.utilities';

import { sampleText } from './unicode-text';

import * as styles from './font-sans.css';

type Props = {};

export const FontSans: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>{title(getCSSVarValue(typographyVars.fonts.sans))}</Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]}>
          <div className={`${styles.letters} ${styles.lettersSans}`}>Aa</div>
          <div className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSans}`}>
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSans}`}>Aa</div>
        </Cluster>

        <p className={`${styles.paragraphSans}`}>{sampleText}</p>
      </Stack>
    </Stack>
  );
};
