import { CSSProperties, ReactNode, ReactHTML } from 'react';

export type CommonComponentProps = Partial<{
  as: keyof ReactHTML;
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
  children: ReactNode;
}>;
