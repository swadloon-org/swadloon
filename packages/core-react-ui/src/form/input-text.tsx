import Cleave from 'cleave.js/react';
import { Props as CleaveProps } from 'cleave.js/react/props';
import React, { InputHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './input.treat';

type Props = CommonComponentProps<'input'> &
  InputHTMLAttributes<any> & {
    cleaveProps?: CleaveProps;
    state?: 'rest' | 'error';
  };

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
      <Cleave
        type={cleaveProps.type ? cleaveProps.type : type}
        htmlRef={(htmlRef) => (ref = htmlRef)}
        // ref={ref as any}
        id={renderedId}
        style={style}
        className={classNames}
        {...props}
        {...cleaveProps}
      ></Cleave>
    ) : null;

    return CleaveComp ? (
      CleaveComp
    ) : (
      <input ref={ref} type={type} id={renderedId} style={style} className={classNames} {...props} />
    );
  })
);
