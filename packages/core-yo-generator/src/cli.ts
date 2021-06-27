#!/usr/bin/env node

import { spawn } from 'child_process';

spawn(
  'node_modules/.bin/yo',
  ['./packages/core-yo-generator/lib/src/', '--no-insight', '--no-update-notifier'],
  {
    cwd: '.',
    stdio: 'inherit',
    shell: true,
  }
);
