/**
 * Recursive type that add null and undefined to all props
 *
 * The goal is components receiving props, must not trust any inputs
 */
export type PartialOrNull<T> = T extends object
  ? {
      [P in keyof T]?: PartialOrNull<T[P]> | null;
    }
  : T extends any[]
  ? {
      [P in keyof T]?: T[P] extends T[number] ? PartialOrNull<T[P]> : never;
    }
  : T extends string
  ? T | null | undefined
  : T | null | undefined;

enum Test {
  value = 'value',
}
type PartialOrNullString = PartialOrNull<'string'>;
type PartialOrNullNumber = PartialOrNull<'number'>;
type PartialOrNullObject = PartialOrNull<{ hey: 1 }>;
type PartialOrNullObjectEnum = PartialOrNull<{ hey: Test }>;
type PartialOrNullArray = PartialOrNull<{ hey: string[] }>;
type PartialOrNullArrayEnum = PartialOrNull<{ hey: Test[] }>;
