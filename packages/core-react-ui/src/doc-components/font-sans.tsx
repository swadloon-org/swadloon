import React from 'react';
import { useStyles } from 'react-treat';

import { title } from 'case';

import { HEADING } from '@newrade/core-design-system';

import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { Heading } from '../text/heading';
import { sizeVars, typographyCSS } from '../theme';

import * as styleRefs from './font-sans.treat';

type Props = {};

const sampleText = `
ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*12345678910 $ 1 000 000 123,94$`;

export const FontSans: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>{title(typographyCSS.fonts.sans)}</Heading>

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
