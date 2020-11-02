import { ICON_SIZE, LABEL } from '@newrade/core-design-system-old';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { Author } from '../components/blog-preview/author';
import { light } from '../design-system/themes.treat';
import * as styleRefs from './design.treat';
import { Heading } from '../components/ui/heading';
import { Paragraph } from '../components/ui/paragraph';
import { Label } from '../components/ui/label';
import { Icon } from '../components/ui/icon';
import { Accordions } from '../components/ui/accordions';

const DesignPage: React.FC<{}> = (props) => {
  return (
    <TreatProvider theme={light}>
      <Design {...props} />
    </TreatProvider>
  );
};

export const Design: React.FC = () => {
  const style = useStyles(styleRefs);

  return (
    <div className={style.wrapper}>
      <div style={{ padding: '2rem', display: 'grid', gridGap: '2rem' }}>
        <Heading variant="h1">Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 4</Heading>

        <Paragraph variant="large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <Paragraph variant="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <Paragraph variant="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>

        <Label variant={LABEL.mediumBoldUppercase}>Label</Label>
        <Label variant={LABEL.mediumBold}>Label</Label>
        <Label variant={LABEL.mediumRegular}>Label</Label>

        <Label variant={LABEL.smallBoldUppercase}>Label</Label>
        <Label variant={LABEL.smallBold}>Label</Label>
        <Label variant={LABEL.smallRegular}>Label</Label>

        <Label variant={LABEL.xSmallBoldUppercase}>Label</Label>
        <Label variant={LABEL.xSmallBold}>Label</Label>
        <Label variant={LABEL.xSmallRegular}>Label</Label>

        <Icon size={ICON_SIZE.large} icon={'IconArrowRight'} />
        <Icon size={ICON_SIZE.medium} icon={'IconArrowRight'} />
        <Icon size={ICON_SIZE.small} icon={'IconArrowRight'} />
        <Accordions
          type="candidates"
          variant="Default"
          icon="IllustrationFactory"
          onClick={() => {
            console.log('test');
          }}
        >
          Test
        </Accordions>
        <Accordions
          type="employer"
          variant="reversed"
          icon="IllustrationFactory"
          onClick={() => {
            console.log('test');
          }}
        >
          Test
        </Accordions>
        {/* <InfoSectionVideo></InfoSectionVideo> */}
        <Author></Author>
      </div>
    </div>
  );
};

export default DesignPage;
