// import React from 'react';

// type Props = {};

// export const Com: React.FC<Props> = (props) => {
//   return (
//     <>
//       {data.contentfulPage?.sections?.map((section, index) => {
//         switch (section?.type?.type) {
//           /**
//            * Home page
//            */

//           case SECTION_TYPE.TILE_LINKS: {
//             return (
//               <Section
//                 id={`section-${index}`}
//                 key={index}
//                 baseLayout={SectionBaseLayout.fullWidth}
//                 padding={SectionPadding.none}
//               >
//                 <SectionTileLinks key={index} section={section as ContentfulSection} />
//               </Section>
//             );
//           }

//           /**
//            * Steps
//            */
//           case SECTION_TYPE.VASECTOMY_STEPS: {
//             return (
//               <Section id={`section-${index}`} key={index}>
//                 <SectionSteps key={index} section={section} />
//               </Section>
//             );
//           }

//           /**
//            * Pilot page
//            */
//           case SECTION_TYPE.PILOT_EXAM_INFO:
//           case SECTION_TYPE.PILOT_EXAM_DR_PROFILE:
//           case SECTION_TYPE.CLINIC_PREVIEW:
//           case SECTION_TYPE.CLINIC_MISSION:
//           case SECTION_TYPE.CLINIC_DR_PROFILE:
//           case SECTION_TYPE.VASECTOMY_INFO: {
//             return (
//               <Section
//                 id={`section-${index}`}
//                 key={index}
//                 variant={section.variant && /secondary/gi.test(section.variant) ? Variant.secondary : Variant.primary}
//               >
//                 {/* in the section map for each blocks and for each type of block assign to component */}
//                 {section.text?.childMdx?.body ? (
//                   <Switcher gap={[cssTheme.sizing.var.x6]} alignItems={['center']}>
//                     <BoxV2 justifySelf={['center', 'center', 'flex-end']} style={{ maxWidth: 600 }}>
//                       <Stack gap={[cssTheme.sizing.var.x5]} style={{ maxWidth: `min(480px, 100%)` }} key={'2'}>
//                         <BlockMarkdown key={section.id}>{section.text?.childMdx?.body}</BlockMarkdown>

//                         {section.link?.page?.slug ? (
//                           <Button
//                             size={ButtonSize.large}
//                             variant={Variant.secondary}
//                             Icon={<IoArrowForwardOutline />}
//                             AsElement={<GatsbyLink to={section.link?.page?.slug} />}
//                           >
//                             {section.link?.label}
//                           </Button>
//                         ) : null}
//                       </Stack>
//                     </BoxV2>

//                     {section.medias?.medias?.[0]?.mobileFluidTallImage?.childImageSharp?.fluid ? (
//                       <BoxV2
//                         justifySelf={['center', 'center', 'flex-start']}
//                         style={{ maxWidth: 500, width: 'min(100vw, 100%)' }}
//                       >
//                         <Image
//                           image={{
//                             Tag: 'div',
//                             fluid: section.medias?.medias?.[0]?.mobileFluidTallImage?.childImageSharp
//                               ?.fluid as FluidObject,
//                           }}
//                         ></Image>
//                       </BoxV2>
//                     ) : null}
//                   </Switcher>
//                 ) : section.subSections?.length ? (
//                   <Switcher gap={[cssTheme.sizing.var.x6]}>
//                     {section.subSections?.map((subSection, index) => {
//                       return subSection ? (
//                         <BoxV2
//                           key={subSection.id}
//                           justifySelf={['center', 'center', index % 2 > 0 ? 'flex-start' : 'flex-end']}
//                           style={{ maxWidth: 600 }}
//                         >
//                           <BlockMarkdown key={subSection.id}>{subSection.text?.childMdx?.body}</BlockMarkdown>
//                         </BoxV2>
//                       ) : null;
//                     })}
//                   </Switcher>
//                 ) : null}
//               </Section>
//             );
//           }

//           /**
//            * Cost items sections
//            */
//           case SECTION_TYPE.PILOT_EXAM_SERVICE:
//           case SECTION_TYPE.VASECTOMY_INFO_COST: {
//             return (
//               <Section id={`section-${index}`} key={index} variant={Variant.secondary}>
//                 <SectionCost section={section} />
//               </Section>
//             );
//           }
//           case SECTION_TYPE.VASECTOMY_FORM_LINK: {
//             return (
//               <Section
//                 id={`section-${index}`}
//                 key={index}
//                 baseLayout={SectionBaseLayout.fullWidth}
//                 padding={SectionPadding.none}
//               >
//                 <SectionBannerLink key={index} section={section} />
//               </Section>
//             );
//           }

//           default: {
//             return null;
//           }
//         }
//       })}
//     </>
//   );
// };
