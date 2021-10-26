import { Variant } from '@newrade/core-design-system';
import React from 'react';
import { globalThemeReversed } from '../global/global-theme-classnames';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { AsTypes, PrimitiveProps } from './primitive.props';

const NAME = 'Primitive';

/**
 * Augment React's forwardRef to accept generic argument
 */
declare module 'react' {
  /**
   * Forwarded Component that accepts generic props
   *
   * Note: It is not possible to have an interface / fn that stays generic while having props like `displayName`
   *
   * Workaround: `(as React.NamedExoticComponent)`
   */
  type GenericForwardedComponent<T, P = {}> = (
    props: P & React.RefAttributes<T>
  ) => React.ReactElement | null;

  /**
   * Augmentation of the forwardRef function
   */
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): GenericForwardedComponent<T, P>;
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

(PrimitiveFn as React.NamedExoticComponent).displayName = NAME;

export const Primitive = React.forwardRef(PrimitiveFn);
