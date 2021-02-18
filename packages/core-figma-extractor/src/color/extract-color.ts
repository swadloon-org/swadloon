import { camel } from 'case';
import { FileResponse } from 'figma-js';
import * as fs from 'fs';
import fetch from 'node-fetch';
import * as path from 'path';

export function parseFigmaColors(data: FileResponse['styles']) {
  return Object.keys(data).map((key: keyof FileResponse['styles']) => {
    if (data[key].styleType == 'FILL') {
      fetchColor(key);
      return console.log(JSON.stringify(data[key], null, 2));
    }
  });
}

const createColorPalette = (colorObject: any, id: string | number) => {
  let newColor = `export const ${camel(colorObject.nodes[id].document.name)} = ${JSON.stringify(
    colorObject.nodes[id].document.fills[0]
  )};`;

  fs.appendFile(path.join(__dirname, '../color-render/design-system-color.ts'), newColor, (err) => {
    if (err) throw err;
    console.log(`New color added ${colorObject.nodes[id].document.name}`);
  });
  // writeStream.write(value);

  // writeStream.on('finish', () => {
  //   console.log('wrote all data to file');
  // });

  // fs.writeFile(path.join(__dirname, '../../lib/color-render/design-system-color.ts'), value, function (err) {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   console.log('File created!');
  // });
};

async function fetchColor(node_id: string | number) {
  const request = await fetch(
    `https://api.figma.com/v1/files/` + `${process.env.FIGMA_FILE}/nodes?ids=` + `${node_id}`,
    {
      method: 'GET',
      headers: {
        'X-Figma-Token': `${process.env.FIGMA_TOKEN}`,
      },
    }
  );
  // console.log(await request.json());

  let colorObject = await request.json();
  createColorPalette(colorObject, node_id);
}
