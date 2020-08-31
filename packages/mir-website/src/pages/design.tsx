import { ICON_SIZE } from 'core-design-system';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { Icon } from '../components-ui/icon';
import { Heading } from '../components/heading';
import { InfoSkills } from '../components/info-section/info-skills';
import { Paragraph } from '../components/paragraph';
import { light } from '../themes/mir-theme.treat';
import { Root, PageProps } from './index';

const DesignPage: React.FC<PageProps> = (props) => {
  return (
    <Root>
      <Design {...props} />
    </Root>
  );
};

export const Design: React.FC = () => {
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <Heading variant="h1">Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 4</Heading>
        <Icon size={ICON_SIZE.large} icon={'ArrowRight'} />
        <Icon size={ICON_SIZE.medium} icon={'ArrowRight'} />
        <Icon size={ICON_SIZE.small} icon={'ArrowRight'} />
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
      </div>

      <InfoSkills>test</InfoSkills>
    </>
  );
};

export default DesignPage;
