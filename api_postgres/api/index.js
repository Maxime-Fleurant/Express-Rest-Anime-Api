import { Router } from 'express';
import anime from './routes/anime';

export default () => {
  const api = Router();

  anime(api);

  return api;
};
