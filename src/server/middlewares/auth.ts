import { NextApiRequest, NextApiResponse } from 'next';
import Cookie from 'cookies';
import jwt, { JwtPayload } from 'jsonwebtoken';

async function AuthMiddleware(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cookie = new Cookie(req, res);
    const token = cookie.get('x-auth') ?? '';
    const value = jwt.verify(token, process.env.JWT_SECRET_KEY) as JwtPayload;

    // 将 token 中解析出来的各种信息放在 header 中
    req.headers['x-user'] = value.username;
  } catch (e) {
    console.log(e);
  }
}

export default AuthMiddleware;
