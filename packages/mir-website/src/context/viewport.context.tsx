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
  const [width, setWidth] = React.useState<ViewportContext['width']>(window.innerWidth);
  const [height, setHeight] = React.useState<ViewportContext['height']>(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return <context.Provider value={{ width, height }}>{children}</context.Provider>;
};
