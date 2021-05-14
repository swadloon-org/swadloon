import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Cluster, CommonComponentProps, Label, useTreatTheme } from '@newrade/core-react-ui';
import { useCheckAPIStatus } from '@newrade/vsb-common/lib/index-browser';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './status-indicator.treat';

type Props = CommonComponentProps;

export const StatusIndicator: React.FC<Props> = ({ id, style, className, ...props }) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * vsb-api
   */
  const [apiStatus] = useCheckAPIStatus();

  return apiStatus ? (
    <Cluster
      justifyContent={['center']}
      gap={[cssTheme.sizing.var.x1]}
      className={styles.wrapperDesktop}
    >
      <Label
        variantStyle={TEXT_STYLE.bold}
        variant={LABEL_SIZE.small}
        variantLevel={Variant.secondary}
        style={{ justifySelf: `center` }}
      >
        État système :
      </Label>
      <div
        className={apiStatus === 'en ligne' ? styles.statusDotOnline : styles.statusDotError}
      ></div>
    </Cluster>
  ) : null;
};

export const StatusIndicatorMobile: React.FC<Props> = ({ id, style, className, ...props }) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * vsb-api
   */
  const [apiStatus] = useCheckAPIStatus();

  return apiStatus ? (
    <Cluster
      justifyContent={['flex-start']}
      gap={[cssTheme.sizing.var.x2]}
      className={styles.wrapperMobile}
    >
      <Label
        variantStyle={TEXT_STYLE.bold}
        variant={LABEL_SIZE.small}
        variantLevel={Variant.secondary}
        className={apiStatus === 'en ligne' ? styles.statusTextOnline : styles.statusTextError}
        style={{ justifySelf: `center` }}
      >
        {apiStatus === 'en ligne' ? 'OK' : 'ERR'}
      </Label>
    </Cluster>
  ) : null;
};
