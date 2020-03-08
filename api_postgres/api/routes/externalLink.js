import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
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
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        site: Joi.string(),
        url: Joi.string(),
        animeId: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const externalLink = await externalLinksService.createExternalLink(req.body);

      res.json(externalLink);
    })
  );

  route.put(
    '/:id',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        site: Joi.string(),
        url: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const externalLink = await externalLinksService.updateExternalLink(id, req.body);

      return res.json(externalLink);
    })
  );

  route.delete(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const externalLink = await externalLinksService.removeExternalLink(id);

      return res.json(externalLink);
    })
  );
};
