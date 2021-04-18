import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./dist/src/server.js`, '../vsb-website/api/server.js', {
    recursive: true,
    overwrite: true,
  });
};

copyFile();
