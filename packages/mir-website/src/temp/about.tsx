// import { graphql } from 'gatsby';
// import React from 'react';
// import { useStyles } from 'react-treat';
// import { Layout } from '../layouts';
// import { AboutPageQuery } from '../../types/graphql-types';
// import { BannerSecondary } from '../components/banner-secondary';
// import { Footer } from '../components/footer';
// import { NavBar } from '../components/nav-bar';
// import { Newsletter } from '../components/newsletter/newsletter';
// import * as stylesRef from '../styles/page.treat';
// import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
// import { Testimonial } from '../components/testimonial-section/testimonial-section';

// export const query = graphql`
//   query aboutPage {
//     bannerImage: file(name: { eq: "ImageOffice01" }) {
//       id
//       childImageSharp {
//         # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
//         fluid(quality: 90, maxWidth: 1920) {
//           base64
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//         }
//       }
//     }
//     gcms {
//       aboutPages(first: 1) {
//         bannerTitle

//         actionSections {
//           title
//           subtitle
//           actionText
//         }

//         infoSections {
//           title
//           titleHighlight
//           titleTab
//           type
//           text
//           showTabs
//           actionText
//           infoTiles {
//             illustration
//             title
//             text
//           }
//           childs {
//             showTabs
//             title
//             titleHighlight
//             titleTab
//             type
//             text
//             actionText
//           }
//           image {
//             url(transformation: { image: { resize: { width: 900, fit: max } } })
//           }
//         }
//         testimonialSections {
//           title
//           titleHighlight
//           description
//           testomonials {
//             authorName
//             authorTitle
//             message
//             id
//           }
//         }
//       }
//     }
//   }
// `;

// interface OwnProps {
//   data: AboutPageQuery;
//   location: Location;
// }

// const AboutPage: React.FC<OwnProps> = (props) => {
//   return (
//     <Layout>
//       <About {...props} />
//     </Layout>
//   );
// };

// const About: React.FC<OwnProps> = ({ data, location }) => {
//   const styles = useStyles(stylesRef);

//   const actionSection1 = data.gcms.aboutPages[0].actionSections[0];
//   const section1 = data.gcms?.aboutPages[0]?.infoSections[0];
//   const section2 = data.gcms?.aboutPages[0]?.infoSections[1];
//   const testimonialSections = data.gcms?.aboutPages[0]?.testimonialSections;

//   console.log(testimonialSections);
//   return (
//     <div className={`${styles.wrapper}`}>
//       <NavBar></NavBar>

//       <BannerSecondary
//         imageData={data.bannerImage?.childImageSharp?.fluid}
//         title={data?.gcms?.aboutPages[0]?.bannerTitle}
//       ></BannerSecondary>

//       {section1 && section1.type === 'type2' ? <InfoSectionType2 align="AlignContentLeft" {...section1} /> : null}

//       {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}
//       {testimonialSections ? <Testimonial testimonialSections={testimonialSections} /> : null}

//       <Newsletter id="newsletter"></Newsletter>

//       <Footer></Footer>
//     </div>
//   );
// };

// export default AboutPage;
