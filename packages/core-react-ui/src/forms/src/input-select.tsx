import React, { useEffect, useState } from 'react';

import { ICON, InputSize, InputValidityState, Variant } from '@newrade/core-design-system';

import { IconComp } from '../icons/icon.js';
import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './input.css.js';
import { InputSelectProps } from './input.props.js';

type Props = InputSelectProps;

const defaultProps: Props = {
  variant: Variant.primary,
  size: InputSize.medium,
  validity: InputValidityState.neutral,
};

export const InputSelect = React.memo(
  React.forwardRef<HTMLSelectElement, Props>(function InputText(
    {
      id,
      style,
      className,
      variant = defaultProps.variant,
      size = defaultProps.size,
      icon,
      Icon,
      validity = defaultProps.validity,
      loading = false,
      disabled = false,
      value,
      onChange,
      ...props
    },
    ref
  ) {
    const wrapperClassNames = styles.variants({
      variant: variant,
      size: size,
    });
    const inputClassNames = styles.styleVariants({
      variant: variant,
      size: size,
      icon: icon && Icon ? 'left' : undefined,
      validity: validity,
      disabled: disabled,
    });
    const iconRightClassNames = styles.iconVariants({
      position: 'right',
      disabled: disabled,
    });
    const iconLeftClassNames = styles.iconVariants({
      position: 'left',
      disabled: disabled,
    });
    const classNames = getMergedClassname([className, styles.text, inputClassNames]);
    const renderedId = id || props.name || '';

    //
    // not sure why but passing value from the parent
    // won't always rerender the select element correctly
    //
    const [selectValue, setSelectValue] = useState<string | number>('');

    useEffect(() => {
      if (value !== selectValue) {
        setSelectValue(value as string);
      }
    }, [value, selectValue]);

    function defaultHandleOnChange(event: React.ChangeEvent<HTMLSelectElement>) {}

    return (
      <div className={wrapperClassNames}>
        {/* optional icon */}
        {icon && Icon ? (
          <IconComp name={Icon} classNames={[styles.icon, iconLeftClassNames]}></IconComp>
        ) : null}
        {/* optional icon */}
        <select
          ref={ref}
          id={renderedId}
          style={style}
          className={classNames}
          disabled={disabled}
          value={selectValue}
          onChange={onChange || defaultHandleOnChange}
          {...props}
        ></select>
        {/* chevron */}
        <IconComp
          name={ICON.CHEVRON_DOWN}
          classNames={[styles.icon, iconRightClassNames]}
        ></IconComp>
      </div>
    );
  })
);
