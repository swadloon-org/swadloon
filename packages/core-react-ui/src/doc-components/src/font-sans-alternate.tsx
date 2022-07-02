import React from 'react';

import { title } from 'case';

import { HEADING } from '@newrade/core-design-system';

import { Cluster } from '../layout/cluster.js';
import { Stack } from '../layout/stack.js';
import { Heading } from '../text/heading.js';
import { sizeVars, typographyVars } from '../theme.js';
import { getCSSVarValue } from '../utilities-browser/css-variables.utilities.js';

import * as styles from './font-sans-alternate.css.js';
import { sampleText } from './unicode-text.js';

type Props = {};

export const FontSansAlternate: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack className={styles.wrapper} gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>
          {title(getCSSVarValue(typographyVars.fonts.sansAlternate))}
        </Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]}>
          <div className={`${styles.letters} ${styles.lettersSansAlternate}`}>Aa</div>
          <div
            className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSansAlternate}`}
          >
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSansAlternate}`}>
            Aa
          </div>
        </Cluster>

        <p className={`${styles.paragraphSansAlternate}`}>{sampleText}</p>
      </Stack>
    </Stack>
  );
};
