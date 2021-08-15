import loadable from '@loadable/component';
import type { Props as CleaveProps } from 'cleave.js/react/props';
import React, { InputHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './input.treat';

type Props = PrimitiveProps<'input'> &
  InputHTMLAttributes<any> & {
    cleaveProps?: CleaveProps;
    state?: 'rest' | 'error';
  };

const InputTextCleave = loadable(
  // @ts-ignore
  () => {
    return import('./input-text-cleave');
  },
  {
    resolveComponent: (components: typeof import('./input-text-cleave')) =>
      components.InputTextCleave,
  }
);

export const InputText = React.memo(
  React.forwardRef<HTMLInputElement, Props>(function InputText(
    { id, style, className, cleaveProps, type = 'text', state = 'rest', ...props },
    ref
  ) {
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([
      className,
      styles.rest,
      styles.primary,
      styles.medium,
      state === 'error' ? styles.error : '',
    ]);
    const renderedId = id || cleaveProps?.id || props.name || '';

    const CleaveComp = cleaveProps ? (
      <InputTextCleave
        type={cleaveProps.type ? cleaveProps.type : type}
        // @ts-ignore
        htmlRef={(htmlRef) => (ref = htmlRef)}
        id={renderedId}
        style={style}
        className={classNames}
        cleaveProps={cleaveProps}
        {...props}
      ></InputTextCleave>
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
