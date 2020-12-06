import { PageProps } from 'gatsby';
import React from 'react';

export const DebugGasbyPage: React.FC<PageProps> = (props) => {
  return (
    <div>
      <details>
        <summary>Params</summary>
        <pre>
          <code>{JSON.stringify(props.params, null, 2)}</code>
        </pre>
      </details>
      <details>
        <summary>Location</summary>
        <pre>
          <code>{JSON.stringify(props.location, null, 2)}</code>
        </pre>
      </details>
      <details>
        <summary>Context</summary>
        <pre>
          <code>{JSON.stringify(props.pageContext, null, 2)}</code>
        </pre>
      </details>
      <details>
        <summary>Data</summary>
        <pre>
          <code>{JSON.stringify(props.data, null, 2)}</code>
        </pre>
      </details>
    </div>
  );
};
