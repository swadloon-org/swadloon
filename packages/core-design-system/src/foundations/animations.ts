import { MotionProps, Variant } from 'framer-motion';

export enum ANIMATION_TYPE {
  /**
   * transitions
   */
  fadeIn = 'fadeIn',
  fadeOut = 'fadeOut',
  /**
   * feedback
   */
}

export enum ANIMATION_DURATION {
  entering = 'entering',
  exiting = 'exiting',
  complex = 'complex',
}

export enum ANIMATION_CURVE {
  standardCurve = 'standardCurve',
  decelerationCurve = 'decelerationCurve',
  accelerationCurve = 'accelerationCurve',
  sharpCurve = 'sharpCurve',
}

/**
 * Represent a complete animation
 */
export type Animation = {
  /**
   * Animation duration in seconds
   * @example 0.3 => 300ms
   */
  duration?: number;
  /**
   * Overall delay before the animation start in seconds
   * @example 0.3 => 300ms
   */
  delay?: number;
  /**
   * Besier curve
   * @example 'cubic-bezier(0.4,0.0,0.6,1)'
   */
  curve?: string;
  /**
   * Framer motion initial prop
   * @example 'hidden'
   */
  initial: MotionProps['initial'];
  /**
   * Framer motion exit prop
   * @example 'hidden'
   */
  exit?: MotionProps['exit'];
  /**
   * @example
   *    {
   *      hidden: {
   *        x: '-100%',
   *        opacity: 0
   *      },
   *      visible: {
   *        x: 0,
   *        opacity: 1
   *      }
   *    }
   */
  variants: Variants;
  /**
   * @example
   *    {
   *      delay: 0.2,
   *      x: {
   *        ease: 'cubic-bezier(0.4,0.0,0.6,1)',
   *        duration: 0.3,
   *        delay: 0.2,
   *      },
   *      opacity: {
   *        ease: 'ease-out',
   *      },
   *      default: { duration: 0.4 },
   *    }
   */
  transition?: MotionProps['transition'];
};

export type Variants = {
  [key: string]: Variant;
};

// TODO see if possible to type the Variants
// export type Variants<VariantName> = VariantName extends null | undefined
//   ? {
//       [key: string]: Variant;
//     }
//   : {
//       [key in VariantName]: Variant;
//     };

export type AnimationCurves = { [key in ANIMATION_CURVE]: string };
export type AnimationDurations = { [key in ANIMATION_DURATION]: number };
export type AnimationTypes = { [key in ANIMATION_TYPE]: Animation };

export interface Animations {
  curves: AnimationCurves;
  durations: AnimationDurations;
  types: AnimationTypes;
}
