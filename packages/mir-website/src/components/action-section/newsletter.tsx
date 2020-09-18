import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';
import * as styleRefs from './newsletter.treat';

import { Input } from '../input';
import { Label } from '../label';
import { Heading } from '../heading';
import { Button } from '../button';
import { LABEL } from 'core-design-system';
import { ActionSectionFragment } from '../../../types/graphql-types';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';

type OwnProps = { section?: ActionSectionFragment } & AllHTMLAttributes<any>;

export const Newsletter: React.FC<OwnProps> = ({ section, ...props }) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`} {...props}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label variant={LABEL.xSmallBoldUppercase} className={`${styles.subtitle}`}>
            {section?.subtitle}
          </Label>

          <RenderTitleHighlight
            className={`${styles.title}`}
            titleHighlight={section?.titleHighlight}
            title={section?.title}
          ></RenderTitleHighlight>
        </div>

        <div className={`${styles.containerForm}`}>
          {/* <Button variantType="primaryReversed" size="large" variant="text" id="SubmitButton">
            S'inscrire
          </Button> */}

          {section?.link && section?.link.type === 'INTERNAL_PAGE' && section?.link.page?.route ? (
            <GatsbyLink to={section?.link.page?.route}>
              <Button
                id="SubmitButton"
                variantType={section?.type === 'default' ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {section?.link.label}
              </Button>
            </GatsbyLink>
          ) : section?.link && section?.link.type === 'EXTERNAL_URL' && section?.link.url ? (
            <a href={section?.link.url}>
              <Button
                id="SubmitButton"
                variantType={section?.type === 'default' ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {section?.link.label}
              </Button>
            </a>
          ) : null}

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
