import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import Cookie from 'cookies';
import axios from 'axios';

const registerHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const username = req.body['username'];
    const password = req.body['password'];

    const serverRes = await axios.post(`${process.env.SERVER_HOST_NAME}/user/register`);

    const token = jwt.sign(JSON.stringify({username, password}), process.env.JWT_SECRET_KEY, {});

    const cookie = new Cookie(req, res);
    cookie.set('x-auth', token, {httpOnly: true});

    res.status(200).json({msg: 'register success'})
  } catch (e) {
    res.status(500).json({error: e});
  }
}