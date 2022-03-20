export function keys<T extends object>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

export function values<T extends object>(object: T) {
  return Object.values(object) as T[keyof T][];
}
