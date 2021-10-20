// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookie from 'cookies';

type Data = {
  name: string
}

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cookie = new Cookie(req, res);
  cookie.set('x-auth', 'test', {httpOnly: true});
  res.status(200).json({name: 'Test API'})
}
