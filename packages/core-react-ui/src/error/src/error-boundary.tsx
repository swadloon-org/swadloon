import React, { ErrorInfo } from 'react';

import { logError } from '../../utilities-iso/log.utilities';

type Props = {};

type State = {
  hasError: boolean;
};

/**
 * @see https://reactjs.org/docs/react-component.html#componentdidcatch
 */
export class ErrorBoundary extends React.Component<React.PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logError(error.message);
    logError(error.stack);
    logError(info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}
