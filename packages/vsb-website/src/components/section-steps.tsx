import { MarkdownRenderer } from '@newrade/core-gatsby-ui/src';
import { BoxV2, CommonComponentProps, Heading, Label, ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { PARAGRAPH_SIZE, TEXT_LEVEL } from '../../../core-design-system/src';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './section-steps.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionSteps: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  if (!(section && section.steps?.length)) {
    return null;
  }

  const steps = section.steps.filter((step) => !!step);

  const renderNumberIndicator = (index: number) => {
    return (
      <div style={{ position: 'absolute', marginLeft: -9 }}>
        <Label
          style={{
            position: 'absolute',
            left: 0,
            width: 32,
            height: 32,
            paddingTop: `11px`,
            textAlign: 'center',
          }}
          variantLevel={TEXT_LEVEL.primaryReversed}
        >
          {index}
        </Label>
        <svg>
          <circle viewBox="0 0 32 32" r={16} cx={16} cy={16} fill={cssTheme.colors.colors.primary[700]}></circle>
        </svg>
      </div>
    );
  };

  const renderListItems = (steps: SectionFragment['steps']) => (
    <>
      {steps?.map((step, index) => {
        return (
          <Stack key={step?.id} gap={[cssTheme.sizing.var.x3]}>
            <ListItem variantSize={PARAGRAPH_SIZE.large} Icon={renderNumberIndicator(index + 1)} variantIcon={'icon'}>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                {step?.title}

                <MarkdownRenderer style={{ color: cssTheme.colors.colorIntents.secondaryText }}>
                  {step?.text?.childMdx?.body}
                </MarkdownRenderer>
              </Stack>
            </ListItem>
          </Stack>
        );
      })}
    </>
  );

  return (
    <BoxV2 className={`${styles.wrapper}`} padding={[cssTheme.sizing.var.x6, 0]}>
      <Stack gap={[cssTheme.sizing.var.x7]}>
        <Heading style={{ maxWidth: 600 }}>{section.title}</Heading>

        <ul className={styles.grid}>{renderListItems(steps)}</ul>
      </Stack>
    </BoxV2>
  );
};
