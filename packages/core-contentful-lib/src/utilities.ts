export function keys<T extends object>(object: T) {
  return Object.keys(object) as (keyof T)[];
}
