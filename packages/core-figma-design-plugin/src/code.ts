/// <reference types="@figma/plugin-typings" />

import * as DS from '@newrade/core-design-system';
import { VIEWPORT } from '@newrade/core-design-system';
import { keys, pxStringToNumber } from '@newrade/core-react-ui/utilities-iso';
import { cssTypography } from '@newrade/ze-design-system/css';

import { getFigmaFontFromTextStyle, loadUsedFontsInTypography } from './utilities/fonts.utilities';
import { lorenipsumMedium } from './utilities/loren-ipsum';
import { formatNameFigma, isViewportProp, log } from './utilities/utilities';
import { PLUGIN_MESSAGE_TYPE, PluginMessage } from './messages';

figma.showUI(__html__, {
  width: 360,
  height: 400,
});

figma.ui.onmessage = async (message: PluginMessage) => {
  if (message.type === PLUGIN_MESSAGE_TYPE.VALIDATE_USED_FONTS) {
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

  if (message.type === PLUGIN_MESSAGE_TYPE.UPDATE_TEXT_STYLES) {
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
    // Update or create text styles
    //

    const containerFrames = {
      [VIEWPORT.desktop]: figma.createFrame(),
      [VIEWPORT.tablet]: figma.createFrame(),
      [VIEWPORT.mobile]: figma.createFrame(),
    };

    keys(containerFrames).forEach((containerKey, containerKeyIndex) => {
      const frameWidth = 800;
      const frame = containerFrames[containerKey];
      frame.name = `TextStyles/${formatNameFigma(containerKey)}`;
      frame.layoutMode = 'VERTICAL';
      frame.x = containerKeyIndex * frameWidth + containerKeyIndex * 144;
      frame.resize(frameWidth, 1200);
      frame.primaryAxisSizingMode = 'AUTO';
      frame.counterAxisSizingMode = 'FIXED';
      frame.itemSpacing = 89;
      frame.paddingTop = 89;
      frame.paddingRight = 89;
      frame.paddingBottom = 89;
      frame.paddingLeft = 89;
    });

    keys(cssTypography.headings).forEach((headingProp, headingPropIndex) => {
      if (isViewportProp(headingProp)) {
        const containerFrame = containerFrames[headingProp as DS.VIEWPORT];
        const headings = cssTypography.headings[headingProp as DS.VIEWPORT];
        keys(headings).forEach((heading, headingIndex) => {
          const textStyle = headings[heading];
          const newFigmaTextStyle = figma.createTextStyle();
          newFigmaTextStyle.name = formatNameFigma([headingProp, heading]);
          newFigmaTextStyle.name = formatNameFigma([headingProp, heading]);
          newFigmaTextStyle.fontName = getFigmaFontFromTextStyle(textStyle) || {
            family: 'Roboto',
            style: 'Regular',
          };
          newFigmaTextStyle.fontSize =
            pxStringToNumber({ value: textStyle.capsize.fontSize }) || 16;

          const newFigmaText = figma.createText();
          containerFrame.appendChild(newFigmaText);
          newFigmaText.name = newFigmaTextStyle.name;
          newFigmaText.characters = newFigmaTextStyle.name;
          newFigmaText.textStyleId = newFigmaTextStyle.id;
          newFigmaText.resize(400, 200);
          newFigmaText.layoutAlign = 'STRETCH';
          newFigmaText.textAutoResize = 'HEIGHT';

          const newFigmaTextLorenIpsum = figma.createText();
          containerFrame.appendChild(newFigmaTextLorenIpsum);
          newFigmaTextLorenIpsum.name = newFigmaTextStyle.name;
          newFigmaTextLorenIpsum.textStyleId = newFigmaTextStyle.id;
          newFigmaTextLorenIpsum.characters = lorenipsumMedium;
          newFigmaTextLorenIpsum.resize(400, 200);
          newFigmaTextLorenIpsum.layoutAlign = 'STRETCH';
          newFigmaTextLorenIpsum.textAutoResize = 'HEIGHT';

          log(`created style: ${heading}`);
        });
      }
    });

    figma.notify('Text styles created successfully ✅');
  }

  if (message.type === PLUGIN_MESSAGE_TYPE.DELETE_TEXT_STYLES) {
    const existingStyles = figma.getLocalTextStyles();

    existingStyles.forEach((existingTextStyle) => {
      existingTextStyle.remove();
    });

    figma.notify('Text styles removed');
  }
};
