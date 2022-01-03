import React, { useEffect, useState } from 'react';

import { ICON, InputSize, InputValidityState, Variant } from '@newrade/core-design-system';

import { IconComp } from '../icons/icon';
import { getMergedClassname } from '../utilities/component.utilities';

import { InputSelectProps } from './input.props';

import * as styles from './input.css';

export const InputSelect = React.memo(
  React.forwardRef<HTMLSelectElement, InputSelectProps>(function InputText(
    {
      id,
      style,
      className,
      variant = Variant.primary,
      variantSize = InputSize.medium,
      icon,
      Icon,
      validity = InputValidityState.neutral,
      loading = false,
      disabled = false,
      value,
      onChange,
      ...props
    },
    ref
  ) {
    const wrapperClassNames = styles.getWrapperStyles({
      variant: variant,
      size: variantSize,
    });
    const inputClassNames = styles.getInputStyles({
      variant: variant,
      size: variantSize,
      icon: icon && Icon ? 'left' : undefined,
      validity: validity,
      disabled: disabled,
    });
    const iconRightClassNames = styles.getInputIconStyles({
      position: 'right',
      disabled: disabled,
    });
    const iconLeftClassNames = styles.getInputIconStyles({
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
