import React from 'react';

import * as styleRefs from './app.treat';
import { useStyles } from 'react-treat';
import { ColorSwatch } from './components/color-swatch';

export function App() {
  const styles = useStyles(styleRefs);

  return (
    <div>
      <ColorSwatch
        color={{
          h: 33,
          s: 100,
          l: 50,
          a: 80,
        }}
      ></ColorSwatch>
      {/* <GraphQLVoyagerPage /> */}
    </div>
  );
}

import { Voyager } from 'graphql-voyager';
import 'graphql-voyager/dist/voyager.css';
import { CLIENT_CONFIG } from './constants';

type Props = {
  local?: boolean;
};

const GraphQLVoyagerPage: React.FC<Props> = (props) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div style={{ height: '90vh' }}>
      <Voyager introspection={introspectionProvider} />
    </div>
  );

  function introspectionProvider(query: any) {
    if (typeof window === 'undefined') {
      return null;
    }

    return fetch(props.local ? window.location.origin + '/__graphql' : `${CLIENT_CONFIG.GRAPH_CMS_API_URL_MIR}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${CLIENT_CONFIG.GRAPH_CMS_AUTH_TOKEN_MIR}`,
      },
      body: JSON.stringify({ query }),
    }).then((response) => response.json());
  }
};
