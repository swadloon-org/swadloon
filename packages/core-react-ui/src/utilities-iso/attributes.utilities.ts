// @ts-ignore
import GithubSlugger from 'github-slugger';

/**
 * Normalize and format anchor id.
 *
 * It removes leading digit since vanilla document.querySelector does not accept ids starting with number
 *
 * @see https://www.w3.org/TR/html401/types.html#type-name
 * @see https://github.com/Flet/github-slugger
 */
export function getFormattedAnchorId(value?: string | null): string {
  const validHtmlIdValue = value ? (/^\d/.test(value) ? `id-${value}` : value) : '';
  return GithubSlugger.slug(validHtmlIdValue);
}
