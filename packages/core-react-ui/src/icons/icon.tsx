import { ICON } from '@newrade/core-design-system';
import React, { ErrorInfo, SVGAttributes, useState } from 'react';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { useIconContext } from './icons-provider';

type OwnProps = {
  name: ICON;
  width?: number | string;
  height?: number | string;
} & SVGAttributes<any>;

export const IconLoader: React.FC<OwnProps> = ({ name, height, width, ...props }) => {
  const { theme, cssTheme } = useTreatTheme();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const context = useIconContext();

  const IconNotFoundError = () => {
    return <i>Error: icon not found</i>;
  };

  if (!context) {
    console.log('Icon must be use in <IconProvider/>');
    return <IconNotFoundError />;
  }

  if (!context.importFunction) {
    console.log('iconFamilyImport={} must be set on <IconProvider/>');
    return <IconNotFoundError />;
  }

  const ImportedIcon = context.importFunction(name);

  if (error) {
    return <IconNotFoundError />;
  }

  if (loading) {
    return null;
  }

  return <ImportedIcon />;
};

type State = {
  error?: Error;
  errorStack?: ErrorInfo;
};

export class Icon extends React.Component<OwnProps, State> {
  constructor(props: OwnProps) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error: error, errorStack: info });
  }

  render() {
    if (this.state.error) {
      return <i>✳️</i>;
    }
    return <IconLoader {...this.props} />;
  }
}
