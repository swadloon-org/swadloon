import React from 'react';
import { useStyles } from 'react-treat';
import { Heading } from '../ui/heading';
import { Illustration } from '../ui/illustration';
import { Paragraph } from '../ui/paragraph';
import { MDXProvider } from '@mdx-js/react';

import * as styleRefs from './info-section-type-6.treat';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { markdownComponents } from '../markdown/components-markdown';
import { MarkdownLink } from '../ui/link';

type OwnProps = SectionFragment;

export const InfoSectionType6: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props.type.name as
    | SECTION_TYPE.TYPE_6_PRIMARY
    | SECTION_TYPE.TYPE_6_SECONDARY
    | SECTION_TYPE.TYPE_6_TERTIARY;

  function sectionStyle() {
    switch (variant) {
      case SECTION_TYPE.TYPE_6_PRIMARY: {
        return styles.type6Primary;
      }
      case SECTION_TYPE.TYPE_6_SECONDARY: {
        return styles.type6Secondary;
      }
      case SECTION_TYPE.TYPE_6_TERTIARY: {
        return styles.type6Tertiary;
      }
    }
  }

  const components = {
    h1: (props) => <Heading variant="h2" {...props}></Heading>,
    h2: (props) => <Heading variant="h3" {...props}></Heading>,
    h3: (props) => <Heading variant="h4" {...props}></Heading>,
    p: (props) => <Paragraph variant="medium" {...props}></Paragraph>,
    a: MarkdownLink,
  };

  return (
    <div className={`${styles.wrapper} ${sectionStyle()}`} key={props.title}>
      <Illustration className={`${styles.illustration}`} name={`Illustration/${props.illustration.title}`} />

      <Heading variant="h3" className={styles.title}>
        {props.title}
      </Heading>
      <Paragraph variant={'small'} className={styles.text}>
        <MDXProvider components={components}>
          <MDXRenderer>{props.text.childMdx.body}</MDXRenderer>
        </MDXProvider>
      </Paragraph>
    </div>
  );
};
