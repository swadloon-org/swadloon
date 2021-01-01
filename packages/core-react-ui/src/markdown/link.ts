/**
 * This is some text with markups [I'm an inline-style link](https://www.google.com)
 * This is some text with markups [I'm an inline-style link](linkPage:home)
 */

/**
 * input:  [I'm an inline-style link](https://www.google.com)
 * output:
 *   label: I'm an inline-style link
 *   protocol: https
 *   identifier: www.google.com
 *
 * input:  [I'm an inline-style link](page:home)
 * output:
 *   label: I'm an inline-style link
 *   protocol: page
 *   identifier: home
 */
const baseLinkExpression = /\[(?<label>.+)\]\((?<protocol>.+):\/?\/?(?<identifier>.+)\)/g;

type Protocol = 'http' | 'https' | 'page';

// type Props = {};
