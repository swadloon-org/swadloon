import { CommonComponentProps } from '@newrade/core-react-ui';
import { SectionAPI, SectionLayout } from '../api/section.api';
import { BlockProps, BlockType } from '../blocks/block.props';

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
 * Defines a component for each custom block variant
 */
export type CustomBlockVariantComponents<CustomBlockVariants extends string> = {
  [key in CustomBlockVariants | BlockType]?: (props: BlockProps) => React.ReactElement | null;
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
