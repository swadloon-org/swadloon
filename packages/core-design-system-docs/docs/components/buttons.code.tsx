import { ButtonVariant } from '@newrade/core-design-system';
import { Button, CodeOutline } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Buttons: React.FC<Props> = (props) => {
  return (
    <CodeOutline>
      <Button variant={ButtonVariant.primary}></Button>
      <Button variant={ButtonVariant.secondary}></Button>
      <Button variant={ButtonVariant.tertiary}></Button>
    </CodeOutline>
  );
};
