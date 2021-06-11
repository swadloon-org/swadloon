import { Icon } from '@newrade/core-design-system';
import {
  IoAddCircle,
  IoArrowBackOutline,
  IoArrowDownOutline,
  IoArrowForwardOutline,
  IoArrowUpOutline,
  IoCheckboxOutline,
  IoCheckmarkOutline,
  IoChevronBackOutline,
  IoMenuOutline,
  IoRadioButtonOnOutline,
} from 'react-icons/io5';
import { IconComponents } from '../icons/icons-provider';

export const ionicons5Kit: IconComponents<Icon> = {
  [Icon.arrowUp]: IoArrowUpOutline,
  [Icon.arrowDown]: IoArrowDownOutline,
  [Icon.arrowLeft]: IoArrowBackOutline,
  [Icon.arrowRight]: IoArrowForwardOutline,
  [Icon.chevronLeft]: IoChevronBackOutline,
  [Icon.check]: IoCheckmarkOutline,
  [Icon.checkboxBox]: IoCheckboxOutline,
  [Icon.circle]: IoAddCircle,
  [Icon.menu]: IoMenuOutline,
  [Icon.radio]: IoRadioButtonOnOutline,
  [Icon.radio]: IoRadioButtonOnOutline,
};
