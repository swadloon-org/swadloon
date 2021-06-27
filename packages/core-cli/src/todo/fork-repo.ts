// #!/usr/bin/env ts-node-script

// import { spawn } from 'child_process';
// import { scriptLog } from '@newrade/core-utils';
// import { dotEnvProcess, loadDotEnv } from '../utilities/utils';

// loadDotEnv();

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
