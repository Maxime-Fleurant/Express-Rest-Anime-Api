import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { tagService } from '../../services';

export default api => {
  const route = Router();

  api.use('/tags', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const tags = await tagService.getTags();

      return res.json(tags);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const tag = await tagService.getTagById(id);

      return res.json(tag);
    })
  );

  route.get(
    '/:id/animes',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const animes = await tagService.getTagAnimes(id);

      return res.json(animes);
    })
  );
};
