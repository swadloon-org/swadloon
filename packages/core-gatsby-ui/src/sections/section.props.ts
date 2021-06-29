import { CommonComponentProps } from '@newrade/core-react-ui';
import { SectionAPI, SectionLayout } from '@newrade/core-website-api';
import { CustomBlockVariantComponents } from '../blocks/block.props';

/**
 * Minimal props for a Section component
 */
export type SectionProps = CommonComponentProps & {
  /** tells the section whether it is visible in the viewport */
  inView?: boolean;
  /** section data */
  section?: SectionAPI;
};

/**
 * Defines a component for each custom layout
 */
export type CustomSectionLayoutComponents<CustomSectionLayouts extends string> = {
  [key in CustomSectionLayouts | SectionLayout]?: (
    props: SectionProps
  ) => React.ReactElement | null;
};

/**
 * Define the API of the SectionRenderer component
 */
export type SectionRendererProps<
  CustomSectionLayouts extends string = '',
  CustomBlockVariants extends string = ''
> = SectionProps & {
  sectionComponents?: CustomSectionLayoutComponents<CustomSectionLayouts>;
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
