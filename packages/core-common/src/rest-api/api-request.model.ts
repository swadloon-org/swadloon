import { AppError } from '../errors/error.model';

export type APIRequestBody<Payload> = {
  /**
   * Name of the API
   * @example 'website admin api'
   */
  api: string;
  /**
   * The request payload
   */
  payload: Payload;
};

export type APIResponseBody<Payload> = {
  /**
   * Name of the API
   * @example 'website admin api'
   */
  api: string;
  /**
   * The response errors
   */
  errors: AppError[];
  /**
   * The response payload
   */
  payload: Payload;
};
