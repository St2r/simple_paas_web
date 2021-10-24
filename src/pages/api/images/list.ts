import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { ImageInfo } from 'dockerode';
import { withMiddlewares } from '@server/middlewares';
import AuthMiddleware from '@server/middlewares/auth';

type Data = {
  images: ImageInfo[]
}

const imageListHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {


  res.status(200).json({images: []});
}

export default withMiddlewares(AuthMiddleware, imageListHandler)
