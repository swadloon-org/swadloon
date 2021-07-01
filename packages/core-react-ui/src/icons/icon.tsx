import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import React, { ErrorInfo } from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styleRefs from './icon.treat';
import { useIconContext } from './icons-provider';

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
    classNames: [styles.base, size ? styles[size] : styles.medium],
    ...props,
  });

  const IconNotFoundError = () => {
    return <>✳️</>;
  };

  if (!context) {
    console.log('Icon must be use in <IconProvider/>');
    return <IconNotFoundError />;
  }

  if (!context.iconComponents) {
    console.log('iconComponents={} must be set on <IconProvider/>');
    return <IconNotFoundError />;
  }

  const IconComponent = context.iconComponents[name];

  if (!IconComponent) {
    console.log('iconComponents={} must be set on <IconProvider/>');
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
