import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-1.treat';

import { Button } from '../button';
import { Paragraph } from '../paragraph';
import { InfoSectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';
import { SECTION_TYPE } from '../../templates/section.template';

type OwnProps = Partial<InfoSectionModelQuery>;

export const InfoSectionType1: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as SECTION_TYPE.TYPE_1_NORMAL | SECTION_TYPE.TYPE_1_REVERSED;
  const sectionStyle = variant === SECTION_TYPE.TYPE_1_NORMAL ? styles.styleNormal : styles.styleReversed;

  return (
    <div className={`${styles.wrapper} ${sectionStyle}`}>
      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'medium'} className={styles.text}>
        {props.text.text}
      </Paragraph>

      {props.link && props.link.type === 'INTERNAL_PAGE' && props.link.page?.route ? (
        <GatsbyLink to={props.link.page?.route}>
          <Button
            variant={'text'}
            size={'medium'}
            variantType={variant === SECTION_TYPE.TYPE_1_NORMAL ? 'primaryDefault' : 'primaryReversed'}
          >
            {props.link.label}
          </Button>
        </GatsbyLink>
      ) : props.link && props.link.type === 'EXTERNAL_URL' && props.link.url ? (
        <a href={props.link.url}>
          <Button
            variant={'text'}
            size={'medium'}
            variantType={variant === SECTION_TYPE.TYPE_1_NORMAL ? 'primaryDefault' : 'primaryReversed'}
          >
            {props.link.label}
          </Button>
        </a>
      ) : null}
    </div>
  );
};
