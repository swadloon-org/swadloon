import React, { useMemo, useState } from 'react';

import { pascal } from 'case';

import {
  ButtonIcon,
  ButtonSize,
  ICON,
  ICON_SIZE,
  LABEL_SIZE,
  LinkIcon,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';

import { Button } from '../button/button';
import { lorenipsumShort } from '../doc-components';
import { InputLabel } from '../form/input-label';
import { InputSelect } from '../form/input-select';
import { InputText } from '../form/input-text';
import { InputWrapper } from '../form/input-wrapper';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { IconComp } from '../icons/icon';
import { iconMetadatas } from '../icons/icon-metadatas';
import { useIconContext } from '../icons/icons-provider';
import { SvgDownloader } from '../img/img-downloader';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Tag } from '../tag/tag';
import { Label } from '../text/label';
import { Link } from '../text/link';
import { Paragraph } from '../text/paragraph';
import { colorVars, sizeVars } from '../theme';
import { keys } from '../utilities-iso/utilities';

import { IconBox } from './icon-box';

import * as styles from './icons.css';

type Props = PrimitiveProps;

const allIcons = keys(ICON) as ICON[];
const allIconMetadata = iconMetadatas;
const allIconMetadataEntries = Object.entries(allIconMetadata);

export const Icons: React.FC<Props> = ({ id, style, className, ...props }) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  const iconContext = useIconContext();
  const [selectedIcon, setSelectedIcon] = useState<ICON>(ICON.ARROW_RIGHT);
  const [selectedIconSize, setSelectedIconSize] = useState<ICON_SIZE>(ICON_SIZE.large);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const icons = useMemo<ICON[]>(() => {
    if (!searchTerm) {
      return allIcons;
    }

    const searchTermTokens = searchTerm.split(' ');
    const searchTermReg = searchTermTokens
      .filter((term) => !!term)
      .map((term) => new RegExp(`${term}`, 'i'));

    const resultSearchName: ICON[] = (allIcons as ICON[]).filter(
      (icon) => searchTermReg.map((reg) => reg.test(icon)).filter(Boolean).length > 0
    );

    const resultSearchMeta: ICON[] = allIconMetadataEntries
      .map(([icon, meta]) => {
        const matchDescription =
          searchTermReg.map((reg) => reg.test(meta.description || '')).filter(Boolean).length > 0
            ? icon
            : false;

        const matchTags =
          searchTermReg.map((reg) => reg.test(meta.tags?.join(' ') || '')).filter(Boolean).length >
          0
            ? icon
            : false;

        return matchDescription || matchTags;
      })
      .filter(Boolean) as ICON[];

    return [...new Set([...resultSearchName, ...resultSearchMeta])] as ICON[];
  }, [searchTerm]);

  const iconsByGroup = icons.reduce((previous, current, index) => {
    const meta = allIconMetadata[current];
    const iconGroups = meta.categories?.length ? meta.categories : ['Interface'];

    iconGroups.forEach((iconCategory) => {
      const existingGroup = previous.find((group) => group.name === iconCategory);

      if (!existingGroup) {
        previous.push({ name: iconCategory, icons: [current] });
        return;
      }

      existingGroup.icons.push(current);
    });

    return previous;
  }, [] as { name: string; icons: ICON[] }[]);

  function handleFilterIcons(event: React.ChangeEvent<HTMLInputElement>) {
    const inputText = event.target.value;
    setSearchTerm(inputText);
  }

  function handleSelectingIcon(selectedIcon: ICON) {
    setSelectedIcon(selectedIcon);
  }

  function handleIconSizeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const iconSize = event.target.value;
    setSelectedIconSize(iconSize as ICON_SIZE);
  }

  const renderIcon = (iconName: ICON, index: number): JSX.Element => {
    return (
      <IconBox
        key={index}
        style={{
          cursor: 'pointer',
          border: iconName === selectedIcon ? `2px dotted ${colorVars.colors.primary[500]}` : '',

          borderRadius: 3,
        }}
        onClick={(event) => handleSelectingIcon(iconName as ICON)}
      >
        <IconComp name={iconName as ICON} size={selectedIconSize} />
      </IconBox>
    );
  };
  return (
    <Stack gap={[sizeVars.x5]} {...commonProps}>
      <Cluster wrap={true} gap={[sizeVars.x3]} justifyContent={['flex-start']}>
        <InputWrapper className={styles.inputWrapper}>
          <InputLabel htmlFor={'search-icons'}>Search</InputLabel>
          <InputText
            id="search-icons"
            placeholder={'Arrow right'}
            onChange={handleFilterIcons}
          ></InputText>
        </InputWrapper>

        <InputWrapper className={styles.inputWrapper}>
          <InputLabel htmlFor={'icons-size'}>Size</InputLabel>
          <InputSelect
            id="icons-size"
            placeholder={'Arrow right'}
            value={selectedIconSize}
            onChange={handleIconSizeChange}
          >
            <option value={ICON_SIZE.large}>{pascal(ICON_SIZE.large)}</option>
            <option value={ICON_SIZE.medium}>{pascal(ICON_SIZE.medium)}</option>
            <option value={ICON_SIZE.small}>{pascal(ICON_SIZE.small)}</option>
          </InputSelect>
        </InputWrapper>
      </Cluster>

      {searchTerm ? (
        <Stack gap={[sizeVars.x2]}>
          <div className={styles.iconsGrid}>{icons.map(renderIcon)}</div>
        </Stack>
      ) : (
        iconsByGroup.map((group) => {
          return (
            <Stack key={group.name} gap={[sizeVars.x3]}>
              <Label
                variant={LABEL_SIZE.small}
                variantStyle={TEXT_STYLE.boldUppercase}
                variantLevel={Variant.secondary}
              >
                {group.name}
              </Label>

              <div className={styles.iconsGrid}>{group.icons.map(renderIcon)}</div>
            </Stack>
          );
        })
      )}

      <Stack gap={[sizeVars.x2]}>
        <SvgDownloader filename={pascal(selectedIcon)} style={{ gap: sizeVars.x2 }}>
          <div className={styles.usage}>
            <div className={`${styles.usageHeader}`}>
              <Label>{pascal(selectedIcon)}</Label>

              <Link
                target={'_blank'}
                href={iconContext?.iconFamilyWebsite}
                Icon={<IconComp name={ICON.OPEN} />}
                variantIcon={LinkIcon.right}
              >
                {`${iconContext?.iconFamilyName} `} / {iconContext?.iconFamilyStyle || ''}
              </Link>
            </div>

            <Paragraph>{iconMetadatas[selectedIcon]?.description || lorenipsumShort}</Paragraph>

            <div className={styles.usageRow}>
              {iconMetadatas[selectedIcon]?.tags?.map((tag, tagIndex) => {
                return <Tag key={tagIndex}>{tag}</Tag>;
              })}
            </div>

            <div className={styles.usageRow}>
              <IconComp name={selectedIcon} size={ICON_SIZE.large} />

              <IconComp name={selectedIcon} size={ICON_SIZE.medium} />

              <IconComp name={selectedIcon} size={ICON_SIZE.small} />
            </div>

            <div className={styles.usageRow}>
              <Button
                variant={Variant.primary}
                size={ButtonSize.xSmall}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.right}
              >
                Continue Reading
              </Button>

              <Button
                variant={Variant.primary}
                size={ButtonSize.xSmall}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.icon}
              >
                Continue Reading
              </Button>

              <Button
                variant={Variant.tertiary}
                size={ButtonSize.xSmall}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.icon}
              >
                Continue Reading
              </Button>
            </div>

            <div className={styles.usageRow}>
              <Button
                variant={Variant.primary}
                size={ButtonSize.medium}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.right}
              >
                Continue Reading
              </Button>

              <Button
                variant={Variant.primary}
                size={ButtonSize.medium}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.icon}
              >
                Continue Reading
              </Button>

              <Button
                variant={Variant.tertiary}
                size={ButtonSize.medium}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.icon}
              >
                Continue Reading
              </Button>
            </div>

            <div className={styles.usageRow}>
              <Button
                variant={Variant.primary}
                size={ButtonSize.large}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.right}
              >
                Continue Reading
              </Button>

              <Button
                variant={Variant.primary}
                size={ButtonSize.large}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.icon}
              >
                Continue Reading
              </Button>

              <Button
                variant={Variant.tertiary}
                size={ButtonSize.large}
                Icon={<IconComp name={selectedIcon} />}
                icon={ButtonIcon.icon}
              >
                Continue Reading
              </Button>
            </div>
          </div>
        </SvgDownloader>
      </Stack>
    </Stack>
  );
};
