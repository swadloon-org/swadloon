// import React, { useRef } from 'react';

// import { ICON, LABEL_SIZE, NavbarItemSize } from '@newrade/core-design-system';
// import { IconComp, Primitive, usePreventPinchZoom } from '@newrade/core-react-ui';

// import { NavbarButtonProps } from './navbar-item.props';

// import * as styles from './navbar-button-item.css';

// type Props = NavbarButtonProps & {
//   /**
//    * Pass a SVG logo component
//    */
//   SVGLogo?: React.ReactNode;
// };

// /**
//  * @see https://zedesignsystem.com/design-system/components/navbars-items/
//  */
// export const NavbarButtonItem: React.FC<Props> = ({
//   as = 'button',
//   AsElement,
//   variant,
//   size = NavbarItemSize.medium,
//   active,
//   disabled,
//   icon,
//   SVGLogo,
//   ...props
// }) => {
//   const ref = useRef(null);

//   /**
//    *
//    * Styles
//    *
//    */

//   const classNames = [
//     styles.base,
//     styles.navbarButton({
//       variant: 'primary',
//       kind: linkIsExternal ? 'external' : 'normal',
//       size: size === NavbarItemSize.medium ? 'medium' : 'small',
//       state: disabled ? 'disabled' : active ? 'active' : 'rest',
//       hover: disabled ? false : true,
//     }),
//   ];
//   const labelSize = size && size === NavbarItemSize.medium ? LABEL_SIZE.medium : LABEL_SIZE.small;

//   /**
//    *
//    * Events Handling
//    *
//    */

//   usePreventPinchZoom(ref.current);

//   /**
//    *
//    * Logo
//    *
//    */

//   const RenderedLogo = SVGLogo ? <div className={styles.logoWrapper}>{SVGLogo}</div> : null;

//   /**
//    *
//    * Default children
//    *
//    */

//   const children = props.children ? props.children : RenderedLogo ? null : 'Link';

//   return (
//     <Primitive<'button', HTMLButtonElement>
//       ref={ref}
//       as={as}
//       AsElement={AsElement}
//       classNames={classNames}
//       role={AsElement || as !== 'a' ? 'link' : ''}
//       tabIndex={0}
//       variant={variant}
//       {...props}
//     >
//       {icon ? <IconComp name={ICON.OPEN} className={styles.icon} /> : null}
//     </Primitive>
//   );
// };
