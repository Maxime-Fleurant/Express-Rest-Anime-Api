import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { animesService } from '../../services';

export default api => {
  const route = Router();

  api.use('/animes', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const animesList = await animesService.getAnimes();

      return res.json(animesList);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const anime = await animesService.getAnimeById(id);

      return res.json(anime);
    })
  );

  route.post(
    '/',
    asyncHandler(async (req, res) => {
      const anime = await animesService.postAnime(req.body);

      return res.json(anime);
    })
  );
};
