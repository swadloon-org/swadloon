import { VIEWPORT } from '@newrade/core-design-system';
import React, { IframeHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsSSR } from '../hooks/use-is-ssr';
import { getMergedClassname } from '../utilities';
import * as styles from './iframe.css';




type Props = IframeHTMLAttributes<HTMLIFrameElement> & {
  bodyWidth?: string;
  viewport?: VIEWPORT | 'auto';
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 */
const IFrameFn: React.FC<Props> = React.memo(
  ({ children, title, bodyWidth, viewport, className, ...props }) => {
    const isSsrIframe = useIsSSR();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const iframeElement = iframeRef.current;
    const iframeWindow = iframeRef.current?.contentWindow;
    const iframeDocument = iframeRef.current?.contentDocument;
    const iframeDocumentElement = iframeRef.current?.contentDocument?.documentElement;
    const [iframeMounted, setIframeMounted] = useState(false);
    const iframeBody = iframeRef.current?.contentWindow?.document?.body;
    const iframeHead = iframeRef.current?.contentWindow?.document?.head;
    const [iframeLinksElement, setIframeLinksElement] = useState();

    /**
     * Inject custom styles into mount node
     */
    if (iframeDocumentElement) {
      iframeDocumentElement.style.height = 'min-content';
      iframeDocumentElement.style.overflowY = 'auto';
    }
    if (iframeBody) {
      iframeBody.style.height = 'min-content';
      iframeBody.style.width = bodyWidth || '';
    }

    /**
     * Handle mounting the iframe portal / component
     */
    useEffect(() => {
      const mountNode = iframeRef.current?.contentWindow?.document?.body;
      if (mountNode) {
        setIframeMounted(true);
      }
    }, [iframeRef]);

    const [isVisible, setIsVisible] = useState(false);

    /**
     * Imperatively set the iframe height depending on the iframe body element
     */
    const setIframeHeight = useCallback(
      function setIframeHeight() {
        if (!(iframeElement && iframeDocument && isVisible)) {
          return;
        }
        const { height } = iframeDocument.body.getBoundingClientRect();
        iframeElement.style.height = `${height}px`;
      },
      [iframeDocument, iframeElement, isVisible]
    );

    /**
     * When visible, set the iframe height according to the iframe's body height
     */
    useEffect(() => {
      const shouldBeVisible = !!(iframeMounted && iframeBody);
      if (shouldBeVisible !== isVisible) {
        setIsVisible(shouldBeVisible);
        return;
      }

      if (isSsrIframe) {
        return;
      }

      window.requestIdleCallback(() => {
        setIframeHeight();
      });
    }, [
      isSsrIframe,
      setIframeHeight,
      viewport,
      isVisible,
      iframeBody,
      iframeMounted,
      iframeElement,
      iframeDocument,
    ]);

    const [iframeLinkElements, setIframeLinkElements] = useState<HTMLLinkElement[] | null>(null);
    const [iframeLinkNodes, setIframeLinkNodes] = useState<JSX.Element[] | null>(null);

    /**
     * Sync stylesheets <link/> elements from the parent to the iframe
     */
    useEffect(() => {
      if (isSsrIframe) {
        return;
      }

      const newIFrameLinkElements = Array.from(
        window.document.querySelectorAll('link[rel="stylesheet"]') as NodeListOf<HTMLLinkElement>
      );
      const newIFrameLinkNodes = newIFrameLinkElements.map((linkElement, linkElementIndex) => (
        <link
          key={linkElementIndex}
          href={linkElement.href}
          rel={linkElement.rel}
          type="text/css"
          as="style"
        ></link>
      ));

      if (!newIFrameLinkElements.length) {
        return;
      }

      if (!iframeLinkNodes) {
        setIframeLinkNodes(newIFrameLinkNodes);
        setIframeLinkElements(newIFrameLinkElements);
        return;
      }

      if (!iframeLinkElements) {
        return;
      }

      let linkElementsChanged = false;
      newIFrameLinkElements.every((newLink, newLinkIndex) => {
        if (newLink?.href !== iframeLinkElements?.[newLinkIndex]?.href) {
          linkElementsChanged = true;
          return false;
        }
        return true;
      });

      if (linkElementsChanged) {
        setIframeLinkNodes(newIFrameLinkNodes);
        setIframeHeight();
      }
    }, [setIframeHeight, isSsrIframe, iframeLinkElements, iframeLinkNodes]);

    const [iframeStyleElements, setIframeStyleElements] = useState<HTMLStyleElement[] | null>(null);
    const [iframeStyleNodes, setIframeStyleNodes] = useState<JSX.Element[] | null>(null);

    /**
     * Sync stylesheets <style/> elements from the parent to the iframe
     */
    useEffect(() => {
      if (isSsrIframe) {
        return;
      }

      const newIFrameStyleElements = Array.from(
        // take the style tag present in the head only
        window.document.querySelectorAll('head > style') as NodeListOf<HTMLStyleElement>
      );
      const newIFrameStyleNodes = newIFrameStyleElements.map((styleElement, styleElementIndex) => (
        <style key={styleElementIndex}>{styleElement.innerHTML}</style>
      ));

      if (!newIFrameStyleElements.length) {
        return;
      }

      if (!iframeStyleNodes) {
        setIframeStyleNodes(newIFrameStyleNodes);
        setIframeStyleElements(newIFrameStyleElements);
        return;
      }

      if (!iframeStyleElements) {
        return;
      }

      let styleElementsChanged = false;
      newIFrameStyleElements.every((newStyle, newStyleIndex) => {
        if (newStyle?.innerHTML !== iframeStyleElements?.[newStyleIndex]?.innerHTML) {
          styleElementsChanged = true;
          return false;
        }
        return true;
      });

      if (styleElementsChanged) {
        setIframeStyleNodes(newIFrameStyleNodes);
        setIframeHeight();
      }
    }, [setIframeHeight, isSsrIframe, iframeStyleElements, iframeStyleNodes]);

    /**
     * Handle iframe onload event
     */
    function handleOnLoad() {
      setIframeHeight();
    }

    const classNames = getMergedClassname([className, styles.iframe]);

    return (
      <iframe
        title={title}
        className={classNames}
        style={{ opacity: isVisible ? 1 : 0 }}
        ref={iframeRef}
        width={`100%`}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        onLoad={handleOnLoad}
        {...props}
      >
        <IFrameHead
          key={'head'}
          iframeLinkElements={iframeLinkNodes}
          iframeStyleElements={iframeStyleNodes}
          iframeHead={iframeHead}
        ></IFrameHead>
        <IFrameBody key={'body'} iframeBody={iframeBody}>
          {children}
        </IFrameBody>
      </iframe>
    );
  }
);

IFrameFn.displayName = 'IFrame';

export const IFrame = IFrameFn;

const IFrameHead = React.memo(
  ({
    iframeLinkElements,
    iframeStyleElements,
    iframeHead,
  }: {
    iframeLinkElements: React.ReactNode;
    iframeStyleElements: React.ReactNode;
    iframeHead?: HTMLHeadElement;
  }) => {
    return iframeHead ? createPortal([iframeLinkElements, iframeStyleElements], iframeHead) : null;
  }
);

const IFrameBody = React.memo(
  ({ children, iframeBody }: { children: React.ReactNode; iframeBody?: HTMLElement }) =>
    iframeBody ? createPortal(children, iframeBody) : null
);
