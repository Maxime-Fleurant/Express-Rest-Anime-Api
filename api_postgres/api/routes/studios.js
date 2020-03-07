import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
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

  route.post(
    '/',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const studio = await studioService.createStudio(req.body);

      return res.send(studio);
    })
  );
};
