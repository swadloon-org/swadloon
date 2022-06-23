/// <reference path="../../core-types/src/github-slugger.d.ts" />

import { AsTypes, PrimitiveProps } from '../primitive/primitive.props.js';
import { getFormattedAnchorId, getMergedClassname } from '../utilities-iso.js';

/**
 * Hook to reduce component boilerplate. Takes care of normalizing id, classNames and styles.
 */
export function useCommonProps<As extends AsTypes = 'div'>({
  id,
  localStyle,
  classNames,
  className,
  style,
  ...props
}: PrimitiveProps<As> & {
  localStyle?: React.CSSProperties | undefined;
  classNames?: (string | null | undefined | boolean)[];
}) {
  return {
    /**
     * Normalize ids
     */
    id: id ? getFormattedAnchorId(id) : undefined,
    /**
     * Merge supplied style with the ones passed from the parent
     */
    style: {
      ...(localStyle ? localStyle : {}),
      ...style,
    },
    /**
     * Merge local class names with the parent's
     */
    className: classNames ? getMergedClassname([className, ...classNames]) : className,
    /**
     * Pass remaining props
     */
    ...props,
  };
}
