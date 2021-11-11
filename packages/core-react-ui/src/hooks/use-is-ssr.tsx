export function useIsSSR(windowObject?: any) {
  if (windowObject) {
    const isSSRWindow = typeof windowObject === 'undefined';
    return isSSRWindow;
  }
  const isSSR = typeof window === 'undefined';

  return isSSR;
}
