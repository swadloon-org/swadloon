import { useRef } from 'react';

import erd from 'element-resize-detector';

/**
 * Resize Sensor Service
 * @description Detects if an element dimensions change (like window.onresize but for
 *     elements and also better performance).
 * @link See https://github.com/wnr/element-resize-detector for usage
 */
export function useResizeSensor(options?: erd.ErdmOptions) {
  const ref = useRef<undefined | erd.Erd>();

  if (!ref.current) {
    ref.current = erd({
      strategy: 'scroll',
      ...options,
    });
  }

  return ref.current;
}
