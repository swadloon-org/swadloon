import React, { CSSProperties } from 'react';

export type AsTypes = keyof React.ReactHTML | keyof React.ReactSVG;

/**
 * Base props that components can handle
 */
export type PrimitiveProps<As extends AsTypes = 'div'> = Partial<{
  /**
   * Id that will be normalized
   */
  id: string;
  /**
   * Class name that will be applied to the component's outer containing element.
   * @example
   *  ```jsx
   *  <Component className={'class-from-parent'}/>
   *  ```
   *  will results in:
   *  ```html
   *  <div class="class-from-parent">...</div>
   *  ````
   */
  className: string;
  /**
   * WAI-ARIA role
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role?: React.AriaRole;
  /**
   * Classnames that will be combined and set to class={...}
   */
  classNames: (string | null | undefined | boolean)[];
  /**
   * Inline styles that will be applied to the component's outer containing element.
   * @example
   *  ```jsx
   *  <Component styles={{display: 'none'}} />
   *  ```
   *  will results in:
   *  ```html
   *  <div style="display: 'none'">...</div>
   *  ````
   */
  style: CSSProperties;
  /**
   * Uses React.createElement with as as the element type.
   */
  as: As;
  /**
   * Pass a complete React component to replace the default containing element.
   */
  AsElement: React.ReactNode;
  /**
   * Inverse components colors
   * @deprecated use `colorMode` instead
   */
  theme?: 'normal' | 'reversed';
  /**
   * Inverse components colors
   */
  colorMode?: 'normal' | 'reversed';
  /**
   * Preset for component's sizes
   * @version 2
   */
  // size?: 'xSmall' | 'small' | 'medium' | 'large';
}> &
  // 'ref' points to the legacy ref so we remove it
  Omit<JSX.IntrinsicElements[As], 'ref'>;
