import type { RequestInfo, RequestInit } from 'node-fetch';

const _importDynamic = new Function('modulePath', 'return import(modulePath)');

async function fetch(url: RequestInfo, init?: RequestInit | undefined) {
  const { default: fetch } = await _importDynamic('node-fetch');
  return fetch(url, init);
}

/**
 * Retrieve nodes object from the API
 * @see https://www.figma.com/developers/api#get-file-nodes-endpoint
 */
export async function fetchObjectById(node_id: string | number | (string | number)[]) {
  let params: string = '';
  if (typeof node_id === 'string') {
    params = node_id;
  }

  if (typeof node_id === 'number') {
    params = node_id.toString();
  }

  if (typeof node_id === 'object' && node_id.length) {
    params = node_id.join(',');
  }

  if (!params) {
    throw new Error('api.figma.com/v1/files/.../nodes?ids= requires a list of node ids');
  }

  const request = await fetch(
    `https://api.figma.com/v1/files/` + `${process.env.FIGMA_FILE}/nodes?ids=` + `${params}`,
    {
      method: 'GET',
      headers: {
        'X-Figma-Token': `${process.env.FIGMA_TOKEN}`,
      },
    }
  );

  return request;
}
