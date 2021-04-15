import { BoxV2, Label, Stack } from '@newrade/core-react-ui';
import { formatAnchorId } from '@newrade/core-react-ui/lib/utilities';
import { WindowLocation } from '@reach/router';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './aside.treat';

type AsideItem<TState = any> = {
  value?: string | null;
  depth?: number | null;
} | null;

type Props = {
  items?: AsideItem[] | null;
  location?: WindowLocation<any>;
};

export const Aside: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  // const { theme, cssTheme } = useTreatTheme();
  // const id = props.location?.hash;

  const currentId = useScrollSpy(props.items);

  return (
    <BoxV2 as={'aside'} className={styles.wrapper}>
      <Stack as={'nav'} className={styles.wrapper}>
        {/* <Label>Contents</Label> */}
        <div className={styles.linksWrapper}>
          {props.items?.filter(filterItemDepthPredicate).map((item) => {
            const href = `#${formatAnchorId(item?.value)}`;
            const selected = formatAnchorId(item?.value) === currentId;
            return (
              <a href={href} className={styles.link} key={formatAnchorId(item?.value)}>
                <Label
                  id={`aside-link-${item?.value}`}
                  className={`${styles.link} ${selected ? styles.linkSelected : ''}`}
                >
                  {item?.value}
                </Label>
              </a>
            );
          })}
        </div>
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
          // console.log(element.offsetTop);
          // console.log(window.scrollY);
          setCurrentId(element.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  return currentId;
}
