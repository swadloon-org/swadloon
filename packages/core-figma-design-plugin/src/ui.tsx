import * as React from 'react'; // don't change * import (needed for Figma plugin)
import * as ReactDOM from 'react-dom'; // don't change * import (needed for Figma plugin)

import { PLUGIN_MESSAGE_TYPE, PluginMessage } from './messages';

import './ui.css';

declare function require(path: string): any;

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
    <div>
      <button onClick={handleValidateFonts}>Validate Fonts</button>
      <button onClick={handleCreateTextStyles}>Create Text Styles</button>
      <button onClick={handleCreateTextStyles}>Create Text Styles</button>
      <button onClick={handleRemoveTextStyles}>Remove Text Styles</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('figma-plugin'));
