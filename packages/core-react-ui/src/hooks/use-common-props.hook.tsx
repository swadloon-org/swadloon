import GithubSlugger from 'github-slugger';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';

function getFormattedId(value?: string | null): string {
  return GithubSlugger.slug(value || '');
}

type Props = CommonComponentProps & {
  localStyle?: React.CSSProperties | undefined;
  classNames?: (string | null | undefined)[];
};

/**
 * Hook to reduce component boilerplate. Takes care of normalizing id, classNames and styles.
 */
export function useCommonProps({ localStyle, classNames, id, className, style, ...props }: Props) {
  return {
    /**
     * Normalize ids
     */
    id: id ? getFormattedId(id) : undefined,
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
