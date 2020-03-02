import { Router } from 'express';

import anime from './routes/anime';
import externalLink from './routes/externalLink';

export default () => {
  const api = Router();

  anime(api);
  externalLink(api);

  return api;
};
