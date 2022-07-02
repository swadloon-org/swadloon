import React from 'react';

import { WindowLocation } from '@reach/router';

import { LABEL_SIZE, LinkVariant, PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { BoxV2, Label, Link, PrimitiveProps, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { scrollIntoView } from '@newrade/core-react-ui/utilities-browser';
import { getFormattedAnchorId, getMergedClassname } from '@newrade/core-react-ui/utilities-iso';

import { useI18next } from '../i18next/use-i18next.hook.js';

import * as styles from './aside.css.js';

type AsideItem = {
  value?: string | null;
  depth?: number | null;
} | null;

type Props = PrimitiveProps<'aside'> & {
  items?: AsideItem[] | null;
  /**
   * Maximum depth to display
   * @default 2
   */
  maxDepth?: number;
  location?: WindowLocation<any>;
};

export const Aside: React.FC<Props> = ({
  id,
  className,
  style,
  maxDepth = 2,
  items,
  location,
  ...props
}) => {
  const renderedItems = items?.filter(filterItemDepthPredicate);
  const currentId = useScrollSpy(renderedItems);
  const { t } = useI18next();

  if (renderedItems?.length === 0) {
    return null;
  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (!event.target) {
      return;
    }

    const linkHref = event.currentTarget.getAttribute('href');
    if (!linkHref) {
      return;
    }

    scrollIntoView({
      id: linkHref,
      event,
    });
  }

  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <BoxV2 id={id} className={classNames} as={'aside'} style={style}>
      <Stack as={'nav'} gap={[sizeVars.x1]}>
        <Label variant={LABEL_SIZE.small} textStyle={TEXT_STYLE.boldUppercase}>
          {t('inThisPage')}
        </Label>

        <ul className={styles.linksWrapper}>
          {renderedItems?.map((item, itemIndex, items) => {
            const formattedId = getFormattedAnchorId(item?.value);
            const href = `#${formattedId}`;
            const selected = formattedId === currentId;
            const hasItemAfter = !!items?.[itemIndex + 1];
            return (
              <li
                draggable={false}
                style={{
                  marginLeft: item?.depth ? (item.depth - 2) * 30 : '',
                  marginTop: item?.depth ? `1em` : '',
                  // @ts-ignore
                  '--aside-before-top':
                    itemIndex === 0
                      ? `-0.7em`
                      : // @ts-ignore
                      item?.depth > 2 && props.items[itemIndex - 1]?.depth < item?.depth
                      ? `-0.6em`
                      : '',
                  // @ts-ignore
                  '--aside-before-height':
                    itemIndex === 0
                      ? `1em`
                      : // @ts-ignore
                      item?.depth > 2 && props.items[itemIndex - 1]?.depth < item?.depth
                      ? `1em`
                      : '',
                }}
                className={`${styles.link} ${selected ? styles.linkSelected : ''} ${
                  hasItemAfter ? styles.linkAfter : ''
                }`}
                key={`${formattedId}-${itemIndex}`}
              >
                <Link
                  draggable={false}
                  className={styles.anchor}
                  style={{ color: 'inherit', fontWeight: 'inherit' }}
                  linkStyle={LinkVariant.noUnderline}
                  size={PARAGRAPH_SIZE.small}
                  href={href}
                  id={`aside-link-${item?.value}`}
                  onClick={handleClick}
                >
                  {item?.value}
                </Link>
              </li>
            );
          })}
        </ul>
      </Stack>
    </BoxV2>
  );

  function filterItemDepthPredicate(item: AsideItem) {
    return (
      item !== undefined &&
      item !== null &&
      item.depth &&
      item.depth > 1 &&
      item.depth < maxDepth + 1
    );
  }

  function useScrollSpy(items: Props['items']) {
    const [currentId, setCurrentId] = React.useState<string | null>(null);

    React.useEffect(() => {
      if (!(items && items.length && items.filter(filterItemDepthPredicate).length)) {
        setCurrentId(null);
        return;
      }

      const selector = items
        .filter(filterItemDepthPredicate)
        .map((item) => `[id="${getFormattedAnchorId(item?.value)}"]`)
        .join(',');

      const elements = document.querySelectorAll<HTMLElement>(selector);
      const elementsArray = Array.from(elements);

      const handleScroll = () => {
        elementsArray.every((element, index, elements) => {
          // check the current element
          if (element.offsetTop + 20 <= window.scrollY) {
            // check the next element, if it satisfy the condition, continue, otherwise we have found the right id
            const nextElement = elements?.[index + 1];
            if (nextElement && nextElement.offsetTop + 20 <= window.scrollY) {
              return true;
            }

            setCurrentId(element.id);
            return false;
          }

          return true;
        });
      };
      window.addEventListener('scroll', handleScroll, {
        passive: true,
      });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [items]);

    return currentId;
  }
};
