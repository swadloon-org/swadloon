import { ButtonIcon, ButtonSize, Variant } from '@newrade/core-design-system';
import { Button, useTreatTheme } from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import React from 'react';

type Props = {};

export const ButtonsIcon: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Button size={ButtonSize.large} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.large} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.large} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

      <Button size={ButtonSize.medium} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.medium} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.medium} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

      <Button size={ButtonSize.small} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.small} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.small} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

      <Button size={ButtonSize.xsmall} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.xsmall} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
      <Button size={ButtonSize.xsmall} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.xsmall}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.xsmall}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.xsmall}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xsmall}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xsmall}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xsmall}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>
    </>
  );
};
