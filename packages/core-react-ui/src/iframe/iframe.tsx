/* eslint-disable react-hooks/rules-of-hooks */
import React, { IframeHTMLAttributes, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsSSR } from '..';
import * as styles from './iframe.css';

type Props = IframeHTMLAttributes<HTMLIFrameElement>;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 */
export const IFrame: React.FC<Props> = React.memo(({ children, title, ...props }) => {
  const contentRef = useRef<HTMLIFrameElement>(null);
  const iframeWindow = contentRef.current?.contentWindow;
  const [iframeMounted, setIframeMounted] = useState(false);
  const mountNode = contentRef.current?.contentWindow?.document?.body;
  const [renderedLinkElements, setRenderedLinkElements] = useState<
    NodeListOf<HTMLLinkElement> | undefined
  >(undefined);

  useEffect(() => {
    const mountNode = contentRef?.current?.contentWindow?.document?.body;
    if (mountNode) {
      setIframeMounted(true);
    }
  }, [contentRef]);

  useEffect(() => {
    const linkElements = iframeWindow?.parent.document.querySelectorAll(
      'link[rel="stylesheet"]'
    ) as NodeListOf<HTMLLinkElement>;
    if (linkElements && linkElements.length) {
      if (!renderedLinkElements) {
        setRenderedLinkElements(linkElements as NodeListOf<HTMLLinkElement>);
        return;
      }
      Array.from(linkElements).every((link, linkIndex) => {
        if (link.rel !== renderedLinkElements[linkIndex].rel) {
          setRenderedLinkElements(linkElements as NodeListOf<HTMLLinkElement>);
          return false;
        }
        return true;
      });
    }
  }, [iframeWindow?.parent.document]);

  useEffect(() => {
    const isSsrIframe = useIsSSR(iframeWindow);
    if (isSsrIframe) {
      return;
    }
    if (!iframeWindow) {
      return;
    }
    if (!contentRef) {
      return;
    }
    console.log(renderedLinkElements);
    if (renderedLinkElements?.length) {
      const iframeLinks = Array.from(renderedLinkElements).map((link) => {
        const newLink = iframeWindow.document.createElement('link');
        newLink.rel = link.rel;
        newLink.href = link.href;
        return newLink;
      });
      iframeWindow.document.head.replaceChildren(...iframeLinks);
    }
  }, [renderedLinkElements, iframeWindow, contentRef]);

  // function handleOnLoad() {
  //   if (!iframeWindow) {
  //     return;
  //   }
  //   Array.prototype.forEach.call(
  //     window.parent.document.querySelectorAll('link[rel=stylesheet]'),
  //     function (link) {
  //       var newLink = iframeWindow.document.createElement('link');
  //       newLink.rel = link.rel;
  //       newLink.href = link.href;
  //     }
  //   );
  // }

  const shouldRender = iframeMounted && mountNode && renderedLinkElements;

  return (
    <iframe
      title={title}
      className={styles.base}
      {...props}
      ref={contentRef}
      width={`100%`}
      // onLoad={handleOnLoad}
      // sandbox=""
      // allow-scripts={true}
      // allow-same-origin={true}
    >
      {shouldRender && createPortal(children, mountNode)}
    </iframe>
  );
});
