import React from 'react';

import { title } from 'case';

import { HEADING } from '@newrade/core-design-system';

import { Cluster } from '../layout/cluster.js';
import { Stack } from '../layout/stack.js';
import { Heading } from '../text/heading.js';
import { sizeVars, typographyVars } from '../theme.js';
import { getCSSVarValue } from '../utilities-browser/css-variables.utilities.js';

import * as styles from './font-showcase.css.js';
import { sampleText } from './unicode-text.js';

type Props = {};

export const FontShowcase: React.FC<Props> = (props) => {
  const serifFonts = getCSSVarValue(typographyVars.fonts.serif);
  const monoFonts = getCSSVarValue(typographyVars.fonts.monospace);
  const sansFonts = getCSSVarValue(typographyVars.fonts.sans);
  const sansAlternateFonts = getCSSVarValue(typographyVars.fonts.sansAlternate);

  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>
          {'Sans'} - {title(sansFonts)}
        </Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x3]}>
          <div className={`${styles.letters} ${styles.lettersSans}`}>Aa</div>
          <div className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSans}`}>
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSans}`}>Aa</div>
        </Cluster>

        <p className={`${styles.paragraphSans}`}>{sampleText}</p>
      </Stack>

      {sansFonts !== sansAlternateFonts ? (
        <Stack className={styles.wrapper} gap={[sizeVars.x3]}>
          <Heading variant={HEADING.h4}>
            {'Sans Alternate'} - {title(sansAlternateFonts)}
          </Heading>

          <Cluster justifyContent={['flex-start']} gap={[sizeVars.x3]}>
            <div className={`${styles.letters} ${styles.lettersSansAlternate}`}>Aa</div>
            <div
              className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSansAlternate}`}
            >
              Aa
            </div>
            <div
              className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSansAlternate}`}
            >
              Aa
            </div>
          </Cluster>

          <p className={`${styles.paragraphSansAlternate}`}>{sampleText}</p>
        </Stack>
      ) : null}

      <Stack className={styles.wrapper} gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>
          {'Serif'} - {title(serifFonts)}
        </Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x3]}>
          <div className={`${styles.letters} ${styles.lettersSansSerif}`}>Aa</div>
          <div className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSansSerif}`}>
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSansSerif}`}>
            Aa
          </div>
        </Cluster>

        <p className={`${styles.paragraphSerif}`}>{sampleText}</p>
      </Stack>

      <Stack className={styles.wrapper} gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>
          {'Mono'} - {title(monoFonts)}
        </Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x3]}>
          <div className={`${styles.letters} ${styles.lettersSansMono}`}>Aa</div>
          <div className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSansMono}`}>
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSansMono}`}>
            Aa
          </div>
        </Cluster>

        <p className={`${styles.paragraphMono}`}>{sampleText}</p>
      </Stack>
    </Stack>
  );
};
