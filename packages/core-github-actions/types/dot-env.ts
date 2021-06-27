import { CommonEnv } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 * @see [github-slug-action](https://github.com/rlespinasse/github-slug-action) for added github env variables
 */
const Env = t.intersection([
  CommonEnv,
  t.type({
    /**
     * The branch or tag ref that triggered the workflow.
     */
    GITHUB_REF_SLUG: t.string,
    /**
     * The branch of the head repository.
     * Only set for pull-request event and forked repositories.
     */
    GITHUB_HEAD_REF_SLUG: t.string,
    /**
     * The branch of the base repository.
     * Only set for pull-request event and forked repositories.
     */
    GITHUB_BASE_REF_SLUG: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;

export const env = process.env as Partial<ENV>;
