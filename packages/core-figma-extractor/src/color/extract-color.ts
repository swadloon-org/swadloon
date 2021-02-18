import { constant } from 'case';
import { FileResponse } from 'figma-js';
import * as fs from 'fs';
import fetch from 'node-fetch';
import * as path from 'path';

export function parseFigmaColors(data: FileResponse['styles']) {
  fs.writeFile(
    path.join(__dirname, '../../lib/src/color-render/design-system-color.ts'),
    '/** FIGMA COLOR ALPHA 1.0.0 **/',
    function (err) {
      if (err) {
        return console.error(err);
      }
      console.log('File created!');
    }
  );

  const allColors: any = Object.keys(data).map((key: keyof FileResponse['styles']) => {
    if (data[key].styleType === 'FILL' && !data[key].name.includes('Image')) {
      return fetchColor(key);
    }

    return allColors;
  });
}
const createColorPalette = (colorObject: any, id: string | number) => {
  let name = constant(colorObject.nodes[id].document.name);

  let newColor = `export const ${name} = ${JSON.stringify(colorObject.nodes[id].document.fills[0])};`;

  fs.appendFile(path.join(__dirname, '../../lib/src/color-render/design-system-color.ts'), newColor, (err) => {
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
