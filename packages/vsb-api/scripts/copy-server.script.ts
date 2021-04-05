import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./dist/src/server.js`, '../vsb-website/api/server.js', {
    recursive: true,
    overwrite: true,
  });
  fs.copySync(`./dist/src/health-check.js`, '../vsb-website/api/health-check.js', {
    recursive: true,
    overwrite: true,
  });
};

copyFile();
