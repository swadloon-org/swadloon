import type { Props as CleaveProps } from 'cleave.js/react/props';
import React, { InputHTMLAttributes, Suspense } from 'react';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import { InputTextCleaveLazy } from './input-text-cleave.lazy';
import * as styles from './input.css';





type Props = PrimitiveProps<'input'> &
  InputHTMLAttributes<any> & {
    cleaveProps?: CleaveProps;
    state?: 'rest' | 'error';
  };

export const InputText = React.memo(
  React.forwardRef<HTMLInputElement, Props>(function InputText(
    { id, style, className, cleaveProps, type = 'text', state = 'rest', ...props },
    ref
  ) {
    const classNames = getMergedClassname([
      className,
      styles.rest,
      styles.primary,
      styles.medium,
      state === 'error' ? styles.error : '',
    ]);
    const renderedId = id || cleaveProps?.id || props.name || '';

    const CleaveComp = cleaveProps ? (
      <Suspense fallback={''}>
        <InputTextCleaveLazy
          type={cleaveProps.type ? cleaveProps.type : type}
          // @ts-ignore
          htmlRef={(htmlRef) => (ref = htmlRef)}
          id={renderedId}
          style={style}
          className={classNames}
          cleaveProps={cleaveProps}
          {...props}
        ></InputTextCleaveLazy>
      </Suspense>
    ) : null;

    return CleaveComp ? (
      CleaveComp
    ) : (
      <input
        ref={ref}
        type={type}
        id={renderedId}
        style={style}
        className={classNames}
        {...props}
      />
    );
  })
);
