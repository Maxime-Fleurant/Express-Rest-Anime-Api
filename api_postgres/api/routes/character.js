import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';

import { characterService } from '../../services';

export default api => {
  const route = Router();

  api.use('/characters', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const characters = await characterService.getCharacters();

      return res.json(characters);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const character = await characterService.getCharacterById(id);

      return res.json(character);
    })
  );

  route.post(
    '/',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        nativeName: Joi.string(),
        largeImage: Joi.string(),
        mediumImage: Joi.string(),
        description: Joi.string(),
        animeId: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const character = await characterService.createCharacter(req.body);

      return res.json(character);
    })
  );

  route.put(
    '/:id',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        nativeName: Joi.string(),
        largeImage: Joi.string(),
        mediumImage: Joi.string(),
        description: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const character = await characterService.updateCharacter(id, req.body);

      return res.json(character);
    })
  );

  route.delete(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const character = await characterService.removeCharacter(id);

      return res.json(character);
    })
  );
};
