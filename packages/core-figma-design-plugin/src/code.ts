/// <reference types="@figma/plugin-typings" />

import * as DS from '@newrade/core-design-system';
import { CapsizeTextStyleV2, TEXT_TRANSFORM, VIEWPORT } from '@newrade/core-design-system';
import { keys, pxStringToNumber } from '@newrade/core-react-ui/utilities-iso';
import { cssLayout, cssTypography } from '@newrade/ze-design-system/css';

import { getFigmaFontFromTextStyle, loadUsedFontsInTypography } from './utilities/fonts.utilities';
import { lorenipsumMedium } from './utilities/loren-ipsum';
import { createOrUpdateFigmaFrame, createOrUpdateFigmaTextNode } from './utilities/node.utilities';
import { createOrUpdateFigmaTextStyle } from './utilities/styles.utilities';
import { getFigmaTextCase } from './utilities/text.utilities';
import { formatNameFigma, log, logError } from './utilities/utilities';
import { PLUGIN_EVENT_TYPE, PluginEvent } from './messages';

figma.showUI(__html__, {
  width: 360,
  height: 400,
});

figma.ui.onmessage = async (message: PluginEvent) => {
  try {
    if (message.type === PLUGIN_EVENT_TYPE.VALIDATE_USED_FONTS) {
      //
      // Loading fonts
      //

      const { errors } = await loadUsedFontsInTypography(cssTypography);

      if (!errors.length) {
        figma.notify('All fonts were loaded successfully ✅');
        return;
      }

      figma.notify(`Some fonts were not loaded successfully 🚫 (${errors.join('\n')})`, {
        error: true,
      });
    }

    if (message.type === PLUGIN_EVENT_TYPE.UPDATE_TEXT_STYLES) {
      //
      // Load and validate all found fonts
      //

      const { errors } = await loadUsedFontsInTypography(cssTypography);

      if (errors.length) {
        figma.notify(`Some fonts were not loaded successfully 🚫 (${errors.join('\n')})`, {
          error: true,
        });
        return;
      }

      //
      // Create or update text styles
      //

      const containerWidths = {
        [VIEWPORT.desktop]: cssLayout.breakpoints.desktopSmall,
        [VIEWPORT.tablet]: cssLayout.breakpoints.tabletPortrait,
        [VIEWPORT.mobile]: cssLayout.breakpoints.mobileSmall,
      };

      const containerPaddings = {
        [VIEWPORT.desktop]: cssLayout.contentMargins.desktop,
        [VIEWPORT.tablet]: cssLayout.contentMargins.tablet,
        [VIEWPORT.mobile]: cssLayout.contentMargins.mobile,
      };

      const viewports = [VIEWPORT.desktop, VIEWPORT.tablet, VIEWPORT.mobile];

      let lastContainerXPosition = 0;
      let lastContainerWidth = 0;

      viewports.forEach((viewport, viewportIndex) => {
        const isFirstContainer = viewportIndex === 0;
        const containerWidth = pxStringToNumber({ value: containerWidths[viewport] }) || 1200;
        const containerXPosition = lastContainerXPosition + lastContainerWidth + 144;
        const containerFrame = createContainerFrame({
          name: viewport,
          width: containerWidth,
          x: containerXPosition,
          padding: pxStringToNumber({ value: containerPaddings[viewport] }) || 89,
          index: viewportIndex,
        });

        lastContainerWidth = containerWidth;
        lastContainerXPosition = containerXPosition;

        const titles = cssTypography.titles[viewport];

        keys(titles).forEach((name, index) => {
          createTextNodeForStyle({
            textStyle: titles[name],
            name: formatNameFigma([viewport, 'Titles', name]),
            containerFrame,
          });
        });

        const headings = cssTypography.headings[viewport];

        keys(headings).forEach((name, index) => {
          createTextNodeForStyle({
            textStyle: headings[name],
            name: formatNameFigma([viewport, 'Headings', name]),
            containerFrame,
          });
        });

        const paragraphs = cssTypography.paragraphs[viewport];
        const paragraphStyles = cssTypography.paragraphs.styles;

        keys(paragraphs).forEach((size, index) => {
          const capsizeTextStyle = paragraphs[size];
          keys(paragraphStyles).forEach((style) => {
            const textStyle = paragraphStyles[style];
            createTextNodeForStyle({
              textStyle: { ...capsizeTextStyle, ...textStyle },
              name: formatNameFigma([viewport, 'Paragraphs', size, style]),
              containerFrame,
            });
          });
        });

        const labels = cssTypography.labels[viewport];
        const labelStyles = cssTypography.labels.styles;

        keys(labels).forEach((size, index) => {
          const capsizeTextStyle = labels[size];
          keys(labelStyles).forEach((style) => {
            const textStyle = labelStyles[style];
            createTextNodeForStyle({
              textStyle: { ...capsizeTextStyle, ...textStyle },
              name: formatNameFigma([viewport, 'Labels', size, style]),
              containerFrame,
            });
          });
        });
      });

      figma.notify('Text styles created successfully ✅');
    }

    if (message.type === PLUGIN_EVENT_TYPE.DELETE_TEXT_STYLES) {
      const existingStyles = figma.getLocalTextStyles();

      existingStyles.forEach((existingTextStyle) => {
        existingTextStyle.remove();
      });

      figma.notify('Text styles removed ✅');
    }
  } catch (error) {
    figma.ui.postMessage({ type: PLUGIN_EVENT_TYPE.NOT_LOADING } as PluginEvent);
    logError((error as Error).message);
  } finally {
    figma.ui.postMessage({ type: PLUGIN_EVENT_TYPE.NOT_LOADING } as PluginEvent);
  }
};

function createContainerFrame({
  name,
  width,
  padding,
  x,
  index,
}: {
  name: DS.VIEWPORT;
  width: number;
  padding: number;
  x: number;
  index: number;
}) {
  const containerFrame = createOrUpdateFigmaFrame(`TextStyles/${formatNameFigma(name)}`);
  containerFrame.layoutMode = 'VERTICAL';
  containerFrame.y = 0;
  containerFrame.x = x;
  containerFrame.resize(width, 1200);
  containerFrame.primaryAxisSizingMode = 'AUTO';
  containerFrame.counterAxisSizingMode = 'FIXED';
  containerFrame.itemSpacing = 89;
  containerFrame.paddingTop = padding || 89;
  containerFrame.paddingRight = padding || 89;
  containerFrame.paddingBottom = padding || 89;
  containerFrame.paddingLeft = padding || 89;

  return containerFrame;
}

function createTextNodeForStyle({
  textStyle,
  name,
  containerFrame,
}: {
  textStyle: DS.TextStyle<string> & CapsizeTextStyleV2<string>;
  name: string;
  containerFrame: FrameNode;
}) {
  /**
   *
   * Create or udpate the text style
   *
   */

  const newFigmaTextStyle = createOrUpdateFigmaTextStyle(name);

  /**
   * Font family & weight
   */

  newFigmaTextStyle.fontName = getFigmaFontFromTextStyle(textStyle) || {
    family: 'Roboto',
    style: 'Regular',
  };

  /**
   * Font size
   */

  newFigmaTextStyle.fontSize = pxStringToNumber({ value: textStyle.capsize.fontSize }) || 16;
  newFigmaTextStyle.paragraphSpacing = newFigmaTextStyle.fontSize;

  /**
   * Line height
   */

  newFigmaTextStyle.lineHeight = {
    unit: 'PIXELS',
    value: pxStringToNumber({ value: textStyle.capsize.lineHeight }) || newFigmaTextStyle.fontSize,
  };

  /**
   * Letter spacing
   */

  const letterSpacing = pxStringToNumber({ value: textStyle.letterSpacing });
  const letterSpacingPercent = letterSpacing ? letterSpacing * 100 : 0;

  newFigmaTextStyle.letterSpacing = {
    unit: 'PERCENT',
    value: letterSpacingPercent,
  };

  /**
   * Text styles
   */

  newFigmaTextStyle.textCase = getFigmaTextCase(textStyle.textTransform as TEXT_TRANSFORM);

  /**
   *
   * Update text nodes
   *
   */

  const newFigmaText = createOrUpdateFigmaTextNode(newFigmaTextStyle.name);
  containerFrame.appendChild(newFigmaText);
  newFigmaText.characters = newFigmaTextStyle.name;
  newFigmaText.textStyleId = newFigmaTextStyle.id;
  newFigmaText.resize(400, 200);
  newFigmaText.layoutAlign = 'STRETCH';
  newFigmaText.textAutoResize = 'HEIGHT';

  const newFigmaTextLorenIpsum = createOrUpdateFigmaTextNode(`${newFigmaTextStyle.name}/Lorem`);
  containerFrame.appendChild(newFigmaTextLorenIpsum);

  newFigmaTextLorenIpsum.textStyleId = newFigmaTextStyle.id;
  newFigmaTextLorenIpsum.characters = lorenipsumMedium;
  newFigmaTextLorenIpsum.resize(400, 200);
  newFigmaTextLorenIpsum.layoutAlign = 'STRETCH';
  newFigmaTextLorenIpsum.textAutoResize = 'HEIGHT';

  log(`created style: ${name}`);
}
