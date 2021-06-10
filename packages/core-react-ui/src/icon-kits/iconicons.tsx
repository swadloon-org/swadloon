import { ICON } from '@newrade/core-design-system';
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

export const ionicons5Kit: IconComponents<ICON> = {
  [ICON.ARROW_UP]: IoArrowUpOutline,
  [ICON.ARROW_DOWN]: IoArrowDownOutline,
  [ICON.ARROW_LEFT]: IoArrowBackOutline,
  [ICON.ARROW_RIGHT]: IoArrowForwardOutline,
  [ICON.CHEVRON_LEFT]: IoChevronBackOutline,
  [ICON.CHECK]: IoCheckmarkOutline,
  [ICON.CHECKBOX_BOX]: IoCheckboxOutline,
  [ICON.CIRCLE]: IoAddCircle,
  [ICON.MENU]: IoMenuOutline,
  [ICON.RADIO]: IoRadioButtonOnOutline,
  [ICON.RADIO]: IoRadioButtonOnOutline,
};
