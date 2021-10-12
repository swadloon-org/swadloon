// // import GraphiQLExplorer from 'graphiql-explorer';

// import GraphiQL from 'graphiql';
// import 'graphiql/graphiql.css';
// import React from 'react';
// import { render } from 'react-dom';
// import { clientEnv } from '../types/dot-env-client';

// const Logo = () => <span>{'My Corp'}</span>;

// // See GraphiQL Readme - Advanced Usage section for more examples like this
// // @ts-ignore
// GraphiQL.Logo = Logo;

// const App = () => (
//   <GraphiQL
//     // @ts-ignore
//     style={{ height: '100vh' }}
//     fetcher={async (graphQLParams) => {
//       const data = await fetch(clientEnv.APP_GRAPHQL_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(graphQLParams),
//         credentials: 'same-origin',
//       });
//       return data.json().catch(() => data.text());
//     }}
//   />
// );

// render(<App />, document.getElementById('app'));
