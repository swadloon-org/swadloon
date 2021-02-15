import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./functions`, './public/functions', {
    recursive: true,
    overwrite: true,
  });
};

copyFile();
