import {
  Animation,
  AnimationCurves,
  AnimationDurations,
  Animations,
  AnimationTypes,
  ANIMATION_CURVE,
  ANIMATION_DURATION,
  ANIMATION_TYPE,
} from '@newrade/core-design-system';

const curves: AnimationCurves = {
  [ANIMATION_CURVE.standardCurve]: 'cubic-bezier(0.4,0.0,0.6,1)',
  [ANIMATION_CURVE.decelerationCurve]: 'cubic-bezier(0.4,0.0,0.6,1)',
  [ANIMATION_CURVE.accelerationCurve]: 'cubic-bezier(0.4,0.0,0.6,1)',
  [ANIMATION_CURVE.sharpCurve]: 'cubic-bezier(0.4,0.0,0.6,1)',
};

const durations: AnimationDurations = {
  [ANIMATION_DURATION.entering]: 200,
  [ANIMATION_DURATION.exiting]: 200,
  [ANIMATION_DURATION.complex]: 350,
};

const fadeIn: Animation = {
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};

const types: AnimationTypes = {
  [ANIMATION_TYPE.fadeIn]: fadeIn,
  [ANIMATION_TYPE.fadeOut]: fadeIn,
};

export const defaultAnimations: Animations = {
  curves,
  durations,
  types,
};

// export class AnimationCurves {
//     static STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
//     static DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
//     static ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
//     static SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
//   }

/** @docs-private */
// export class AnimationDurations {
//   static COMPLEX = '375ms';
//   static ENTERING = '225ms';
//   static EXITING = '195ms';

// Easing Curves
// TODO(jelbourn): all of these need to be revisited

// The default animation curves used by material design.
// $mat-linear-out-slow-in-timing-function: cubic-bezier(0, 0, 0.2, 0.1) !default;
// $mat-fast-out-slow-in-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;
// $mat-fast-out-linear-in-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;

// $ease-in-out-curve-function: cubic-bezier(0.35, 0, 0.25, 1) !default;

// $swift-ease-out-duration: 400ms !default;
// $swift-ease-out-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !default;
// $swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;

// $swift-ease-in-duration: 300ms !default;
// $swift-ease-in-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2) !default;
// $swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function !default;

// $swift-ease-in-out-duration: 500ms !default;
// $swift-ease-in-out-timing-function: $ease-in-out-curve-function !default;
// $swift-ease-in-out: all $swift-ease-in-out-duration $swift-ease-in-out-timing-function !default;

// $swift-linear-duration: 80ms !default;
// $swift-linear-timing-function: linear !default;
// $swift-linear: all $swift-linear-duration $swift-linear-timing-function !default;
