import React from 'react';

import { ICON, InputIcon, InputSize, InputState } from '@newrade/core-design-system';
import { InputSelect } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const InputSelects: React.FC<Props> = (props) => {
  return (
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

        <InputSelect variantSize={InputSize.xSmall}>
          <option value={'value'}>xSmall</option>
        </InputSelect>
      </div>

      <div
        style={{
          display: 'grid',
          gap: sizingVars.var.x3,
          gridTemplateRows: `repeat(4, 1fr)`,
        }}
      >
        <InputSelect state={InputState.rest}>
          <option value={'value'}>Rest</option>
        </InputSelect>

        <InputSelect state={InputState.valid}>
          <option value={'value'}>Valid</option>
        </InputSelect>

        <InputSelect state={InputState.warning}>
          <option value={'value'}>Warning</option>
        </InputSelect>

        <InputSelect state={InputState.error}>
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
          <option value={'value'}>Disabled</option>
        </InputSelect>
      </div>
    </div>
  );
};
