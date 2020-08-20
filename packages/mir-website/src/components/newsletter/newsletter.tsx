import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './newsletter.treat';

// import styles from './newsletter.module.scss';
import { Input } from '../input';
import { Label } from '../label';
import { Heading } from '../heading';
import { Button } from '../button';

type OwnProps = AllHTMLAttributes<any>;

export const Newsletter: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`} {...props}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label size="smallUppercase" className={`${styles.subtitle}`}>
            Vous désirez recevoir nos offres d’emploi?
          </Label>
          <Heading variant="h3" className={`${styles.title}`}>
            Restez à l’affut en vous inscrivant à notre l’infolettre
          </Heading>
        </div>
        <div className={`${styles.containerForm}`}>
          <form className={`${styles.formulaire}`} action="">
            <Input variant="reversed" placeholder="Votre courriel"></Input>
            <Button type="secondaryReversed" size="small" variant="text">
              Soumettre
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
