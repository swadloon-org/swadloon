import { APIController, ApiHandler, ApiRequest, ApiResponse, API_HTTP_METHOD } from '@/types/api';
import { errorMiddleware } from './error.middleware';
import { loggerMiddleware } from './logging.middleware';

/**
 * Middleware for API controllers that applies global middleware, execute controller's method and handle _unhandled_ errors
 *
 * @see https://github.com/vercel/next.js/discussions/17832
 * @see https://nextjs.org/docs/api-routes/api-middlewares
 */
export function apiMiddleware<ReqPayload, ResPayload>(controller: APIController) {
  return async (req: ApiRequest<ReqPayload>, res: ApiResponse<ResPayload>) => {
    try {
      /**
       * Apply global middlewares
       */

      loggerMiddleware(req, res);

      /**
       * Execute controller for method
       */

      const method = req.method?.toUpperCase() as API_HTTP_METHOD;

      if (!method) {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }

      if (!controller[method]) {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }

      const handler = controller[method] as ApiHandler<ResPayload>;

      await handler(req, res);
    } catch (error: any) {
      /**
       * Error handling
       */
      errorMiddleware(req, res, error);
    }
  };
}
