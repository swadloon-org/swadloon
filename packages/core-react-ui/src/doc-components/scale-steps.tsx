import React from 'react';

import { SizingSteps } from '@newrade/core-design-system';

import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { Label } from '../text/label';
import { keys } from '../utilities-iso/utilities';

import { Placeholder } from './placeholder';

import { sizeVars } from '../default-theme/default-theme.css';

export const ScaleSteps: React.FC<{ steps: SizingSteps<string>['mobile'] }> = ({ steps }) => {
  return (
    <Stack gap={[sizeVars.x1]}>
      {keys(steps).map((step) => {
        const varValue = steps[step];
        return (
          <Cluster
            key={step}
            gap={[sizeVars.x2]}
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
