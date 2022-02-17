import React from 'react';

import { ButtonIcon, ButtonSize, ICON, Variant } from '@newrade/core-design-system';
import { Button, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ButtonsIcon: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        gridTemplateColumns: 'repeat(auto-fit, 360px)',
        gap: sizeVars.x1,
      }}
    >
      <Button size={ButtonSize.large} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.large} icon={ButtonIcon.left} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.large} icon={ButtonIcon.icon} Icon={ICON.ARROW_RIGHT}></Button>

      <Button size={ButtonSize.medium} icon={ButtonIcon.right} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.medium} icon={ButtonIcon.left} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.medium} icon={ButtonIcon.icon} Icon={ICON.ARROW_RIGHT}></Button>

      <Button size={ButtonSize.small} icon={ButtonIcon.right} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.small} icon={ButtonIcon.left} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.small} icon={ButtonIcon.icon} Icon={ICON.ARROW_RIGHT}></Button>

      <Button size={ButtonSize.xSmall} icon={ButtonIcon.right} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.xSmall} icon={ButtonIcon.left} Icon={ICON.ARROW_RIGHT}></Button>
      <Button size={ButtonSize.xSmall} icon={ButtonIcon.icon} Icon={ICON.ARROW_RIGHT}></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.right}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.left}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.icon}
        Icon={ICON.ARROW_RIGHT}
      ></Button>
    </Stack>
  );
};
