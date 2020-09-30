import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { addFrame } from '../services/imageHandler';

// Init shared
const router = Router();

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/
router.get('/', async (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'awake',
  });
});

router.post('/', async (req: Request, res: Response) => {
  const { imageData } = req.body;
  if (!imageData) {
    return res.status(400).json({
      error: 'bad request',
    });
  }

  const framedImageData = await addFrame(imageData);

  return res.status(200).json({
    imageData: framedImageData,
  });
});

export default router;
