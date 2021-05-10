import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./src/assets`, './lib/assets', { recursive: true, overwrite: true });
};

copyFile();
