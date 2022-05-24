/// <reference types="@figma/plugin-typings" />

import * as DS from '@newrade/core-design-system';
import { CapsizeTextStyleV2, TEXT_TRANSFORM, VIEWPORT } from '@newrade/core-design-system';
import { keys, pxStringToNumber } from '@newrade/core-react-ui/utilities-iso';
import { cssLayout, cssTypography } from '@newrade/ze-design-system/css';

import { postMessageToUI } from './code/code.utilities';
import { loadFigmaFonts } from './code/figma-fonts.code.utilities';
import {
  createOrUpdateFigmaFrame,
  createOrUpdateFigmaTextNode,
} from './code/figma-nodes.code.utilities';
import { createOrUpdateFigmaPages } from './code/figma-pages.code.utilities';
import { createOrUpdateFigmaTextStyle } from './code/figma-styles.code.utilities';
import { createFigmaTextStyle, getFigmaTextStyleList } from './code/figma-text.code.utilities';
import { getFigmaFontFromTextStyle, loadUsedFontsInTypography } from './code/fonts.code.utilities';
import { log, logError } from './code/log.code.utilities';
import { lorenipsumMedium } from './common/loren-ipsum';
import { PLUGIN_EVENT_TYPE, PluginEvent } from './common/messages';
import { getFigmaTextCase } from './common/text.utilities';
import { formatNameFigma } from './common/utilities';

figma.showUI(__html__, {
  width: 360,
  height: 400,
});

/**
 *
 * Init plugin and auth verification
 *
 */

(async () => {
  try {
    log(`initializing plugin`);
    // apiURL = await figma.clientStorage.getAsync('apiURL');
    // apiSecret = await figma.clientStorage.getAsync('apiSecret');

    // if (apiURL && apiSecret) {
    //   //send a message to the UI with the credentials storred in the client
    //   figma.ui.postMessage({
    //     type: 'apiCredentials',
    //     status: true,
    //     url: apiURL,
    //     secret: apiSecret,
    //   });
    // } else {
    //   //send a message to the UI that says there are no credentials storred in the client
    //   figma.ui.postMessage({
    //     type: 'apiCredentials',
    //     status: false,
    //   });
    // }
  } catch (err) {
    figma.closePlugin('There was an error.');
    return;
  }
})();

/**
 *
 * Event handling from and to the UI
 *
 */

figma.ui.onmessage = async (rawEvent: PluginEvent<any>) => {
  const pluginMessage: PluginEvent<typeof rawEvent.type> = rawEvent;

  log(`receiving message of type: ${pluginMessage.type}`);

  try {
    if (pluginMessage.type === PLUGIN_EVENT_TYPE.SYNC_PAGES) {
      const { updated, created, all } = createOrUpdateFigmaPages();

      figma.notify(
        `Pages are up to date ✅ (${updated.length} updated, ${created.length} created, ${all.length} total)`
      );
    }

    if (pluginMessage.type === PLUGIN_EVENT_TYPE.VALIDATE_USED_FONTS) {
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

    if (pluginMessage.type === PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST) {
      const textStyles = getFigmaTextStyleList();

      const { errors } = await loadFigmaFonts(
        keys(textStyles).reduce((previous, current) => {
          textStyles[current].forEach((textStyle) => {
            previous.push(textStyle.fontName);
          });
          return previous;
        }, [] as FontName[])
      );

      if (errors.length) {
        figma.notify(`Some fonts were not loaded successfully 🚫 (${errors.join('\n')})`, {
          error: true,
        });
      }

      figma.notify('All fonts were loaded successfully ✅');

      postMessageToUI({
        type: PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST_RETURN,
        payload: {
          textStyleFamilyList: textStyles,
        },
      });

      postMessageToUI({
        type: PLUGIN_EVENT_TYPE.SUCCESS,
        payload: {
          message: 'Successfully retrieved text styles ✅',
        },
      });
    }

    if (pluginMessage.type === PLUGIN_EVENT_TYPE.DUPLICATE_TEXT_STYLE_FAMILY) {
      const { payload } =
        pluginMessage as PluginEvent<PLUGIN_EVENT_TYPE.DUPLICATE_TEXT_STYLE_FAMILY>;
      if (!payload) {
        logError(`payload is undefined`);
        return;
      }
      const { textStyleFamilyToDuplicate, newTextStyleFamilyName } = payload;
      if (!(textStyleFamilyToDuplicate && newTextStyleFamilyName)) {
        logError(`textStyleFamilyToDuplicate and newTextStyleFamilyName must be specified`);
        return;
      }
      const textStyles = getFigmaTextStyleList();

      log(`creating duplicate of ${textStyleFamilyToDuplicate} as ${newTextStyleFamilyName}`);

      keys(textStyles).forEach((textStyleFamily) => {
        if (textStyleFamily === textStyleFamilyToDuplicate) {
          textStyles[textStyleFamily].forEach((textStyleToDuplicate) => {
            const currentName = textStyleToDuplicate.name;
            const updatedName = currentName
              .split('/')
              .map((part, partIndex) => {
                if (partIndex === 0) {
                  return newTextStyleFamilyName;
                }
                return part;
              })
              .join('/');
            //
            // not sure why, but just create a new style with {...textStyleToDuplicate} does not work on nested properties
            //
            const newTextStyle = createFigmaTextStyle({
              ...textStyleToDuplicate,
              fontName: {
                ...textStyleToDuplicate.fontName,
              },
              fontSize: textStyleToDuplicate.fontSize,
              paragraphSpacing: textStyleToDuplicate.paragraphSpacing,
              lineHeight: textStyleToDuplicate.lineHeight,
              letterSpacing: textStyleToDuplicate.letterSpacing,
              textCase: textStyleToDuplicate.textCase,
              name: updatedName,
            });
            log(`created text: ${newTextStyle.name} based on ${textStyleToDuplicate.name}`);
          });
        }
      });

      postMessageToUI({
        type: PLUGIN_EVENT_TYPE.SUCCESS,
        payload: {
          message: 'Successfully created new text styles ✅',
        },
      });
    }

    if (pluginMessage.type === PLUGIN_EVENT_TYPE.UPDATE_TEXT_STYLES) {
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

    if (pluginMessage.type === PLUGIN_EVENT_TYPE.DELETE_TEXT_STYLES) {
      const existingStyles = figma.getLocalTextStyles();

      existingStyles.forEach((existingTextStyle) => {
        existingTextStyle.remove();
      });

      figma.notify('Text styles removed ✅');
    }
  } catch (error: any) {
    postMessageToUI({
      type: PLUGIN_EVENT_TYPE.ERROR,
      payload: {
        message: 'Something went wrong',
        errors: [error],
      },
    });
    postMessageToUI({
      type: PLUGIN_EVENT_TYPE.NOT_LOADING,
    });
    logError((error as Error).message);
    figma.notify((error as Error).message, {
      error: true,
    });
  } finally {
    setTimeout(() => {
      postMessageToUI({
        type: PLUGIN_EVENT_TYPE.NOT_LOADING,
      });
    }, 1000);
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
   * Create or update the text style
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
