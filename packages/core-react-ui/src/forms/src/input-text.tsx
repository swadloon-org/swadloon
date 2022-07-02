import React, { Suspense } from 'react';

import { InputSize, InputValidityState, Variant } from '@newrade/core-design-system';

import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './input.css.js';
import { InputTextProps } from './input.props.js';
import { InputTextCleaveLazy } from './input-text-cleave.lazy.js';

type Props = InputTextProps;

const defaultProps: Props = {
  variant: Variant.primary,
  size: InputSize.medium,
  validity: InputValidityState.neutral,
};

/**
 * @todo add icon support
 */
export const InputText = React.memo(
  React.forwardRef<HTMLInputElement, Props>(function InputText(
    {
      id,
      style,
      className,
      cleaveProps,
      type = 'text',
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

    const renderedId = id || cleaveProps?.id || props.name || '';

    const CleaveComp = cleaveProps ? (
      <Suspense fallback={''}>
        <div className={wrapperClassNames}>
          <InputTextCleaveLazy
            id={renderedId}
            style={style}
            className={classNames}
            type={cleaveProps.type ? cleaveProps.type : type}
            // @ts-ignore
            htmlRef={(htmlRef) => (ref = htmlRef)}
            cleaveProps={cleaveProps}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...props}
          ></InputTextCleaveLazy>
        </div>
      </Suspense>
    ) : null;

    return CleaveComp ? (
      CleaveComp
    ) : (
      <div className={wrapperClassNames}>
        <input
          ref={ref}
          id={renderedId}
          style={style}
          className={classNames}
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  })
);
