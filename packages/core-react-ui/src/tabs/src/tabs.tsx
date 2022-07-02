import React, { ButtonHTMLAttributes, useRef } from 'react';

import { LABEL_SIZE, TabAs, TabProps, TEXT_STYLE } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';
import { Label } from '../text/label.js';

import * as styles from './tabs.css.js';

type TabsProps = PrimitiveProps<'button'>;

/**
 * Used to wrap Tabs and their TabContent
 * @version 1
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  return <Primitive ref={ref} classNames={[styles.tabs]} {...props} />;
});

/**
 * Used to wrap Tabs and their TabContent
 * @version 1
 */
export const TabList = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  return <Primitive ref={ref} classNames={[styles.tabList]} role={'tablist'} {...props} />;
});

type TabContentProps = PrimitiveProps<'div'>;

/**
 * Used to wrap a tab content
 * @version 1
 */
export const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>((props, ref) => {
  return <Primitive ref={ref} classNames={[styles.tabContent]} role={'tabpanel'} {...props} />;
});

type TabCompProps = PrimitiveProps<'div'> &
  ButtonHTMLAttributes<any> &
  Pick<TabProps, 'icon' | 'role' | 'size' | 'state' | 'variant'> & {
    as?: TabAs;
  } & {
    selected?: boolean;
    disabled?: boolean;
  };

/**
 * Tab component
 * @version 1
 * @todo as 'button' is probably better
 * @todo disabled state
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabCompProps>(
  ({ as, AsElement, size, state, disabled, selected, icon, children, ...props }, forwardedRef) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;

    return (
      <Primitive<'button'>
        ref={ref}
        classNames={[styles.tab, styles.primary, styles.medium]}
        disabled={disabled}
        role={'tab'}
        aria-selected={selected}
        tabIndex={-1}
        {...props}
      >
        <Label variantDisplay={'inline'} textStyle={TEXT_STYLE.bold} variant={LABEL_SIZE.small}>
          {children}
        </Label>
      </Primitive>
    );
  }
);
