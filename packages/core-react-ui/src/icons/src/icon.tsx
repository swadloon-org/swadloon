import React, { ErrorInfo } from 'react';

import { snake } from 'case';
import debug from 'debug';

import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { PrimitiveProps } from '../primitive/primitive.props';

import { useIconContext } from './icons-provider';

import * as styles from './icon.css';

const log = debug('nr:core-react-ui:icon');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type Props = PrimitiveProps<'svg'> & {
  name: ICON;
  size?: ICON_SIZE;
  width?: number | string;
  height?: number | string;
};

const IconLoader: React.FC<Props> = ({
  id,
  style,
  className,
  name,
  height,
  width,
  size,
  as,
  AsElement,
  ...props
}) => {
  const context = useIconContext();

  const commonProps = useCommonProps<'svg'>({
    id,
    style,
    className,
    classNames: [
      styles.base,
      styles.variants({
        size: size,
      }),
    ],
    ...props,
  });

  const IconNotFoundError = () => {
    return <>✳️</>;
  };

  if (!name) {
    logWarn('name must be passed to IconComp');
    return <IconNotFoundError />;
  }

  if (!context) {
    logWarn('Icon must be use in <IconProvider/>');
    return <IconNotFoundError />;
  }

  if (!context.iconComponents) {
    logWarn('iconComponents={} must be set on <IconProvider/>');
    return <IconNotFoundError />;
  }

  const IconComponent = context.iconComponents[name]
    ? context.iconComponents[name]
    : context.iconComponents[snake(name).toUpperCase()];

  if (!IconComponent) {
    logWarn(`icon ${name} was not found`);
    logWarn(`tried with: ${name}`);
    logWarn(`tried with: ${snake(name).toUpperCase()}`);
    return <IconNotFoundError />;
  }

  return <IconComponent {...commonProps} />;
};

type State = {
  error?: Error;
  errorStack?: ErrorInfo;
};

/**
 * Error boundary wrapper component for IconLoader
 */
export class IconComp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logError(error.message);
    logError(error.stack);
    logError(info);
  }

  render() {
    if (this.state.error) {
      return <>✳️</>;
    }
    return <IconLoader {...this.props} />;
  }
}
