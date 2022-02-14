import {
  IoAddCircleOutline,
  IoAddOutline,
  IoAppsOutline,
  IoArrowBackCircleOutline,
  IoArrowBackOutline,
  IoArrowDownCircleOutline,
  IoArrowDownOutline,
  IoArrowForwardCircleOutline,
  IoArrowForwardOutline,
  IoArrowUpCircleOutline,
  IoArrowUpOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoCaretBackCircleOutline,
  IoCaretBackOutline,
  IoCaretDownCircleOutline,
  IoCaretDownOutline,
  IoCaretForwardCircleOutline,
  IoCaretForwardOutline,
  IoCaretUpCircleOutline,
  IoCaretUpOutline,
  IoCheckboxOutline,
  IoCheckmarkCircleOutline,
  IoCheckmarkOutline,
  IoChevronBackCircleOutline,
  IoChevronBackOutline,
  IoChevronDownCircleOutline,
  IoChevronDownOutline,
  IoChevronForwardCircleOutline,
  IoChevronForwardOutline,
  IoChevronUpCircleOutline,
  IoChevronUpOutline,
  IoCloseCircleOutline,
  IoCloseOutline,
  IoCopyOutline,
  IoDocumentOutline,
  IoDownloadOutline,
  IoDuplicateOutline,
  IoEllipsisVertical,
  IoExitOutline,
  IoHomeOutline,
  IoLayersOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailOutline,
  IoMenuOutline,
  IoMoonOutline,
  IoOpenOutline,
  IoPersonCircleOutline,
  IoPrintOutline,
  IoRadioButtonOffOutline,
  IoRadioButtonOnOutline,
  IoRemoveCircleOutline,
  IoRemoveOutline,
  IoSearchOutline,
  IoStarHalfOutline,
  IoStarOutline,
  IoSunnyOutline,
} from 'react-icons/io5';

import { ICON } from '@newrade/core-design-system';

import { IconComponents, IconConfig } from '../icons/icons-provider';

import { newradeIconsKit } from './newrade-icons';

export const ioniconsOutlineConfig: IconConfig = {
  iconFamilyName: 'ionicons',
  iconFamilyStyle: 'outline',
  iconFamilyWebsite: 'https://ionic.io/ionicons',
};

export const ionicons5OutlineComponents: IconComponents<ICON> = {
  /**
   * Arrows
   */
  [ICON.ARROW_UP]: IoArrowUpOutline,
  [ICON.ARROW_DOWN]: IoArrowDownOutline,
  [ICON.ARROW_LEFT]: IoArrowBackOutline,
  [ICON.ARROW_RIGHT]: IoArrowForwardOutline,
  [ICON.CHEVRON_UP]: IoChevronUpOutline,
  [ICON.CHEVRON_DOWN]: IoChevronDownOutline,
  [ICON.CHEVRON_LEFT]: IoChevronBackOutline,
  [ICON.CHEVRON_RIGHT]: IoChevronForwardOutline,
  [ICON.CARET_UP]: IoCaretUpOutline,
  [ICON.CARET_DOWN]: IoCaretDownOutline,
  [ICON.CARET_LEFT]: IoCaretBackOutline,
  [ICON.CARET_RIGHT]: IoCaretForwardOutline,
  /**
   * Interface
   */
  [ICON.MENU]: IoMenuOutline,
  [ICON.ELLIPSIS_VERTICAL]: IoEllipsisVertical,
  [ICON.APPS]: IoAppsOutline,
  [ICON.ADD]: IoAddOutline,
  [ICON.REMOVE]: IoRemoveOutline,
  [ICON.CLOSE]: IoCloseOutline,
  [ICON.SEARCH]: IoSearchOutline,
  [ICON.CALENDAR]: IoCalendarOutline,
  [ICON.CALL]: IoCallOutline,
  [ICON.PRINT]: IoPrintOutline,
  [ICON.OPEN]: IoOpenOutline,
  [ICON.EXIT]: IoExitOutline,
  [ICON.LOCATION]: IoLocationOutline,
  [ICON.MAIL]: IoMailOutline,
  [ICON.HOME]: IoHomeOutline,
  [ICON.DOWNLOAD]: IoDownloadOutline,
  [ICON.COPY]: IoCopyOutline,
  [ICON.DUPLICATE]: IoDuplicateOutline,
  [ICON.DOCUMENT]: IoDocumentOutline,
  [ICON.LAYERS]: IoLayersOutline,
  [ICON.CHECK]: IoCheckmarkOutline,
  [ICON.CHECKMARK_CIRCLE]: IoCheckmarkCircleOutline,
  [ICON.CHECKBOX]: IoCheckboxOutline,

  /**
   * Actions
   */
  [ICON.ARROW_UP_CIRCLE]: IoArrowUpCircleOutline,
  [ICON.ARROW_DOWN_CIRCLE]: IoArrowDownCircleOutline,
  [ICON.ARROW_LEFT_CIRCLE]: IoArrowBackCircleOutline,
  [ICON.ARROW_RIGHT_CIRCLE]: IoArrowForwardCircleOutline,
  [ICON.CHEVRON_UP_CIRCLE]: IoChevronUpCircleOutline,
  [ICON.CHEVRON_DOWN_CIRCLE]: IoChevronDownCircleOutline,
  [ICON.CHEVRON_LEFT_CIRCLE]: IoChevronBackCircleOutline,
  [ICON.CHEVRON_RIGHT_CIRCLE]: IoChevronForwardCircleOutline,
  [ICON.CARET_UP_CIRCLE]: IoCaretUpCircleOutline,
  [ICON.CARET_DOWN_CIRCLE]: IoCaretDownCircleOutline,
  [ICON.CARET_LEFT_CIRCLE]: IoCaretBackCircleOutline,
  [ICON.CARET_RIGHT_CIRCLE]: IoCaretForwardCircleOutline,
  [ICON.ADD_CIRCLE]: IoAddCircleOutline,
  [ICON.REMOVE_CIRCLE]: IoRemoveCircleOutline,
  [ICON.CLOSE_CIRCLE]: IoCloseCircleOutline,
  [ICON.PERSON_CIRCLE]: IoPersonCircleOutline,
  [ICON.RADIO_ON]: IoRadioButtonOnOutline,
  [ICON.RADIO_OFF]: IoRadioButtonOffOutline,

  /**
   *
   * Nature
   *
   */

  [ICON.SUN]: IoSunnyOutline,
  [ICON.MOON]: IoMoonOutline,
  [ICON.STAR]: IoStarOutline,
  [ICON.HALF_STAR]: IoStarHalfOutline,

  /**
   *
   * Social Media
   *
   */

  [ICON.LOGO_TWITTER]: IoLogoTwitter,
  [ICON.LOGO_FACEBOOK]: IoLogoFacebook,
  [ICON.LOGO_INSTAGRAM]: IoLogoInstagram,
  [ICON.LOGO_LINKEDIN]: IoLogoLinkedin,
  [ICON.LOGO_YOUTUBE]: IoLogoYoutube,
  [ICON.LOGO_GITHUB]: IoLogoGithub,
  // custom icons that fits with ionicons
  ...newradeIconsKit,
};
