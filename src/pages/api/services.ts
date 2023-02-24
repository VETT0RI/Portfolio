import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../../data'

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services })
}
