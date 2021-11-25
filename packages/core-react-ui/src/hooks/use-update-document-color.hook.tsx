import { useEffect } from 'react';

import { useFirstRender } from './use-first-render.hook';
import { useIsSSR } from './use-is-ssr';

type Options = {
  colorTop: string;
  colorBottom: string;
};

/**
 * Hook that will update the window.document background color when scrolling
 *
 * The goal is to avoid navbar or footer to show contrasting color for the rubber band effect on ios
 */
export function useUpdateDocumentColor({ colorTop, colorBottom }: Options) {
  const isFirstRender = useFirstRender();
  const isSSR = useIsSSR();

  useEffect(() => {
    if (isSSR) {
      return;
    }

    function updateDocumentBackgroundColor(event: Event) {
      const scrollPosition = window.scrollY;

      if (scrollPosition < window.screen.height) {
        window.document.documentElement.style.backgroundColor = colorTop;
        return;
      }
      if (scrollPosition >= window.screen.height) {
        window.document.documentElement.style.backgroundColor = colorBottom;
        return;
      }
    }

    if (isFirstRender) {
      window.document.addEventListener('touchmove', updateDocumentBackgroundColor, {
        passive: true,
      });
      window.document.addEventListener('scroll', updateDocumentBackgroundColor, { passive: true });
    }

    return () => {
      window.document.removeEventListener('touchmove', updateDocumentBackgroundColor);
      window.document.removeEventListener('scroll', updateDocumentBackgroundColor);
    };
  }, [isSSR, isFirstRender, colorTop, colorBottom]);
}
