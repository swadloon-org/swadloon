// // see https://github.com/newrade/newrade/issues/157
// // also remove from eslintignore when fixed
// /* eslint-disable */

// import { VIEWPORT } from '../foundations/layout.js';
// import { ButtonSizes, ButtonState, ButtonVariants } from './../components/molecules/buttons.js';

// type ViewportLabel = keyof typeof VIEWPORT;
// type ButtonSizesLabel = keyof ButtonSizes;
// type ButtonVariantLabel = keyof ButtonVariants;
// type ButtonStateLabel = keyof typeof ButtonState;

// type ButtonVariantProp = `${capitalize ButtonSizesLabel}/${capitalize ButtonVariantLabel}`;
// type ButtonStateProp = `${capitalize ButtonStateLabel}`;
// type ButtonNaming = `Button/${capitalize ViewportLabel}/${ButtonVariantProp}`;

// const name: ButtonVariantProp = 'Small/PrimaryReversed';

// function parseName<Props extends string>(name: Props): ExtractProps<Props> {
//   return name.split('/').reduce((previous, current, index) => {
//     if (index === 0) {
//       previous['size'] = current;
//     }
//     if (index === 1) {
//       previous['variant'] = current;
//     }
//     return previous;
//   }, {} as ExtractProps<Props>)
// }

// parseName(name);

// const parsed: ExtractProps<ButtonVariantProp> = {
//   size: 'Small',
//   variant: 'Primary'
// }

// type ExtractProps<T extends string> =
//   T extends `${capitalize infer Sizes}/${capitalize infer Variants}` ? {
//     size: Sizes,
//     variant: Variants
//   } : {
//     size: string,
//     variant: string
//   };
export {};
