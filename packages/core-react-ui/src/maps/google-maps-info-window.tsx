import { LABEL_SIZE, LinkIcon, LinkVariant, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { InfoWindow, InfoWindowProps } from '@react-google-maps/api';
import { title } from 'case';
import React from 'react';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { Link } from '../text/link';
import { Paragraph } from '../text/paragraph';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './google-maps-info-window.treat';

type Props = PrimitiveProps & {
  place: google.maps.places.PlaceResult;
} & InfoWindowProps;

/**
 *
 * @see https://react-google-maps-api-docs.netlify.app/#infowindow
 */
export const GoogleMapsInfoWindow: React.FC<Props> = ({
  id,
  className,
  style,
  as,
  children,
  place,
  ...props
}) => {
  /**
   * Component props
   */
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([className || '', styles.wrapper]);
  const { cssTheme } = useTreatTheme();

  if (!place) {
    return null;
  }

  const RatingStars = place.rating
    ? Array(Math.floor(place.rating))
        .fill(0)
        .map((i, index) => (
          <IoStar key={index} color={'#fbbc04'} style={{ verticalAlign: '-1px' }} />
        ))
    : null;

  const RatingHalfStars = place.rating ? (
    place.rating - Math.floor(place.rating) > 0 ? (
      <IoStarHalf color={'#fbbc04'} style={{ verticalAlign: '-2px' }} />
    ) : null
  ) : null;

  return (
    <InfoWindow {...props}>
      <div className={styles.wrapper}>
        <Stack gap={[cssTheme.sizing.var.x2]}>
          <Label variant={LABEL_SIZE.medium}>{title(place.name)}</Label>
          <Link
            href={place.url}
            target={'_blank'}
            variantSize={PARAGRAPH_SIZE.small}
            variant={LinkVariant.underline}
            variantIcon={LinkIcon.right}
          >
            Itinéraire
          </Link>
          <Link
            href={`phone:${place.url}`}
            variantSize={PARAGRAPH_SIZE.small}
            variant={LinkVariant.underline}
          >
            {place.formatted_phone_number}
          </Link>
          {place.rating ? (
            <Paragraph variant={PARAGRAPH_SIZE.small}>
              {place.rating} {RatingStars}
              {RatingHalfStars}
            </Paragraph>
          ) : null}
        </Stack>
      </div>
    </InfoWindow>
  );
};
