import { Variant } from '@newrade/core-design-system';
import React from 'react';
import { globalThemeReversed } from '../global/global-theme-classnames';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from './primitive.props';

const NAME = 'Primitive';
const DEFAULT_TAG = 'div';

type Props = PrimitiveProps<any> & { variant?: Variant | null };

/**
 * Base component which avoid repeating the same boilerplate for most components.
 *
 * It forwards the refs, normalize id, class names, and support both `as` and `AsElement`
 */
const Primitive = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      classNames = [],
      as = DEFAULT_TAG,
      AsElement,
      theme,
      variant,
      ...props
    },
    forwardedRef
  ) => {
    const mergedTheme = theme ? theme : variant?.match(/reversed/i) ? 'reversed' : 'normal';

    // merge props (normalize id, combine classNames...)
    const commonProps = useCommonProps({
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

    return React.createElement(as, mergedProps);
  }
);

Primitive.displayName = NAME;

export { Primitive };
