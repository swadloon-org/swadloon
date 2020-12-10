export function allValidationType(option: object) {
  const validation = Object.keys(option).map((element: string) => {
    return element;
  });
  return validation;
}
