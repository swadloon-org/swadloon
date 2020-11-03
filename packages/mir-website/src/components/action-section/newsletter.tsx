import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';
import * as styleRefs from './newsletter.treat';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Heading } from '../ui/heading';
import { Button } from '../ui/button';
import { LABEL } from '@newrade/core-design-system-old';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';

type OwnProps = SectionFragment;

export const Newsletter: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as SECTION_TYPE.NEWSLETTER_PRIMARY | SECTION_TYPE.NEWSLETTER_SECONDARY;

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label variant={LABEL.xSmallBoldUppercase} className={`${styles.subtitle}`}>
            {props.subTitle}
          </Label>

          <RenderTitleHighlight
            className={`${styles.title}`}
            title={props.title}
            titleHighlight={props.titleHighlight}
          ></RenderTitleHighlight>
        </div>

        <div className={`${styles.containerForm}`}>
          {props.link && props.link.type === 'INTERNAL_PAGE' && props.link.page.route ? (
            <GatsbyLink to={props.link.page.route}>
              <Button
                id="SubmitButton"
                variantType={variant !== SECTION_TYPE.NEWSLETTER_PRIMARY ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {props.link.label}
              </Button>
            </GatsbyLink>
          ) : props.link && props.link.type === 'EXTERNAL_URL' && props.link.url ? (
            <a href={props.link.url}>
              <Button
                id="SubmitButton"
                variantType={variant !== SECTION_TYPE.NEWSLETTER_PRIMARY ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {props.link.label}
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
