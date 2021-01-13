export type PaddingProps =
  | [PaddingNumber | PaddingString]
  | [PaddingNumber | PaddingString, PaddingNumber | PaddingString]
  | [PaddingNumber | PaddingString, PaddingNumber | PaddingString, PaddingNumber | PaddingString]
  | [
      PaddingNumber | PaddingString,
      PaddingNumber | PaddingString,
      PaddingNumber | PaddingString,
      PaddingNumber | PaddingString
    ];

/**
 * 9 => 9px
 */
type PaddingNumber = number;

/**
 * 9 => 9px
 * '9px' => 9px
 */
type PaddingString = string;
