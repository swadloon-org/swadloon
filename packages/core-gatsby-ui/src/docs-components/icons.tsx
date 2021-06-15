import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import {
  Cluster,
  CommonComponentProps,
  Icon,
  InputLabel,
  InputSelect,
  InputText,
  InputWrapper,
  Label,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/lib/utilities';
import { pascal } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import { IconBox } from './icon-box';
import * as stylesRef from './icons.treat';

type Props = CommonComponentProps;

export const Icons: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(stylesRef);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });
  const iconGroups = [
    'arrow',
    'chevron',
    'caret',
    'menu',
    'ellipsis',
    'apps',
    'add',
    'remove',
    'close',
    'search',
    'calendar',
    'open',
    'exit',
    'download',
    'copy',
    'duplicate',
    'document',
    'layers',
    'check',
    'radio',
    'logo',
  ];

  function handleFilterIcon() {}
  function handleIconSize() {}

  return (
    <Stack gap={[cssTheme.sizing.var.x4]} {...commonProps}>
      <Cluster wrap={true} gap={[cssTheme.sizing.var.x1]} justifyContent={['flex-start']}>
        <InputWrapper className={styles.inputWrapper}>
          <InputLabel htmlFor={'filter-icons'}>Filter</InputLabel>
          <InputText
            id="filter-icons"
            placeholder={'Arrow right'}
            onChange={handleFilterIcon}
          ></InputText>
        </InputWrapper>

        <InputWrapper className={styles.inputWrapper}>
          <InputLabel htmlFor={'icons-size'}>Size</InputLabel>
          <InputSelect
            id="icons-size"
            placeholder={'Arrow right'}
            value={ICON_SIZE.medium}
            onChange={handleIconSize}
          >
            <option value={ICON_SIZE.large}>{pascal(ICON_SIZE.large)}</option>
            <option value={ICON_SIZE.medium}>{pascal(ICON_SIZE.medium)}</option>
            <option value={ICON_SIZE.small}>{pascal(ICON_SIZE.small)}</option>
          </InputSelect>
        </InputWrapper>
      </Cluster>

      {iconGroups.map((group) => {
        const formattedGroup = pascal(group);
        const reg = new RegExp(group, 'gi');

        const groupIcons = keys(ICON).filter((key) => key.match(reg));

        if (!groupIcons.length) {
          return null;
        }

        return (
          <Stack key={group} gap={[cssTheme.sizing.var.x3]}>
            <Label>{formattedGroup}</Label>

            <Cluster wrap={true} gap={[cssTheme.sizing.var.x4]} justifyContent={['flex-start']}>
              {groupIcons.map((iconName, index) => {
                return (
                  <IconBox key={index} iconName={iconName}>
                    <Icon name={iconName as ICON} />
                  </IconBox>
                );
              })}
            </Cluster>
          </Stack>
        );
      })}
    </Stack>
  );
};
