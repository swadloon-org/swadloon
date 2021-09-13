import debug from 'debug';
import * as t from 'io-ts';

export type ENV = t.TypeOf<typeof Env>;
export const Env = t.intersection([
  t.type({}),
  t.type({
    /**
     * The master repository's git host
     * @default 'github.com'
     */
    MASTER_GIT_HOST: t.string,
    /**
     * The master repository's organization
     * @example '@newrade'
     */
    MASTER_REPO_ORG: t.string,
    /**
     * The master repository's name
     * @example 'repo-name' in @<org>/<repo-name>
     */
    MASTER_REPO_NAME: t.string,
    /**
     * The repository git host
     * @default 'github.com'
     */
    PROJECT_GIT_HOST: t.string,
    /**
     * The repository's organization
     * @example '@newrade'
     */
    PROJECT_REPO_ORG: t.string,
    /**
     * The repository name
     * @example 'repo-name' in @<org>/<repo-name>
     */
    PROJECT_REPO_NAME: t.string,
  }),
]);

// scriptLog(`forking master repo...`);

// const clone = spawn(
//   `git clone --bare git@${dotEnvProcess.MASTER_GIT_HOST}:${dotEnvProcess.MASTER_REPO_ORG}/${dotEnvProcess.MASTER_REPO_NAME}.git \
//   cd ${dotEnvProcess.MASTER_REPO_NAME}`,
//   {
//     cwd: '..',
//     shell: true,
//     stdio: 'inherit',
//     env: process.env,
//   }
// );

// const cd = spawn(
//   `git clone --bare git@${dotEnvProcess.MASTER_GIT_HOST}:${dotEnvProcess.MASTER_REPO_ORG}/${dotEnvProcess.MASTER_REPO_NAME}.git`,
//   {
//     cwd: '..',
//     shell: true,
//     stdio: 'inherit',
//     env: process.env,
//   }
// );
