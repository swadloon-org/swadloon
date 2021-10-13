import { Variant } from '@newrade/core-design-system';
import React from 'react';
import { globalThemeReversed } from '../global/global-theme-classnames';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { AsTypes, PrimitiveProps } from './primitive.props';

const NAME = 'Primitive';

// augment React's forwardRef to accept generic
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type Props<As extends AsTypes = 'div'> = PrimitiveProps<As> & { variant?: Variant | null };

/**
 * Base component which avoid repeating the same boilerplate for most components.
 *
 * It forwards the refs, normalize id, class names, and support both `as` and `AsElement`
 */
function PrimitiveFn<As extends AsTypes = 'div', ElementRef extends Element = any>(
  { id, style, className, classNames = [], as, AsElement, theme, variant, ...props }: Props<As>,
  forwardedRef: React.ForwardedRef<ElementRef>
) {
  const mergedTheme = theme ? theme : variant?.match(/reversed/i) ? 'reversed' : 'normal';

  // merge props (normalize id, combine classNames...)
  // @ts-ignore
  const commonProps = useCommonProps<As>({
    id,
    style,
    className,
    classNames: [
      ...classNames,
      // set the correct theme class to reverse components if they are set to a reversed variant
      mergedTheme === 'reversed' ? globalThemeReversed : '',
    ],
    ...props,
  });

  const mergedProps = { ...commonProps, ref: forwardedRef };

  // when a AsElement node is passed, we clone it and spread the props to it
  const ClonedComponent = AsElement
    ? React.cloneElement(AsElement as React.ReactElement, mergedProps)
    : null;

  if (ClonedComponent) {
    return ClonedComponent;
  }

  return React.createElement(as || 'div', mergedProps);
}

PrimitiveFn.displayName = NAME;

export const Primitive = React.forwardRef(PrimitiveFn);
