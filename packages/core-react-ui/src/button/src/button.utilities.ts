import { ButtonSize, LABEL_SIZE } from '@newrade/core-design-system';

export function getLabelSizeForButtonSize(size?: ButtonSize): LABEL_SIZE {
  switch (size) {
    case ButtonSize.large: {
      return LABEL_SIZE.medium;
    }
    case ButtonSize.medium: {
      return LABEL_SIZE.small;
    }
    default:
    case ButtonSize.small: {
      return LABEL_SIZE.small;
    }
    case ButtonSize.xSmall: {
      return LABEL_SIZE.xSmall;
    }
  }
}
