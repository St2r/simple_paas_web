import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function withMiddlewares(
  ...middlewares: NextApiHandler[]) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    for (const middleware of middlewares) {
      await middleware(req, res);
    }
  }
}