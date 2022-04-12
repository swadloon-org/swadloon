import * as React from 'react'; // don't change * import (needed for Figma plugin)
import * as ReactDOM from 'react-dom'; // don't change * import (needed for Figma plugin)

import {
  ButtonIntention,
  ButtonSize,
  LABEL_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import { BoxV2, Button, Cluster, Label, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { Footer } from './layout/footer';
import { Providers } from './providers/providers';
import { PLUGIN_MESSAGE_TYPE, PluginMessage } from './messages';

declare function require(path: string): any;

import * as styles from './ui.css';

const App: React.FC = function App() {
  function handleValidateFonts(event: React.MouseEvent<HTMLButtonElement>) {
    const message: PluginMessage = {
      type: PLUGIN_MESSAGE_TYPE.VALIDATE_USED_FONTS,
    };
    parent.postMessage({ pluginMessage: message }, '*');
  }

  function handleCreateTextStyles(event: React.MouseEvent<HTMLButtonElement>) {
    const message: PluginMessage = {
      type: PLUGIN_MESSAGE_TYPE.UPDATE_TEXT_STYLES,
    };
    parent.postMessage({ pluginMessage: message }, '*');
  }

  function handleRemoveTextStyles(event: React.MouseEvent<HTMLButtonElement>) {
    const message: PluginMessage = {
      type: PLUGIN_MESSAGE_TYPE.DELETE_TEXT_STYLES,
    };
    parent.postMessage({ pluginMessage: message }, '*');
  }

  return (
    <Providers>
      <div className={styles.wrapper}>
        <BoxV2 padding={[sizeVars.x2]}>
          <Stack gap={[sizeVars.x2]}>
            <Label
              textStyle={TEXT_STYLE.boldUppercase}
              variantLevel={Variant.secondary}
              variant={LABEL_SIZE.xSmall}
            >
              Fonts
            </Label>
            <Button size={ButtonSize.small} onClick={handleValidateFonts}>
              Validate Fonts
            </Button>

            <Label
              textStyle={TEXT_STYLE.boldUppercase}
              variantLevel={Variant.secondary}
              variant={LABEL_SIZE.xSmall}
            >
              Text
            </Label>
            <Cluster gap={[sizeVars.x1]} justifyContent={['flex-start']}>
              <Button size={ButtonSize.small} onClick={handleCreateTextStyles}>
                Create Text Styles
              </Button>
              <Button
                size={ButtonSize.small}
                onClick={handleRemoveTextStyles}
                variant={ButtonIntention.danger}
              >
                Remove Text Styles
              </Button>
            </Cluster>
          </Stack>
        </BoxV2>

        <Footer></Footer>
      </div>
    </Providers>
  );
};

ReactDOM.render(<App />, document.getElementById('figma-plugin'));
