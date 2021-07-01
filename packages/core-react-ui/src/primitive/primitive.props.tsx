import React, { CSSProperties } from 'react';

export type AsTypes = keyof React.ReactHTML | keyof React.ReactSVG;

export type PrimitiveProps<As extends AsTypes = 'div'> = Partial<{
  /**
   * Uses React.createElement with as as the element type.
   */
  as: As;
  /**
   * Pass a complete React component to replace the default containing element.
   */
  AsElement: React.ReactNode;
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
   * Inverse components colors
   */
  theme?: 'normal' | 'reversed';
}> &
  // 'ref' points to the legacy ref
  Omit<JSX.IntrinsicElements[As], 'ref'>;
