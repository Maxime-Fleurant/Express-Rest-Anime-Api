import { Router } from 'express';
import { promises as fs } from 'fs';
import asyncHandler from 'express-async-handler';

export default api => {
  const route = Router();

  api.use('/anime', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      await fs.readFile('fdlk');
      res.send('anime health');
    })
  );
};
