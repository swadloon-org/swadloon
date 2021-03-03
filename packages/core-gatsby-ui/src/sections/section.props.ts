import { CommonComponentProps } from '@newrade/core-react-ui';
import { BlockAPI } from '../api/block.api';
import { SectionAPI } from '../api/section.api';
import { BlockProps, BlockType } from '../blocks/block.props';

export enum SectionBaseLayout {
  /**
   * Will honor the content margins.
   */
  center = 'center',
  /**
   * Will take up all width available.
   */
  fullWidth = 'fullWidth',
}

/**
 * Predefined section paddings
 */
export enum SectionPadding {
  large = 'large',
  medium = 'medium',
  small = 'small',
  none = 'none',
}

/**
 * Predefined section layouts
 */
export enum SectionLayout {
  switcher = 'switcher',
  stack = 'stack',
  divider = 'divider',
  banner = 'banner',
  showcase = 'showcase',
  messenger = 'messenger',
}

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
  [key in CustomSectionLayouts | SectionLayout]?: (props: { section: SectionAPI }) => React.ReactElement | null;
};

/**
 * Defines a component for each custom block variant
 */
export type CustomBlockVariantComponents<CustomBlockVariants extends string> = {
  [key in CustomBlockVariants | BlockType]?: (
    props: BlockProps & {
      block: BlockAPI;
    }
  ) => React.ReactElement | null;
};

/**
 * Define the API of the SectionRenderer component
 */
export type SectionRendererProps<CustomSectionLayouts extends string = '', CustomBlockVariants extends string = ''> = {
  section: SectionAPI;
  sectionComponents?: CustomSectionLayoutComponents<CustomSectionLayouts>;
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
