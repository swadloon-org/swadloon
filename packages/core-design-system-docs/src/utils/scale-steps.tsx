import { SizingSteps } from '@newrade/core-design-system';
import { Cluster, keys, Label, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from './placeholder';

export const ScaleSteps: React.FC<{ steps: SizingSteps['mobile'] }> = ({ steps }) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x1]}>
      {keys(steps).map((step) => {
        const varValue = steps[step];
        return (
          <Cluster
            key={step}
            gap={[cssTheme.sizing.var.x2]}
            justifyContent={['flex-start']}
            style={{ maxWidth: `100%`, overflow: `hidden` }}
          >
            <Label style={{ width: 30 }}>{step}</Label>
            <Placeholder
              key={step}
              id={step}
              style={{ width: `${varValue}px`, height: 30, padding: `inherit 0`, textAlign: 'left' }}
            >
              {' '}
            </Placeholder>
          </Cluster>
        );
      })}
    </Stack>
  );
};
