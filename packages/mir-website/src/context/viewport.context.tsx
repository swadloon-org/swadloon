import React from 'react';

declare let window: Window | undefined;

export type ViewportContext = {
  width?: number;
  height?: number;
};

type ViewportProviderProps = {
  context: React.Context<ViewportContext>;
};

export const ViewportProvider: React.FC<ViewportProviderProps> = ({ children, context }) => {
  const windowGlobal = typeof window !== 'undefined' && window;

  const [width, setWidth] = React.useState<ViewportContext['width']>(
    windowGlobal ? windowGlobal.innerWidth : 320
  );
  const [height, setHeight] = React.useState<ViewportContext['height']>(
    windowGlobal ? windowGlobal.innerHeight : 600
  );

  function handleWindowResize() {
    setWidth(windowGlobal ? windowGlobal.innerWidth : 320);
    setHeight(windowGlobal ? windowGlobal.innerHeight : 600);
  }

  // TODO throttle this
  React.useEffect(() => {
    if (windowGlobal) {
      windowGlobal.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (windowGlobal) {
        windowGlobal.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  return <context.Provider value={{ width, height }}>{children}</context.Provider>;
};
