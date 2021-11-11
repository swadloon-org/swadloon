import { HEADING } from '@newrade/core-design-system';
import { Cluster, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './font-sans-alternate.treat';

type Props = {};

const sampleText = `
ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*12345678910 $ 1 000 000 123,94$`;

export const FontSansAlternate: React.FC<Props> = (props) => {
  const { cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);

  return (
    <Stack className={styles.wrapper} gap={[cssTheme.sizing.var.x5]}>
      <Stack className={styles.wrapper} gap={[cssTheme.sizing.var.x3]}>
        <Heading variant={HEADING.h4}>{title(cssTheme.typography.fonts.sansAlternate)}</Heading>

        <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x2]}>
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
