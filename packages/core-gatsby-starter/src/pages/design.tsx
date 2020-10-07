import React from 'react';
import { getHSLColor } from '@newrade/core-react-ui';

type Props = {};

const DesignPage: React.FC<Props> = (props) => {
  return (
    <div>
      <code>
        <pre>
          {JSON.stringify(
            getHSLColor({
              h: 222,
              s: 20,
              l: 50,
            }),
            null,
            2
          )}
        </pre>
      </code>
    </div>
  );
};

export default DesignPage;
