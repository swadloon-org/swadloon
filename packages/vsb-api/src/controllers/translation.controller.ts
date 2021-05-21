import { RequestHandler } from 'express';

export const getTranslation: RequestHandler<{ key: string }, any, any> = async (req, res) => {
  try {
    const key = req.query['key'];

    if (!(key && typeof key === 'string')) {
      return res.status(400).send('please provide a key query param');
    }

    if (!req.i18n.exists(key)) {
      return res.status(400).send('invalid key');
    }

    res.status(200).send(req.i18n.t(key));
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
