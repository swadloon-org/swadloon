import React, { ErrorInfo } from 'react';

import { LOGO } from '@newrade/core-design-system';
import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities-iso/utilities-iso';

import { useLogosContext } from './logos-provider';

import * as styles from './logo.css';

type Props = PrimitiveProps<'svg'> & {
  name: LOGO;
};

export const LogoLoader = React.forwardRef<'svg', Props>(
  ({ id, style, className, name, height, width, as, ...props }, ref) => {
    const context = useLogosContext();

    const commonProps = useCommonProps<'svg'>({
      id,
      style,
      className,
      classNames: [
        styles.base,
        // only set the size when no classname or style is applied
        className ? '' : style && style.height ? '' : getSizeClassForName(name),
      ],
      ...props,
    });

    function getSizeClassForName(name: LOGO): string {
      switch (name) {
        case LOGO.STANDARD: {
          return styles.standard;
        }
        default:
        case LOGO.SYMBOL: {
          return styles.symbol;
        }
        case LOGO.FAVICON: {
          return styles.favicon;
        }
      }
    }

    const LogoNotFoundError = () => {
      return <>✳️</>;
    };

    if (!context) {
      console.log('Logo must be use in <LogoProvider/>');
      return <LogoNotFoundError />;
    }

    if (!context.logoComponents) {
      console.log('LogoComponents={} must be set on <LogoProvider/>');
      return <LogoNotFoundError />;
    }

    const LogoComponent = context.logoComponents[name];

    if (!LogoComponent) {
      console.log('LogoComponent was not found');
      return <LogoNotFoundError />;
    }
    // @ts-ignore
    const svgClassName = LogoComponent.props?.className;

    const classNames = getMergedClassname([commonProps.className, svgClassName]);

    return <LogoComponent {...{ ...commonProps, className: classNames }} ref={ref} />;
  }
);

type State = {
  error?: Error;
  errorStack?: ErrorInfo;
};

export class Logo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error: error, errorStack: info });
  }

  render() {
    if (this.state.error) {
      return <>✳️</>;
    }
    return <LogoLoader {...this.props} />;
  }
}
