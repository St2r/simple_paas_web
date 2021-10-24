import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import Cookie from 'cookies';
import jwt from 'jsonwebtoken';


const loginHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const username = req.body['username'];
    const password = req.body['password'];

    // check auth

    const token = jwt.sign(JSON.stringify({username}), process.env.JWT_SECRET_KEY, {});
    const cookie = new Cookie(req, res);
    cookie.set('x-auth', token, {httpOnly: true});

    res.status(200).json({msg: 'login success'})
  } catch (e) {
    res.status(500).json({error: e});
  }
}

export default loginHandler;
