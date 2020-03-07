import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';

import { reviewService } from '../../services';

export default api => {
  const route = Router();

  api.use('/reviews', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const reviews = await reviewService.getReviews();

      return res.json(reviews);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const review = await reviewService.getReviewById(id);

      return res.json(review);
    })
  );

  route.post(
    '/',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        score: Joi.number(),
        body: Joi.string(),
        summary: Joi.string(),
        animeId: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const review = await reviewService.createReview(req.body);

      return res.json(review);
    })
  );

  route.put(
    '/:id',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        score: Joi.number(),
        body: Joi.string(),
        summary: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const review = await reviewService.updateReview(id, req.body);

      return res.json(review);
    })
  );
};
