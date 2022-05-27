import { FocusEvent, HTMLAttributes } from 'react';

export interface FocusEvents {
  /** Handler that is called when the element receives focus. */
  onFocus?: (e: FocusEvent) => void;
  /** Handler that is called when the element loses focus. */
  onBlur?: (e: FocusEvent) => void;
  /** Handler that is called when the element's focus status changes. */
  onFocusChange?: (isFocused: boolean) => void;
}

interface FocusProps extends FocusEvents {
  /** Whether the focus events should be disabled. */
  isDisabled?: boolean;
}

interface FocusResult {
  /** Props to spread onto the target element. */
  focusProps: HTMLAttributes<HTMLElement>;
}

/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */
export function useFocus(props: FocusProps): FocusResult {
  if (props.isDisabled) {
    return { focusProps: {} };
  }

  let onFocus, onBlur;
  if (props.onFocus || props.onFocusChange) {
    onFocus = (e: FocusEvent) => {
      if (e.target === e.currentTarget) {
        if (props.onFocus) {
          props.onFocus(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(true);
        }
      }
    };
  }

  if (props.onBlur || props.onFocusChange) {
    onBlur = (e: FocusEvent) => {
      if (e.target === e.currentTarget) {
        if (props.onBlur) {
          props.onBlur(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }
      }
    };
  }

  return {
    focusProps: {
      onFocus,
      onBlur,
    },
  };
}
