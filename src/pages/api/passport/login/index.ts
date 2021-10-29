import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import Cookie from 'cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';


const loginHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method?.toLowerCase() !== 'post') {
    res.status(403).json({});
  }
  try {
    const username = req.body['username'];
    const password = req.body['password'];

    const serverRes = await axios.post(`${process.env.SERVER_HOST_NAME}/user/login`);

    const token = jwt.sign(JSON.stringify({username, password}), process.env.JWT_SECRET_KEY, {});

    // 写 Cookie
    const cookie = new Cookie(req, res);
    cookie.set('x-auth', token, {httpOnly: true});

    res.status(200).json({msg: 'login success'})
  } catch (e) {
    res.status(500).json({error: e});
  }
}

export default loginHandler;
