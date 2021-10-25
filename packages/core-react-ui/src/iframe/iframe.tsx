import { VIEWPORT } from '@newrade/core-design-system';
import React, { IframeHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsSSR } from '..';
import { getMergedClassname } from '../utilities';
import * as styles from './iframe.css';

type Props = IframeHTMLAttributes<HTMLIFrameElement> & {
  viewport?: VIEWPORT;
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 */
const IFrameFn: React.FC<Props> = React.memo(
  ({ children, title, viewport, className, ...props }) => {
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
      iframeDocumentElement.style.backgroundColor = 'white';
      iframeDocumentElement.style.height = 'min-content';
      iframeDocumentElement.style.overflowY = 'auto';
    }
    if (iframeBody) {
      iframeBody.style.backgroundColor = 'white';
      iframeBody.style.height = 'min-content';
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

      window.requestIdleCallback(() => {
        setIframeHeight();
      });
    }, [
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
     * Sync stylesheets from the parent to the iframe
     */
    useEffect(() => {
      if (isSsrIframe) {
        return;
      }

      const newIFrameLinkElements = Array.from(
        window.document.querySelectorAll('link[rel="stylesheet"]') as NodeListOf<HTMLLinkElement>
      );
      const newIFrameLinkNodes = newIFrameLinkElements.map((linkElement, linkElementIndex) => (
        <link key={linkElementIndex} href={linkElement.href} rel={linkElement.rel}></link>
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

    const classNames = getMergedClassname([className, styles.iframe]);

    return (
      <iframe
        title={title}
        className={classNames}
        style={{ opacity: isVisible ? 1 : 0 }}
        ref={iframeRef}
        width={`100%`}
        sandbox="allow-same-origin"
        {...props}
      >
        <IFrameHead
          key={'head'}
          iframeLinkElements={iframeLinkNodes}
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
    iframeHead,
  }: {
    iframeLinkElements: React.ReactNode;
    iframeHead?: HTMLHeadElement;
  }) => {
    return iframeHead ? createPortal(iframeLinkElements, iframeHead) : null;
  }
);
const IFrameBody = React.memo(
  ({ children, iframeBody }: { children: React.ReactNode; iframeBody?: HTMLElement }) =>
    iframeBody ? createPortal(children, iframeBody) : null
);
