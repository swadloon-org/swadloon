import { LinkVariant, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  Button,
  CommonComponentProps,
  Link,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import * as styleRefs from './design-system-footer.treat';

type Props = CommonComponentProps & {
  editPageUrl?: string;
  nextPageLabel?: string;
  nextPageUrl?: string;
};

export const DesignSystemFooter: React.FC<Props> = ({
  id,
  style,
  className,
  editPageUrl,
  nextPageLabel,
  nextPageUrl,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });
  const renderEditLink = editPageUrl;
  const renderNextPageLink = nextPageUrl && nextPageUrl;

  return (
    <footer {...commonProps}>
      <div className={styles.content}>
        {renderEditLink ? (
          <Link
            variant={LinkVariant.noUnderline}
            variantSize={PARAGRAPH_SIZE.small}
            href={editPageUrl}
          >
            Edit this page
          </Link>
        ) : null}

        {renderNextPageLink ? (
          <Button
            as={'a'}
            variant={Variant.primary}
            Icon={<IoArrowForwardOutline />}
            style={{ marginLeft: 'auto' }}
            href={nextPageUrl}
          >
            {nextPageLabel}
          </Button>
        ) : null}
      </div>
    </footer>
  );
};
