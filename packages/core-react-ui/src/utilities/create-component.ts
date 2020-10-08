import * as React from 'react';

export function createComponent<Props>(
  Component: React.FunctionComponent<Props>,
  config?: {
    attach?: {
      displayName?: string;
      useProps: (props?: Partial<Props>, config?: { themeKey?: string }) => any;
    };
    defaultProps?: Partial<Props>;
    themeKey?: string;
    shouldMemo?: boolean;
  }
) {
  // @ts-ignore
  const Comp = (props: Props, ref) => {
    // @ts-ignore
    return React.createElement(Component, { ...newProps, elementRef: ref }, props?.children);
  };
  let ForwardedComponent = React.forwardRef(Comp);
  // @ts-ignore
  if (config.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  // @ts-ignore
  return Object.assign(ForwardedComponent, config.attach);
}
