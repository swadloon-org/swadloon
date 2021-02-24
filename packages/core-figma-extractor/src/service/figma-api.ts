import fetch from 'node-fetch';

export async function fetchObjectById(node_id: string | number) {
  const request = await fetch(
    `https://api.figma.com/v1/files/` + `${process.env.FIGMA_FILE}/nodes?ids=` + `${node_id}`,
    {
      method: 'GET',
      headers: {
        'X-Figma-Token': `${process.env.FIGMA_TOKEN}`,
      },
    }
  );

  return request;
}
