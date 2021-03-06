import { Variant } from '@newrade/core-design-system';
import { useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionBase } from './section-base';
import * as styleRefs from './section-showcase.treat';
import { SectionBaseLayout, SectionPadding, SectionProps } from './section.props';

type Props = SectionProps & {
  LeftTextBlock: React.ReactNode;
  LeftBGBlock: React.ReactNode;
  RightTextBlock: React.ReactNode;
  RightBGBlock: React.ReactNode;
};

export const SectionShowcase = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      LeftTextBlock,
      LeftBGBlock,
      RightTextBlock,
      RightBGBlock,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.fullWidth,
        padding = SectionPadding.none,
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
    const commonProps = useCommonProps({ id, style, className, classNames: [styles.wrapper], ...props });

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
        <div className={`${styles.gridSwitch} `}>
          <div className={styles.evenTile}>{LeftBGBlock}</div>

          <div>{RightBGBlock}</div>
          {/* {section?.subSections?.map((item, index: number) => {
            if (!item) {
              return null;
            }

            return (
              <BlockTileLink
                key={index}
                section={item}
                contentClassName={index % 2 === 0 ? styles.evenTile : ''}
              ></BlockTileLink>
            );
          })} */}
        </div>
      </SectionBase>
    );
  }
);
