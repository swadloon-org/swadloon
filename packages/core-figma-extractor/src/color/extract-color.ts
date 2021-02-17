import { FileResponse } from 'figma-js';
import fetch from 'node-fetch';

export function parseFigmaColors(data: FileResponse['styles']) {
  return Object.keys(data).map((key: keyof FileResponse['styles'], item: any) => {
    if (data[key].styleType == 'FILL') {
      fetchColor(key);
      return console.log(JSON.stringify(data[key], null, 2));
    }
  });
}
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
  console.log(await request.json());
}
