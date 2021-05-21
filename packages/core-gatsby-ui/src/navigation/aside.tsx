import { LABEL_SIZE, LinkVariant, PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { BoxV2, Label, Link, Stack } from '@newrade/core-react-ui';
import { formatAnchorId } from '@newrade/core-react-ui/lib/utilities';
import { WindowLocation } from '@reach/router';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './aside.treat';

type AsideItem = {
  value?: string | null;
  depth?: number | null;
} | null;

type Props = {
  items?: AsideItem[] | null;
  location?: WindowLocation<any>;
};

export const Aside: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const currentId = useScrollSpy(props.items);

  return (
    <BoxV2 as={'aside'} className={styles.wrapper}>
      <Stack as={'nav'} className={styles.wrapper}>
        <Label variant={LABEL_SIZE.small} variantStyle={TEXT_STYLE.boldUppercase}>
          In this page
        </Label>
        <ul className={styles.linksWrapper}>
          {props.items?.filter(filterItemDepthPredicate).map((item, index) => {
            const href = `#${formatAnchorId(item?.value)}`;
            const selected = formatAnchorId(item?.value) === currentId;
            return (
              <li
                style={{
                  marginLeft: item?.depth ? (item.depth - 2) * 30 : '',
                  marginTop: item?.depth ? `1em` : '',
                  // @ts-ignore
                  '--aside-before-top':
                    index === 0
                      ? `-0.7em`
                      : // @ts-ignore
                      item?.depth > 2 && props.items[index - 1]?.depth < item?.depth
                      ? `-0.6em`
                      : '',
                  // @ts-ignore
                  '--aside-before-height':
                    index === 0
                      ? `1em`
                      : // @ts-ignore
                      item?.depth > 2 && props.items[index - 1]?.depth < item?.depth
                      ? `1em`
                      : '',
                }}
                className={`${styles.link} ${selected ? styles.linkSelected : ''}`}
                key={formatAnchorId(item?.value)}
              >
                <Link
                  style={{ color: 'inherit', fontWeight: 'inherit' }}
                  variant={LinkVariant.noUnderline}
                  variantSize={PARAGRAPH_SIZE.small}
                  href={href}
                  id={`aside-link-${item?.value}`}
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
};

function filterItemDepthPredicate(item: AsideItem) {
  return item !== undefined && item !== null && item.depth && item.depth > 1;
}

function useScrollSpy(items: Props['items']) {
  const [currentId, setCurrentId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!(items && items.length && items.filter(filterItemDepthPredicate).length)) {
      setCurrentId(null);
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(
      items
        .filter(filterItemDepthPredicate)
        .map((item) => `[id="${formatAnchorId(item?.value)}"]`)
        .join(',')
    );
    const elementsArray = Array.from(elements);

    const handleScroll = () => {
      elementsArray.forEach((element) => {
        if (element.offsetTop <= window.scrollY + 40) {
          setCurrentId(element.id);
        }
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
