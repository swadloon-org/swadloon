import React from 'react';

import {
  ICON,
  InputIcon,
  InputSize,
  InputValidityState,
  Variant,
} from '@newrade/core-design-system';
import { InputSelect, Stack } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const InputSelects: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizingVars.var.x3]}>
      <div
        style={{
          display: 'grid',
          gap: sizingVars.var.x3,
          gridTemplateColumns: `repeat(auto-fit, minmax(170px, 1fr))`,
        }}
      >
        <InputSelect variant={Variant.primary}>
          <option value={'value'}>Primary</option>
        </InputSelect>

        <InputSelect variant={Variant.secondary}>
          <option value={'value'}>Secondary</option>
        </InputSelect>

        <InputSelect variant={Variant.tertiary}>
          <option value={'value'}>Tertiary</option>
        </InputSelect>
      </div>
      <div
        style={{
          display: 'grid',
          gap: sizingVars.var.x3,
          gridAutoFlow: 'rows',
          gridTemplateColumns: `repeat(auto-fit, minmax(170px, 1fr))`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: sizingVars.var.x3,
            gridTemplateRows: `repeat(4, 1fr)`,
          }}
        >
          <InputSelect variantSize={InputSize.large}>
            <option value={'value'}>Large</option>
          </InputSelect>

          <InputSelect variantSize={InputSize.medium}>
            <option value={'value'}>Medium</option>
          </InputSelect>

          <InputSelect variantSize={InputSize.small}>
            <option value={'value'}>Small</option>
          </InputSelect>
        </div>

        <div
          style={{
            display: 'grid',
            gap: sizingVars.var.x3,
            gridTemplateRows: `repeat(4, 1fr)`,
          }}
        >
          <InputSelect validity={InputValidityState.neutral}>
            <option value={'value'}>Rest</option>
          </InputSelect>

          <InputSelect validity={InputValidityState.valid}>
            <option value={'value'}>Valid</option>
          </InputSelect>

          <InputSelect validity={InputValidityState.warning}>
            <option value={'value'}>Warning</option>
          </InputSelect>

          <InputSelect validity={InputValidityState.error}>
            <option value={'value'}>Error</option>
          </InputSelect>
        </div>

        <div
          style={{
            display: 'grid',
            gap: sizingVars.var.x3,
            gridTemplateRows: `repeat(4, 1fr)`,
          }}
        >
          <InputSelect disabled={true}>
            <option value={'value'}>Disabled</option>
          </InputSelect>

          <InputSelect icon={InputIcon.left} Icon={ICON.CALENDAR}>
            <option value={'value'}>Icon</option>
          </InputSelect>

          <InputSelect placeholder={'Placeholder'}>
            <option value="">Placeholder</option>
            <option value={'value'}>Value</option>
          </InputSelect>
        </div>
      </div>
    </Stack>
  );
};
