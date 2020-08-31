import React from 'react';

declare var window: Window;

export type ViewportContext = {
  width?: number;
  height?: number;
};

type ViewportProviderProps = {
  context: React.Context<ViewportContext>;
};

export const ViewportProvider: React.FC<ViewportProviderProps> = ({ children, context }) => {
  const [width, setWidth] = React.useState<ViewportContext['width']>(window ? window.innerWidth : 320);
  const [height, setHeight] = React.useState<ViewportContext['height']>(window ? window.innerHeight : 600);

  function handleWindowResize() {
    setWidth(window ? window.innerWidth : 320);
    setHeight(window ? window.innerHeight : 600);
  }

  // TODO throttle this
  React.useEffect(() => {
    if (window) {
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (window) {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  return <context.Provider value={{ width, height }}>{children}</context.Provider>;
};
