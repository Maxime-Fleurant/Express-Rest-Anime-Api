import { Router } from 'express';
import { promises as fs } from 'fs';
import asyncHandler from 'express-async-handler';
import Anime from '../../models/anime';

export default api => {
  const route = Router();

  api.use('/anime', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const animes = await Anime.query();
      console.log(animes);
      res.send(animes);
    })
  );
};
