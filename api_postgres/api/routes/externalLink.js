import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { externalLink } from '../../services';

export default api => {
  const route = Router();

  api.use('/external-links', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const externalLinks = await externalLink.getAnimes();

      return res.json(externalLinks);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const externalLink = await externalLink.getAnimeById(id);

      return res.json(externalLink);
    })
  );
};
