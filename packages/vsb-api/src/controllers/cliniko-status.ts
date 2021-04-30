import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { GetStatusAPIRequestBody, GetStatusAPIResponseBody } from '@newrade/vsb-common';
import { RequestHandler } from 'express';
import { fetchCliniko } from '../services/cliniko.service';
import { log, logError, handleUnhandledError } from './cliniko-post-patient.controller';

/**
 * Simple call to cliniko to make sure we can react their API.
 */
export const getClinikoStatus: RequestHandler<any, GetStatusAPIResponseBody, GetStatusAPIRequestBody> = async (
  req,
  res
) => {
  try {
    log(`request for service status`);
    const result = await fetchCliniko<any, any>({
      method: 'GET',
      route: 'services',
    });

    if (result.status === API_RESPONSE_STATUS.SUCCESS) {
      result.message = 'Système en ligne'; // override generic message
      result.payload = {}; // don't return cliniko payload
      return res.status(200).send(result);
    }
    logError(`request failed for service status`);

    return res.status(400).send(result);
  } catch (error) {
    handleUnhandledError(res, error);
  }
};
