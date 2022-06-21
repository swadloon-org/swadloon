import React from 'react';

import { SizingSteps } from '@newrade/core-design-system';

import { sizeVars } from '../default-theme/default-theme.css.js';
import { Cluster } from '../layout/cluster.js';
import { Stack } from '../layout/stack.js';
import { Label } from '../text/label.js';
import { keys } from '../utilities-iso/utilities.js';

import { Placeholder } from './placeholder.js';

export const ScaleStepsV2: React.FC<{ steps: SizingSteps<string>['mobile'] }> = ({ steps }) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      {keys(steps).map((step) => {
        const varValue = steps[step];
        return (
          <Cluster
            key={step}
            gap={[sizeVars.x3]}
            justifyContent={['flex-start']}
            style={{ maxWidth: `100%`, overflow: `hidden` }}
          >
            <Label style={{ width: 30 }}>{step}</Label>
            <Placeholder
              key={step}
              id={step}
              style={{
                width: `${varValue}`,
                height: 30,
                padding: `inherit 0`,
                textAlign: 'left',
              }}
            >
              {' '}
            </Placeholder>
          </Cluster>
        );
      })}
    </Stack>
  );
};
