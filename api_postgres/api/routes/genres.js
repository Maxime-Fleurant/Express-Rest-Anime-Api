import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { genreService } from '../../services';

export default api => {
  const route = Router();

  api.use('/genres', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const genres = await genreService.getGenres();

      return res.json(genres);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const genre = await genreService.getGenreById(id);

      return res.json(genre);
    })
  );

  route.get(
    '/:id/animes',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const animes = await genreService.getGenreAnimes(id);

      return res.json(animes);
    })
  );
};
