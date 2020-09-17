import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './action-section.treat';

import { Label } from '../label';
import { Button } from '../button';
import { LABEL } from 'core-design-system';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';

type OwnProps = {
  variant: 'Default' | 'reversed';
};

export const ActionSection: React.FC<OwnProps & AllHTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.variant}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label variant={LABEL.xSmallBoldUppercase} className={`${styles.subtitle}`}>
            POSTULEZ EN LIGNE{' '}
          </Label>

          <RenderTitleHighlight
            className={`${styles.title}`}
            titleHighlight="curriculum"
            title="Envoyez-nous votre curriculum vitae maintenant"
          ></RenderTitleHighlight>
        </div>
        <div className={`${styles.buttonContainer}`}>
          <Button
            className={`${styles.button}`}
            variantType={props.variant === 'Default' ? 'primaryDefault' : 'primaryReversed'}
            size="medium"
            variant="text"
          >
            Soumettre mon CV
          </Button>
        </div>
      </div>
    </div>
  );
};
