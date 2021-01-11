import { Label, Stack, Box, useTreatTheme } from '@newrade/core-react-ui';
import { WindowLocation } from '@reach/router';
import { kebab } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import { useLocation } from '../../hooks/use-reach-router-location';
import * as styleRefs from './aside.treat';
import { formatAnchorId } from '@newrade/core-react-ui';

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
  const { theme, cssTheme } = useTreatTheme();

  const id = props?.location?.hash;
  const currentId = useScrollSpy(props.items);

  return (
    <Box as={'aside'} className={styles.wrapper}>
      <Stack as={'nav'} className={styles.wrapper}>
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
      </Stack>
    </Box>
  );
};

function filterItemDepthPredicate(item: AsideItem) {
  return item !== undefined && item !== null && item.depth && item.depth > 1;
}

function useScrollSpy(items: Props['items']) {
  const [currentId, setCurrentId] = React.useState<string | null>(null);
  const location = useLocation();

  // React.useEffect(() => setCurrentId(null), [location?.hash]);

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
          console.log(element.offsetTop);
          console.log(window.scrollY);
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
