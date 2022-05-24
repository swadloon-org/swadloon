import { APIResponseBody, API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import type { NextApiHandler, PageConfig } from 'next';
import { apiMiddleware } from '@/middlewares/api.middleware';
import { API_HTTP_METHOD } from '@/types/api';

export type GetRevalidatePayload = APIResponseBody<{
  message: string;
}>;

export const getRevalidate: NextApiHandler<GetRevalidatePayload> = async function getRevalidate(
  req,
  res
) {
  const { urlPath } = req.body;

  try {
    await res.unstable_revalidate(urlPath);

    res.status(200).json({
      api: getRevalidate.name,
      status: API_RESPONSE_STATUS.SUCCESS,
      message: '',
      errors: [],
      payload: {
        message: `Revalidated "${urlPath}"`,
      },
    });
  } catch (error) {
    res.status(500).json({
      api: getRevalidate.name,
      status: API_RESPONSE_STATUS.ERROR,
      message: 'Could not revalidate',
      errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: '' }],
      payload: {
        message: `Failed to revalidate "${urlPath}"`,
      },
    });
  }
};

export const revalidateController = apiMiddleware({
  [API_HTTP_METHOD.GET]: getRevalidate,
});

export default revalidateController;

export const config: PageConfig = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
