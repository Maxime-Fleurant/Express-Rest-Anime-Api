import { Router } from 'express';
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
};
