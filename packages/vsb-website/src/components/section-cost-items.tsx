import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
import { CommonComponentProps, Label, Paragraph, Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { LABEL_SIZE } from '../../../core-design-system/src';
import * as styleRefs from './section-cost-items.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps;

export const SectionCost: React.FC<Props> = ({ id, style, className, section, subSections, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const classNames = [styles.wrapper];
  const commonProps = useCommonProps({ ...props, classNames });

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <BlockMarkdown style={{ maxWidth: 800 }}>{section?.text?.childMdx?.body}</BlockMarkdown>

      {section?.costItems?.length ? (
        <Stack>
          {section?.costItems?.map((item, index) => {
            if (/Renouvellement/gi.test(item?.title || '')) {
              return (
                <div className={styles.costItem} key={index}>
                  <Label variant={LABEL_SIZE.medium} className={styles.costItemLabel}>
                    {item?.title}
                  </Label>
                  <Label variant={LABEL_SIZE.medium}>{`-`}</Label>
                </div>
              );
            }

            return (
              <div className={styles.costItem} key={index}>
                <Label variant={LABEL_SIZE.medium} className={styles.costItemLabel}>
                  {item?.title}
                </Label>
                <Label variant={LABEL_SIZE.medium}>{`${item?.price} $`}</Label>
              </div>
            );
          })}
        </Stack>
      ) : null}

      <Paragraph>
        <sup id={'1'}>1</sup> Contactez-nous pour obtenir les détails et prix, ceux-ci varient selon les tests dont vous
        avez besoin.
        <br />
        <br />
        Notez également que le coût de renouvellement du certificat médical est réduit pour les clients qui font affaire
        avec le Dr Boucher année après année.
      </Paragraph>
    </Stack>
  );
};
