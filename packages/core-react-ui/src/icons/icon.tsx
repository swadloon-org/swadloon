import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { snake } from 'case';
import debug from 'debug';
import React, { ErrorInfo } from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styleRefs from './icon.treat';
import { useIconContext } from './icons-provider';

const log = debug('newrade:core-react-ui:icon');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type Props = PrimitiveProps<'svg'> & {
  name: ICON;
  size?: ICON_SIZE;
  width?: number | string;
  height?: number | string;
};

export const IconLoader: React.FC<Props> = ({
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
  const { theme, cssTheme } = useTreatTheme();
  const context = useIconContext();
  const styles = useStyles(styleRefs);
  const commonProps = useCommonProps<'svg'>({
    id,
    style,
    className,
    classNames: [styles.base, size ? styles[size] : ''],
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

export class IconComp extends React.Component<Props, State> {
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
    return <IconLoader {...this.props} />;
  }
}
