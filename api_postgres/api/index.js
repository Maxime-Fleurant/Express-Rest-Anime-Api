import { Router } from 'express';

import animeRoutes from './routes/anime';
import externalLinkRoutes from './routes/externalLink';
import reviewRoutes from './routes/review';
import characterRoutes from './routes/character';
import studioRoutes from './routes/studios';
import genreRoutes from './routes/genres';
import tagRoute from './routes/tags';
import themeService from './routes/themes';

export default () => {
  const api = Router();

  animeRoutes(api);
  externalLinkRoutes(api);
  reviewRoutes(api);
  characterRoutes(api);
  studioRoutes(api);
  genreRoutes(api);
  tagRoute(api);
  themeService(api);

  return api;
};
