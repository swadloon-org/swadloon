import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';
import { Heading } from '../ui/heading';
import { Illustration } from '../ui/illustration';
import { MarkdownLink } from '../ui/link';
import { Paragraph } from '../ui/paragraph';
import * as styleRefs from './info-section-type-6.treat';

type OwnProps = SectionFragment;

export const InfoSectionType6: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const variant = props?.type?.name as
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
    h1: (props: any) => <Heading variant="h2" {...props}></Heading>,
    h2: (props: any) => <Heading variant="h3" {...props}></Heading>,
    h3: (props: any) => <Heading variant="h4" {...props}></Heading>,
    p: (props: any) => <Paragraph variant="medium" {...props}></Paragraph>,
    a: MarkdownLink,
  };

  return (
    <div className={`${styles.wrapper} ${sectionStyle()}`} key={props?.title}>
      <Illustration className={`${styles.illustration}`} name={`illustrations/${props?.illustration?.title}`} />

      <Heading variant="h3" className={styles.title}>
        {props?.title}
      </Heading>
      <div className={styles.text}>
        <MDXProvider components={components}>
          <MDXRenderer>{props?.text?.childMdx?.body as any}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  );
};
