export function round(
  {
    value,
    precision,
  }: {
    value?: number | null;
    precision: number;
  } = { precision: 0 }
): number {
  if (value === undefined || value === null) {
    return 0;
  }

  if (isNaN(value)) {
    throw Error('NaN error');
  }

  const roundTo = 10 ^ precision;

  return Math.round(roundTo * value) / roundTo;
}
