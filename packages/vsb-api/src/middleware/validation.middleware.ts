import { NextFunction, Request, Response } from 'express';

export const validationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
