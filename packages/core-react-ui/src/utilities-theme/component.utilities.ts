import { MapLeafNodes } from '@vanilla-extract/private';

import { DeepPartial } from '@newrade/core-design-system';

import { keys } from '../utilities-iso/utilities-iso';

export function setVarsValuesToStyleObject<Styles extends object>(
  obj: MapLeafNodes<Styles, string>,
  vars: DeepPartial<MapLeafNodes<Styles, string | undefined>>
): MapLeafNodes<Styles, string> {
  return keys(vars).reduce((previous, varsProp) => {
    // @ts-ignore
    const objectValue = obj[varsProp];

    if (!objectValue) {
      return previous;
    }
    // @ts-ignore
    const varsValue = vars[varsProp];
    const varsValueAsPrimitive = varsValue as string | undefined;

    if (!varsValueAsPrimitive) {
      return previous;
    }

    if (typeof varsValueAsPrimitive === 'string') {
      (obj[varsProp] as string) = varsValue;
      return previous;
    }

    if (typeof varsValue === 'object') {
      (obj[varsProp] as object) = setVarsValuesToStyleObject(objectValue, varsValue);
      return previous;
    }

    return previous;
  }, obj as MapLeafNodes<Styles, string>);
}
