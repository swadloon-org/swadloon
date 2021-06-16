import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase, SectionProps } from '@newrade/core-gatsby-ui/src';
import { CommonComponentProps, Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { BlockCostItem } from '../blocks/block-cost-items';

type Props = CommonComponentProps & SectionProps & {};

export const CustomCostItems = React.forwardRef<any, Props>(
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
    const { cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({ id, style, className, ...props });

    if (!blocks?.length) {
      return null;
    }

    const textBlocks = blocks.filter((block) => block?.type === 'text');
    const firstBlockText = textBlocks[0];
    const lastBlockText = textBlocks[1];
    const costItems = blocks.filter((block) => block?.type === 'customCostItem');

    return (
      <SectionBase
        ref={ref}
        {...commonProps}
        section={{
          variant,
          baseLayout,
          padding,
        }}
      >
        <Stack gap={[cssTheme.sizing.var.x6]}>
          <BlockMarkdown>{firstBlockText?.text?.childMdx?.body}</BlockMarkdown>

          <Stack gap={[cssTheme.sizing.var.x5]}>
            {costItems.map((item, index) => {
              if (costItems.length - 1 == index) {
                return (
                  <BlockCostItem
                    key={index}
                    style={{ paddingBottom: `${cssTheme.sizing.var.x5}` }}
                    block={item}
                  ></BlockCostItem>
                );
              } else {
                return <BlockCostItem key={index} block={item}></BlockCostItem>;
              }
            })}
          </Stack>

          <BlockMarkdown>{lastBlockText?.text?.childMdx?.body}</BlockMarkdown>
        </Stack>
      </SectionBase>
    );
  }
);
