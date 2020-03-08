import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

export default asyncHandler(async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    token = req.headers.authorization;
  }

  const verifJwt = await jwt.verify(token, process.env.JWT_SECRET);

  req.userId = verifJwt.id;

  next();
});
