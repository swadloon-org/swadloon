import React from 'react';
import { IoStar, IoStarHalf } from 'react-icons/io5';

import { InfoWindow, InfoWindowProps } from '@react-google-maps/api';
import { title } from 'case';

import { LABEL_SIZE, LinkIcon, LinkVariant, PARAGRAPH_SIZE } from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { Link } from '../text/link';
import { Paragraph } from '../text/paragraph';
import { sizeVars } from '../theme';
import { getMergedClassname } from '../utilities-iso';

import * as styles from './google-maps-info-window.css';

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

  const classNames = getMergedClassname([className || '', styles.wrapper]);

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
        <Stack gap={[sizeVars.x2]}>
          <Label variant={LABEL_SIZE.medium}>{title(place.name)}</Label>
          <Link
            href={place.url}
            target={'_blank'}
            size={PARAGRAPH_SIZE.small}
            linkStyle={LinkVariant.underline}
            icon={LinkIcon.right}
          >
            Itinéraire
          </Link>
          <Link
            href={`phone:${place.url}`}
            size={PARAGRAPH_SIZE.small}
            linkStyle={LinkVariant.underline}
          >
            {place.formatted_phone_number}
          </Link>
          {place.rating ? (
            <Paragraph size={PARAGRAPH_SIZE.small}>
              {place.rating} {RatingStars}
              {RatingHalfStars}
            </Paragraph>
          ) : null}
        </Stack>
      </div>
    </InfoWindow>
  );
};
