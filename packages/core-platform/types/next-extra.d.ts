import 'next';

declare module 'next' {
  export declare type NextApiHandlerError<T = any> = (
    req: NextApiRequest,
    res: NextApiResponse<T>,
    error: any
  ) => void | Promise<void>;
  export declare type NextApiHandlerVoid<T = any> = (
    req: NextApiRequest,
    res: NextApiResponse<T>
  ) => void;
  export declare type NextApiHandlerPromise<T = any> = (
    req: NextApiRequest,
    res: NextApiResponse<T>
  ) => Promise<void>;
  export interface NextApiRequest<Payload = undefined> extends IncomingMessage {
    /**
     * Object of `query` values from url
     */
    query: {
      [key: string]: string | string[];
    };
    /**
     * Object of `cookies` from header
     */
    cookies: {
      [key: string]: string;
    };
    body: Payload;
    env: Env;
    preview?: boolean;
    /**
     * Preview data set on the request, if any
     * */
    previewData?: PreviewData;
  }
}
