import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { externalLinksService } from '../../services';

export default api => {
  const route = Router();

  api.use('/external-links', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const externalLinks = await externalLinksService.getExternalLinks();

      return res.json(externalLinks);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const externalLink = await externalLinksService.getExternalLinksById(id);

      return res.json(externalLink);
    })
  );

  route.post(
    '/',
    asyncHandler(async (req, res) => {
      const externalLink = await externalLinksService.createExternalLink(req.body);

      res.json(externalLink);
    })
  );
};
