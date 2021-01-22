import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./src/plugins`, './lib/plugins', { recursive: true, overwrite: true });
};

copyFile();
