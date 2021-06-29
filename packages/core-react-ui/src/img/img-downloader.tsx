import { ButtonIcon, ButtonSize, Variant } from '@newrade/core-design-system';
import React, { useCallback, useRef } from 'react';
import { IoDownloadOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { Button } from '../button/button';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './img-downloader.treat';

type Props = CommonComponentProps & {
  filename?: string;
};

export const SvgDownloader: React.FC<Props> = ({ filename, children, ...props }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { theme, cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);

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
    const wrapperChildren = wrapperRef.current?.children;
    if (!wrapperChildren?.[0]) {
      return;
    }

    const svgElement = wrapperChildren[0];

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
    <Stack {...props} ref={wrapperRef} gap={[cssTheme.sizing.var.x4]}>
      {/* svg must the first children */}
      {children}

      <Cluster
        className={styles.buttons}
        gap={[cssTheme.sizing.var.x1]}
        justifyContent={['flex-start']}
      >
        <Button
          variant={Variant.primary}
          size={ButtonSize.xSmall}
          Icon={<IoDownloadOutline />}
          icon={ButtonIcon.left}
          onClick={handleDownloadPNG}
          aria-label={'Download as .png file'}
        >
          PNG
        </Button>

        <Button
          variant={Variant.primary}
          size={ButtonSize.xSmall}
          Icon={<IoDownloadOutline />}
          icon={ButtonIcon.left}
          onClick={handleDownloadSVG}
          aria-label={'Download as .svg file'}
        >
          SVG
        </Button>
      </Cluster>
    </Stack>
  );
};
