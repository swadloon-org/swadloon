import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./src/assets`, './lib/assets', { recursive: true, overwrite: true });
  fs.copySync(`./src/icon-kits/newrade-icons`, './lib/icon-kits/newrade-icons', {
    recursive: true,
    overwrite: true,
  });
};

copyFile();
