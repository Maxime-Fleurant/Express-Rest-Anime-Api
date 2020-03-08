import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';

import { userService } from '../../services';

export default api => {
  const route = Router();

  api.use('/users', route);

  route.post(
    '/signup',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .max(25)
          .required()
      })
    }),
    asyncHandler(async (req, res) => {
      const token = await userService.createUser(req.body);

      return res.json(token);
    })
  );

  route.post(
    '/signin',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .max(25)
          .required()
      })
    }),
    asyncHandler(async (req, res) => {
      const token = await userService.loginUser(req.body);

      return res.cookie('token', token).send(token);
    })
  );
};
