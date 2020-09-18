import React, { AllHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './action-section.treat';

import { Label } from '../label';
import { Button } from '../button';
import { LABEL } from 'core-design-system';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { GraphCms_ActionSection } from 'packages/mir-website/types/graphql-types';
import Maybe from 'graphql/tsutils/Maybe';

type OwnProps = {
  ActionSection?: Maybe<Pick<GraphCms_ActionSection, 'type' | 'title' | 'titleHighlight' | 'subtitle' | 'actionText'>>;
};

export const ActionSection: React.FC<OwnProps & AllHTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.ActionSection?.type === 'default' ? styles.Default : styles.reversed}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Label variant={LABEL.xSmallBoldUppercase} className={`${styles.subtitle}`}>
            {props.ActionSection?.subtitle}
          </Label>

          <RenderTitleHighlight
            className={`${styles.title}`}
            titleHighlight={props.ActionSection?.titleHighlight}
            title={props.ActionSection?.title}
          ></RenderTitleHighlight>
        </div>
        <div className={`${styles.buttonContainer}`}>
          <Button
            className={`${styles.button}`}
            variantType={props.ActionSection?.type === 'default' ? 'primaryDefault' : 'primaryReversed'}
            size="medium"
            variant="text"
          >
            {props.ActionSection?.actionText}
          </Button>
        </div>
      </div>
    </div>
  );
};
