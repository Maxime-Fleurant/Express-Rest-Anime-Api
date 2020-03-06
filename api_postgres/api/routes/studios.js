import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { studioService } from '../../services';

export default api => {
  const route = Router();

  api.use('/studios', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const studios = await studioService.getStudios();

      return res.json(studios);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const studio = await studioService.getStudioById(id);

      return res.json(studio);
    })
  );

  route.get(
    '/:id/animes',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const animes = await studioService.getStudioAnimes(id);

      return res.json(animes);
    })
  );
};
