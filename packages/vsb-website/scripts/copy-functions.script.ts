import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./api`, './public/api', {
    recursive: true,
    overwrite: true,
  });
};

copyFile();
