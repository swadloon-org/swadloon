import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase, SectionProps } from '@newrade/core-gatsby-ui/src';
import {
  CommonComponentProps,
  Label,
  ListItem,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { BlockAPI, SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { isIOS } from 'react-device-detect';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-steps.treat';

type Props = CommonComponentProps & SectionProps;

export const CustomSectionSteps = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.center,
        padding = SectionPadding.large,
        blocks,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.center,
        padding: SectionPadding.large,
      },
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);
    const { cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.wrapper],
      ...props,
    });

    if (!blocks?.length) {
      return null;
    }

    const textBlocks = blocks.filter((block) => block?.type === 'text');
    const firstBlockText = textBlocks[0];
    const stepBlocks = blocks.filter((block) => block?.type === 'customStep');

    const renderNumberIndicator = (index: number) => {
      return (
        <div style={{ position: 'absolute', marginLeft: -6, top: 0 }}>
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
            variantLevel={Variant.primaryReversed}
          >
            {index}
          </Label>
          <svg preserveAspectRatio="xMidYMid meet">
            <circle r={16} cx={16} cy={16} fill={cssTheme.colors.colors.primary[700]}></circle>
          </svg>
        </div>
      );
    };

    const renderListItems = (blockSteps?: (BlockAPI | null | undefined)[]) => (
      <>
        {blockSteps?.map((step, index) => {
          return (
            <Stack key={step?.id} gap={[cssTheme.sizing.var.x3]}>
              <ListItem
                variantSize={PARAGRAPH_SIZE.large}
                Icon={renderNumberIndicator(index + 1)}
                variantIcon={'icon'}
              >
                <BlockMarkdown injectMarkdownStyles={false} className={styles.text}>
                  {step?.text?.childMdx?.body}
                </BlockMarkdown>
              </ListItem>
            </Stack>
          );
        })}
      </>
    );

    return (
      <SectionBase
        ref={ref}
        section={{
          variant,
          baseLayout,
          padding,
        }}
        {...commonProps}
      >
        <Stack gap={[cssTheme.sizing.var.x7]}>
          <Stack gap={[cssTheme.sizing.var.x6]}>
            <BlockMarkdown>{firstBlockText?.text?.childMdx?.body}</BlockMarkdown>

            <ul className={styles.grid}>{renderListItems(stepBlocks)}</ul>
          </Stack>
        </Stack>
      </SectionBase>
    );
  }
);
