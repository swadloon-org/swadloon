// import { ICON_SIZE, LABEL } from 'core-design-system';
// import React from 'react';
// import { Icon } from '../ui/icon';
// import { Heading } from '../components/heading';
// import { JobSection } from '../components/job-section/job-section';
// import { Label } from '../components/label';
// import { Paragraph } from '../components/paragraph';
// import { light } from '../design-system/themes.treat';
// import { Layout } from '../layouts';
// import { CheckLabel } from '../components/info-section-check';
// import { InfoTile } from '../components/info-section/info-tile';
// import { InfoSectionType6 } from '../components/info-section/info-section-type-6';
// import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
// import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
// import { ActionSection } from '../components/action-section/action-section';
// import { BoxIcon } from '../components/box-icon';
// import { useStyles } from 'react-treat';
// import * as styleRefs from '../styles/page.treat';
// import { Testimonial } from '../components/testimonial-section/testimonial-section';
// import { Process } from '../components/process-section/process-section';
// import { PageProps } from './index.fr';

// const DesignPage: React.FC<PageProps> = (props) => {
//   return (
//     <Layout>
//       <Design {...props} />
//     </Layout>
//   );
// };

// export const Design: React.FC = () => {
//   const style = useStyles(styleRefs);

//   return (
//     <div className={style.wrapper}>
//       <div style={{ padding: '2rem', display: 'grid', gridGap: '2rem' }}>
//         <Heading variant="h1">Heading 1</Heading>
//         <Heading variant="h2">Heading 2</Heading>
//         <Heading variant="h3">Heading 3</Heading>
//         <Heading variant="h4">Heading 4</Heading>

//         <Paragraph variant="large">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//           est laborum.
//         </Paragraph>
//         <Paragraph variant="medium">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//           est laborum.
//         </Paragraph>
//         <Paragraph variant="small">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//           est laborum.
//         </Paragraph>

//         <Label variant={LABEL.mediumBoldUppercase}>Label</Label>
//         <Label variant={LABEL.mediumBold}>Label</Label>
//         <Label variant={LABEL.mediumRegular}>Label</Label>

//         <Label variant={LABEL.smallBoldUppercase}>Label</Label>
//         <Label variant={LABEL.smallBold}>Label</Label>
//         <Label variant={LABEL.smallRegular}>Label</Label>

//         <Label variant={LABEL.xSmallBoldUppercase}>Label</Label>
//         <Label variant={LABEL.xSmallBold}>Label</Label>
//         <Label variant={LABEL.xSmallRegular}>Label</Label>

//         <Icon size={ICON_SIZE.large} icon={'IconArrowRight'} />
//         <Icon size={ICON_SIZE.medium} icon={'IconArrowRight'} />
//         <Icon size={ICON_SIZE.small} icon={'IconArrowRight'} />
//       </div>
//       <ActionSection variant="Default"></ActionSection>
//       <Process title="Notre processus de recrutement" titleHighlight="processus"></Process>
//     </div>
//   );
// };

// export default DesignPage;
