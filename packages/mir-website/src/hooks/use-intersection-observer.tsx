import { useEffect, useRef, useState } from 'react';

type OwnProps = {
  readonly root?: Element | null;
  readonly rootMargin?: string;
  readonly threshold?: number | number[];
};

export function useIntersectionObserver({
  root = null,
  rootMargin,
  threshold = [0],
}: OwnProps): [React.Dispatch<any>, IntersectionObserverEntry | undefined] {
  const [entry, updateEntry] = useState<IntersectionObserverEntry | undefined>();
  const [node, setNode] = useState<null | Element>(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) {
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
}
