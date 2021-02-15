import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./dist/src/server.js`, '../vsb-website/functions/server.js', {
    recursive: true,
    overwrite: true,
  });
};

copyFile();
