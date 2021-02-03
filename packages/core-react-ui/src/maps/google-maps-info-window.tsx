import { InfoWindow, InfoWindowProps } from '@react-google-maps/api';
import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './google-maps-info-window.treat';
import { Label } from '../components/text/label';
import { title } from 'case';
import { Link } from '../components/text/link';
import { Stack } from '../layout/stack';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { LinkIcon, LinkVariant, PARAGRAPH_SIZE, LABEL_SIZE } from '../../../core-design-system/src';
import { Paragraph } from '../components/text/paragraph';
import { IoStar } from '@react-icons/all-files/io5/IoStar';
import { IoStarHalf } from '@react-icons/all-files/io5/IoStarHalf';

type Props = CommonComponentProps & {
  place: google.maps.places.PlaceResult;
} & InfoWindowProps;

/**
 *
 * @see https://react-google-maps-api-docs.netlify.app/#infowindow
 */
export const GoogleMapsInfoWindow: React.FC<Props> = ({ id, className, style, as, children, place, ...props }) => {
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
        .map((i, index) => <IoStar key={index} color={'#fbbc04'} style={{ verticalAlign: '-1px' }} />)
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
          <Link href={`phone:${place.url}`} variantSize={PARAGRAPH_SIZE.small} variant={LinkVariant.underline}>
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
