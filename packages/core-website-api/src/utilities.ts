/**
 * Recursive type that add null and undefined to all props
 * when receiving props, components that uses the website api must not trust any props
 */
export type PartialOrNull<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends object ? PartialOrNull<T[P]> : T[P] | null | undefined;
    }
  : T extends string
  ? T | null | undefined | string
  : T | null | undefined;
