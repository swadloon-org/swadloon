import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './newsletter.treat';

import { Input } from '../input';
import { Label } from '../label';
import { Heading } from '../heading';
import { Button } from '../button';
import { LABEL } from 'core-design-system';

type OwnProps = AllHTMLAttributes<any>;

export const Newsletter: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`} {...props}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label variant={LABEL.xSmallBoldUppercase} className={`${styles.subtitle}`}>
            Vous désirez recevoir nos offres d’emploi?
          </Label>
          <Heading variant="h3" className={`${styles.title}`}>
            Restez à l’affut en vous inscrivant à notre l’infolettre
          </Heading>
        </div>
        <div className={`${styles.containerForm}`}>
          <Button variantType="primaryReversed" size="large" variant="text" id="SubmitButton">
            S'inscrire
          </Button>

          {/* <form className={`${styles.formulaire}`} action="">
            <Input variant="reversed" placeholder="Votre courriel" aria-labelledby="SubmitButton"></Input>
            <Button variantType="secondaryReversed" size="small" variant="text" id="SubmitButton">
              Soumettre
            </Button>
          </form> */}
        </div>
      </div>
    </div>
  );
};
