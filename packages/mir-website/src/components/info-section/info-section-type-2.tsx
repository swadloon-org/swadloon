import React from 'react';
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import { useStyles } from 'react-treat';

import * as styleRefs from './info-section-type-2.treat';
import { RenderTitleHighlight } from './info-title-highligh';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE, SECTION_IMAGE_POSITION } from '../../templates/section.template';
import { ImageFrame } from '../carrousel/carrousel';
import { Paragraph } from '../ui/paragraph';
import { Button } from '../ui/button';

type OwnProps = SectionFragment;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as SECTION_TYPE;
  const imagePosition = props.imagePosition as SECTION_IMAGE_POSITION;
  const hasImage = !!props?.medias.medias?.length;

  return (
    <div
      className={`${styles.wrapper} ${props.type ? styles[props.type] : ''} ${props.align ? styles[props.align] : ''}`}
    >
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} animate="visible" initial="hidden">
        {props.image?.url ? (
          <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${styles.image}`} />
        ) : null}
      </motion.div>

      <div
        className={`${styles.content} ${
          props === 'AlignContentLeft' ? styles.alignContentLeft : styles.alignContentRight
        }  `}
      >
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text.text}
        </Paragraph>

        {props.link && props.link.type === 'INTERNAL_PAGE' && props.link.page?.route ? (
          <GatsbyLink to={props.link.page?.route}>
            <Button variantType={'primaryDefault'} variant={'text'} size={'medium'} className={styles.button}>
              {props.link.label}
            </Button>
          </GatsbyLink>
        ) : props.link && props.link.type === 'EXTERNAL_URL' && props.link.url ? (
          <a href={props.link.url}>
            <Button variantType={'primaryDefault'} variant={'text'} size={'medium'} className={styles.button}>
              {props.link.label}
            </Button>
          </a>
        ) : null}
      </div>
    </div>
  );
};
