import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./src/plugins`, './dist/plugins', { recursive: true, overwrite: true });
};

copyFile();
