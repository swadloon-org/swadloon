import {
  ButtonIcon,
  ButtonSize,
  ICON,
  ICON_SIZE,
  LinkIcon,
  Variant,
} from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  globalThemeReversed,
  IconComp,
  iconMetadatas,
  InputLabel,
  InputSelect,
  InputText,
  InputWrapper,
  Label,
  Link,
  Paragraph,
  PrimitiveProps,
  Stack,
  SvgDownloader,
  Tag,
  useCommonProps,
  useIconContext,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/lib/utilities';
import { pascal } from 'case';
import React, { useMemo, useState } from 'react';
import { useStyles } from 'react-treat';
import { IconBox } from './icon-box';
import * as stylesRef from './icons.treat';
import { lorenipsumShort } from './loren-ipsum';

type Props = PrimitiveProps;

const allIcons = keys(ICON);
const allIconMetadata = iconMetadatas;

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

  const iconContext = useIconContext();
  const [selectedIcon, setSelectedIcon] = useState<ICON>(ICON.ARROW_RIGHT);
  const [selectedIconSize, setSelectedIconSize] = useState<ICON_SIZE>(ICON_SIZE.medium);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const icons = useMemo(() => {
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

    const resultSearchMeta: ICON[] = Object.entries(allIconMetadata)
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

    return [...new Set([...resultSearchName, ...resultSearchMeta])];
  }, [searchTerm]);

  function handleFilterIcons(event: React.ChangeEvent<HTMLInputElement>) {
    const inputText = event.target.value;
    setSearchTerm(inputText);
  }

  function handleSelectingIcon(selectedIcon: ICON) {
    setSelectedIcon(selectedIcon);
  }

  function handleIconSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const iconSize = event.target.value;
    setSelectedIconSize(iconSize as ICON_SIZE);
  }

  return (
    <Stack gap={[cssTheme.sizing.var.x4]} {...commonProps}>
      <Cluster wrap={true} gap={[cssTheme.sizing.var.x3]} justifyContent={['flex-start']}>
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

      <Stack gap={[cssTheme.sizing.var.x2]}>
        <div className={styles.iconsGrid}>
          {icons.map((iconName, index) => {
            return (
              <IconBox
                key={index}
                style={{
                  cursor: 'pointer',
                  border:
                    iconName === selectedIcon
                      ? `2px dotted ${cssTheme.colors.colors.primary[500]}`
                      : '',

                  borderRadius: 3,
                }}
                onClick={(event) => handleSelectingIcon(iconName as ICON)}
              >
                <IconComp name={iconName as ICON} size={selectedIconSize} />
              </IconBox>
            );
          })}
        </div>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x2]}>
        <SvgDownloader filename={pascal(selectedIcon)} style={{ gap: cssTheme.sizing.var.x2 }}>
          <div className={styles.usage}>
            <div className={`${styles.usageHeader} ${globalThemeReversed}`}>
              <Label>{pascal(selectedIcon)}</Label>

              <Link
                target={'_blank'}
                href={iconContext?.iconFamilyWebsite}
                Icon={<IconComp name={ICON.OPEN} />}
                variantIcon={LinkIcon.right}
              >
                {iconContext?.iconFamilyName || ''}
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
