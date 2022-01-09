import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, useRef, useState } from 'react';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';

import * as styles from './switch.css';

type Props = PrimitiveProps &
  Pick<AnchorHTMLAttributes<any>, 'href'> &
  ButtonHTMLAttributes<any> & {
    value?: 'on' | 'off';
    IconOn?: React.ReactNode;
    colorOn?: string;
    IconOff?: React.ReactNode;
    colorOff?: string;
    disabled?: boolean;
  };

export const Switch = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      id,
      style,
      className,
      children,
      as,
      AsElement,
      disabled,
      value = 'on',
      role = 'switch',
      IconOn,
      colorOn,
      IconOff,
      colorOff,
      ...props
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const [state, setState] = useState<boolean>(value === 'on');
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;

    /**
     * Event handling
     */
    usePreventPinchZoom(ref.current);

    function handleClick() {
      setState(!state);
    }

    /**
     * Handle icons
     */
    const IconOnSvg = IconOn
      ? React.cloneElement(IconOn as React.ReactElement, {
          className: getMergedClassname([styles.icon, styles.iconRight]),
          preserveAspectRatio: `xMinYMin meet`,
        })
      : null;

    const IconOffSvg = IconOff
      ? React.cloneElement(IconOff as React.ReactElement, {
          className: getMergedClassname([styles.icon, styles.iconLeft]),
          preserveAspectRatio: `xMinYMin meet`,
        })
      : null;

    /**
     * Merge props
     */
    const commonProps = useCommonProps<'button'>({
      id,
      style: {
        ...style,
        backgroundColor: state ? colorOn : colorOff,
      },
      className,
      classNames: [
        styles.base,
        styles.primary,
        styles.medium,
        state === false ? styles.primaryOff : '',
      ],
      ...props,
    });

    if (IconOnSvg && IconOffSvg) {
      return (
        <button ref={ref} disabled={disabled} role={role} {...commonProps} onClick={handleClick}>
          {IconOnSvg}
          {IconOffSvg}
          <div className={`${styles.thumb} ${state === false ? styles.thumbOff : ''}`}></div>
        </button>
      );
    }

    return (
      <button ref={ref} disabled={disabled} role={role} {...commonProps} onClick={handleClick}>
        <div className={`${styles.thumb} ${state === false ? styles.thumbOff : ''}`}></div>
      </button>
    );
  }
);
