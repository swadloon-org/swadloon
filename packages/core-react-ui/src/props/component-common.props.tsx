import { CSSProperties, ReactNode, ReactHTML } from 'react';

export type CommonComponentProps = Partial<{
  /**
   * Uses React.createElement with as as the element type.
   */
  as: keyof ReactHTML;
  /**
   * Pass a complete React component to replace the default outer containing element.
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
   * The default ReactNode
   */
  children: ReactNode;
}>;
