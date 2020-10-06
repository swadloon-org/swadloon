import { LABEL } from '@newrade/core-design-system-old';
import { Link as GatsbyLink } from 'gatsby';
import { ActionSectionFragment } from 'packages/mir-website/types/graphql-types';
import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Button } from '../button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Label } from '../label';
import * as styleRefs from './action-section.treat';

type OwnProps = { section?: ActionSectionFragment } & AllHTMLAttributes<any>;

export const ActionSection: React.FC<OwnProps> = ({ section, ...props }) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.type === 'default' ? styles.Default : styles.reversed}`}>
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
        <div className={`${styles.buttonContainer}`}>
          {/* <Button
            className={`${styles.button}`}
            variantType={props.type === 'default' ? 'primaryDefault' : 'primaryReversed'}
            size="medium"
            variant="text"
          >
            {props.actionText}
          </Button> */}

          {section?.link && section?.link.type === 'INTERNAL_PAGE' && section?.link.page?.route ? (
            <GatsbyLink to={section?.link.page?.route} className={`${styles.button}`}>
              <Button
                className={`${styles.button}`}
                variantType={section?.type === 'default' ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {section?.link.label}
              </Button>
            </GatsbyLink>
          ) : section?.link && section?.link.type === 'EXTERNAL_URL' && section?.link.url ? (
            <a href={section?.link.url} className={`${styles.button}`}>
              <Button
                className={`${styles.button}`}
                variantType={section?.type === 'default' ? 'primaryDefault' : 'primaryReversed'}
                size="medium"
                variant="text"
              >
                {section?.link.label}
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
