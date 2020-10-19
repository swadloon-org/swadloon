import { Buttons } from '../components/molecules/buttons';
import { DesignSystemTypes } from '../design-system';

export type Components<Types extends DesignSystemTypes = DesignSystemTypes> = {
  buttons: Buttons<
    Types['components']['button']['color'],
    Types['components']['button']['padding'],
    Types['components']['button']['border'],
    Types['components']['button']['outline']
  >;
  // inputs: any;
  // // TOOD
  // links: {
  //   small: {
  //     color: Color;
  //     visited: Color;
  //     hover: Color;
  //     active: Color;
  //   };
  //   medium: {
  //     color: Color;
  //     visited: Color;
  //     hover: Color;
  //     active: Color;
  //   };
  // };
};
