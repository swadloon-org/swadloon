import { LABEL } from '@newrade/core-design-system-old';
import { Link as GatsbyLink } from 'gatsby';
import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { Button } from '../ui/button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Label } from '../ui/label';
import * as styleRefs from './action-section.treat';
import { SECTION_TYPE } from '../../templates/section.template';

type OwnProps = SectionFragment;

export const ActionSection: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props?.type?.name as SECTION_TYPE.ACTION_PRIMARY | SECTION_TYPE.ACTION_SECONDARY;
  const sectionStyle = variant === SECTION_TYPE.ACTION_PRIMARY ? styles.Default : styles.reversed;

  return (
    <div className={`${styles.wrapper} ${sectionStyle}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label variant={LABEL.xSmallBoldUppercase} className={`${styles.subtitle}`}>
            {props?.subTitle}
          </Label>

          <RenderTitleHighlight
            className={`${styles.title}`}
            titleHighlight={props?.titleHighlight}
            title={props?.title}
          ></RenderTitleHighlight>
        </div>
        <div className={`${styles.buttonContainer}`}>
          {props?.link && props?.link.type === 'INTERNAL_PAGE' && props?.link.page?.route ? (
            <GatsbyLink to={props?.link.page?.route} className={`${styles.button}`}>
              <Button
                className={`${styles.button}`}
                variantType={variant === SECTION_TYPE.ACTION_PRIMARY ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {props?.link.label}
              </Button>
            </GatsbyLink>
          ) : props?.link && props?.link.type === 'EXTERNAL_URL' && props?.link.url ? (
            <a href={props?.link.url} className={`${styles.button}`}>
              <Button
                className={`${styles.button}`}
                variantType={variant === SECTION_TYPE.ACTION_PRIMARY ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {props?.link.label}
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
