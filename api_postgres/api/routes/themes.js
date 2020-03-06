import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { themeService } from '../../services';

export default api => {
  const route = Router();

  api.use('/themes', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const themes = await themeService.getThemes();

      return res.json(themes);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const theme = await themeService.getThemeById(id);

      return res.json(theme);
    })
  );

  route.get(
    '/:id/tags',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const tags = await themeService.getThemeTags(id);

      res.json(tags);
    })
  );

  route.get(
    '/:id/animes',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const animes = await themeService.getThemeAnimes(id);

      res.json(animes);
    })
  );
};
