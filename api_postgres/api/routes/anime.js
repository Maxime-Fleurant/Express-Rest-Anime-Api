import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
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
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        romajiTitle: Joi.string(),
        englishTitle: Joi.string(),
        nativeTitle: Joi.string(),
        description: Joi.string(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        nbEpisodes: Joi.number(),
        trailer: Joi.string(),
        xLargeCover: Joi.string(),
        largeCover: Joi.string(),
        mediumCover: Joi.string(),
        popularity: Joi.number(),
        avgScore: Joi.number(),
        studioId: Joi.string(),
        genres: Joi.array().items(Joi.string()),
        tags: Joi.array().items(Joi.string()),
        externalLinks: Joi.array().items(
          Joi.object().keys({
            site: Joi.string(),
            url: Joi.string()
          })
        ),
        characters: Joi.array().items(
          Joi.object().keys({
            firstName: Joi.string(),
            lastName: Joi.string(),
            nativeName: Joi.string(),
            largeImage: Joi.string(),
            mediumImage: Joi.string(),
            description: Joi.string()
          })
        )
      })
    }),
    asyncHandler(async (req, res) => {
      const anime = await animesService.postAnime(req.body);

      return res.json(anime);
    })
  );

  route.put(
    '/:id',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        romajiTitle: Joi.string(),
        englishTitle: Joi.string(),
        nativeTitle: Joi.string(),
        description: Joi.string(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        nbEpisodes: Joi.number(),
        trailer: Joi.string(),
        xLargeCover: Joi.string(),
        largeCover: Joi.string(),
        mediumCover: Joi.string(),
        popularity: Joi.number(),
        avgScore: Joi.number(),
        studioId: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const anime = await animesService.updateAnime(id, req.body);

      return res.json(anime);
    })
  );

  route.put(
    '/:animeId/add-genre/:genreId',
    asyncHandler(async (req, res) => {
      const { animeId, genreId } = req.params;

      const animeGenres = await animesService.addGenreToAnime(animeId, genreId);

      return res.json(animeGenres);
    })
  );

  route.put(
    '/:animeId/add-tag/:tagId',
    asyncHandler(async (req, res) => {
      const { animeId, tagId } = req.params;

      const animeTags = await animesService.addTagToAnime(animeId, tagId);

      return res.json(animeTags);
    })
  );

  route.put(
    '/:animeId/remove-genre/:genreId',
    asyncHandler(async (req, res) => {
      const { animeId, genreId } = req.params;

      const animeGenres = await animesService.removeGenreToAnime(animeId, genreId);

      return res.json(animeGenres);
    })
  );

  route.put(
    '/:animeId/remove-tag/:tagId',
    asyncHandler(async (req, res) => {
      const { animeId, tagId } = req.params;

      const animeTags = await animesService.removeTagToAnime(animeId, tagId);

      return res.json(animeTags);
    })
  );
};
