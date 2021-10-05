import { spawnSync } from 'child_process';
import path from 'path';
import { getShellForPlatform } from '@newrade/core-utils';

describe('the run-migration command', () => {
  it('should run correctly', () => {
    const command = spawnSync(`DEBUG=nr* node -r ts-node/register src/run-migration.ts`, {
      cwd: path.resolve(__dirname, '..', '..'),
      shell: getShellForPlatform(),
      stdio: 'pipe',
      env: process.env,
    });

    expect(command.stdout.toString()).toMatch(/ok/);
    expect(command.stderr.toString()).toMatch(/ok/);
  });
});
