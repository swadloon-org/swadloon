export function useIsSSR() {
  const isSSR = typeof window === 'undefined';

  return isSSR;
}
