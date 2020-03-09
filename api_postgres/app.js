import express from 'express';

import config from './config/config';
import loader from './loaders';

const startServer = async () => {
  const app = express();

  await loader(app);
  console.log('fdlk');
  app.listen(config.port);
};

startServer();
