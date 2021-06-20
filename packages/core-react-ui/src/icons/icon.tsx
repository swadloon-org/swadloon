import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import React, { ErrorInfo, SVGAttributes } from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './icon.treat';
import { useIconContext } from './icons-provider';

type Props = SVGAttributes<any> &
  CommonComponentProps & {
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
  ...props
}) => {
  const { theme, cssTheme } = useTreatTheme();
  const context = useIconContext();
  const styles = useStyles(styleRefs);
  const commonProps = useCommonProps({
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
