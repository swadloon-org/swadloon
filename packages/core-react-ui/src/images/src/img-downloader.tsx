import React, { useCallback, useRef } from 'react';

import { ButtonSize, Variant } from '@newrade/core-design-system';
import { Button } from '@newrade/core-react-ui-button';

import { sizeVars } from '../default-theme/src/theme.js';
import { Cluster } from '../layout/cluster.js';
import { Stack } from '../layout/stack.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './img-downloader.css.js';

type Props = PrimitiveProps & {
  filename?: string;
};

export const SvgDownloader: React.FC<Props> = ({ filename, children, ...props }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  function downloadBlob(blob: Blob, filename: string) {
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
  }

  const findSvgElement = useCallback(() => {
    const svgElements = wrapperRef.current?.getElementsByTagName('svg');

    if (!svgElements?.[0]) {
      return;
    }

    const svgElement = svgElements[0];

    if (!/svg/i.test(svgElement.tagName)) {
      return;
    }

    return svgElement;
  }, [wrapperRef]);

  const downloadSvgFile = useCallback(function downloadSvgFile({
    filename,
    svgElement,
  }: {
    filename: string;
    svgElement: Element;
  }) {
    const svg = svgElement.outerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    downloadBlob(blob, `${filename}.svg`);
  },
  []);

  const downloadPngFile = useCallback(function downloadPngFile({
    filename,
    svgElement,
  }: {
    filename: string;
    svgElement: Element;
  }) {
    const { width, height } = svgElement.getBoundingClientRect();
    const svgHeight = height;
    const svgWidth = width;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');

    img.onload = () => {
      if (!ctx) {
        return;
      }
      canvas.width = svgWidth;
      canvas.height = svgHeight;
      ctx.drawImage(img, 0, 0, svgWidth, svgHeight);

      canvas.toBlob((blob) => {
        if (!blob) {
          return;
        }
        downloadBlob(blob, filename);
      }, 'image/png');
    };

    img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
  },
  []);

  const downloadImgFile = useCallback(
    (filename: string, format: 'svg' | 'png') => {
      const svgElement = findSvgElement();

      if (!svgElement) {
        return;
      }

      switch (format) {
        case 'svg': {
          downloadSvgFile({
            filename,
            svgElement,
          });
          return;
        }
        default:
        case 'png': {
          downloadPngFile({
            filename,
            svgElement,
          });
          return;
        }
      }
    },
    [downloadSvgFile, downloadPngFile, findSvgElement]
  );

  function handleDownloadSVG() {
    downloadImgFile(filename || `img`, 'svg');
  }

  function handleDownloadPNG() {
    downloadImgFile(filename || `img`, 'png');
  }

  return (
    <Stack {...props} ref={wrapperRef} gap={[sizeVars.x3]}>
      {/* svg must the first children */}
      {children}

      <Cluster className={styles.buttons} gap={[sizeVars.x1]} justifyContent={['flex-start']}>
        <Button
          variant={Variant.secondary}
          size={ButtonSize.small}
          onClick={handleDownloadSVG}
          aria-label={'Download as .svg file'}
        >
          Download SVG
        </Button>

        <Button
          variant={Variant.secondary}
          size={ButtonSize.small}
          onClick={handleDownloadPNG}
          aria-label={'Download as .png file'}
        >
          Download PNG
        </Button>
      </Cluster>
    </Stack>
  );
};
