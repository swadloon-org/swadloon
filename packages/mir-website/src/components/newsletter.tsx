import React, { AllHTMLAttributes } from 'react';
import styles from './newsletter.module.scss';
import { Input } from './input';
import { Label } from './label';
import { Heading } from './heading';
import { Button } from './button';

type OwnProps = AllHTMLAttributes<any>;

export const Newsletter: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles.wrapper}`} {...props}>
      <div className={`${styles.container}`}>
        <Label size="small" variant="uppercase" className={`${styles.subtitle}`}>
          Vous désirez recevoir nos offres d’emploi?
        </Label>
        <Heading variant="h3" className={`${styles.title}`}>
          Restez à l’affut en vous inscrivant à notre l’infolettre
        </Heading>
        <form className={`${styles.formulaire}`} action="">
          <Input variant="reversed" placeholder="Votre courriel"></Input>
          <Button type="secondary" size="small" variant="text" variantStyle="reversed">
            Soumettre
          </Button>
        </form>
      </div>
    </div>
  );
};
