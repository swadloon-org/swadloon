import { MarkdownRenderer } from '@newrade/core-gatsby-ui/src';
import { BoxV2, CommonComponentProps, Heading, Label, ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { isIOS } from 'react-device-detect';
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

  // TODO: create indicator component
  const renderNumberIndicator = (index: number) => {
    return (
      <div style={{ position: 'absolute', marginLeft: -9, top: 0 }}>
        <Label
          style={{
            position: 'absolute',
            left: 0,
            width: 32,
            height: 32,
            top: isIOS ? 0 : 2, // don't ask me why
            bottom: '0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variantLevel={TEXT_LEVEL.primaryReversed}
        >
          {index}
        </Label>
        <svg preserveAspectRatio="xMidYMid meet">
          <circle r={16} cx={16} cy={16} fill={cssTheme.colors.colors.primary[700]}></circle>
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
                <b style={{ fontWeight: 500 }}>{step?.title}</b>

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
    <BoxV2 className={`${styles.wrapper}`}>
      <Stack gap={[cssTheme.sizing.var.x7]}>
        <Stack gap={[cssTheme.sizing.var.x6]}>
          <Heading style={{ maxWidth: 600 }}>{section.title}</Heading>

          <MarkdownRenderer style={{ color: cssTheme.colors.colorIntents.secondaryText }}>
            {section.text?.childMdx?.body}
          </MarkdownRenderer>
        </Stack>

        <ul className={styles.grid}>{renderListItems(steps)}</ul>
      </Stack>
    </BoxV2>
  );
};
