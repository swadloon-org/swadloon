import loadable from '@loadable/component';
import 'cleave.js/dist/addons/cleave-phone.ca';
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

const LazyCleave = loadable<CleaveProps>(
  // @ts-ignore
  () => {
    return import('cleave.js/react');
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
      <LazyCleave
        type={cleaveProps.type ? cleaveProps.type : type}
        htmlRef={(htmlRef) => (ref = htmlRef)}
        id={renderedId}
        style={style}
        className={classNames}
        {...props}
        {...cleaveProps}
      ></LazyCleave>
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
