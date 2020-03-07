import bodyParser from 'body-parser';

import api from '../api';

export default app => {
  app.get('/', (req, res) => {
    res.send('healt');
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api', api());

  app.use((req, res, next) => {
    res.send('404');
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
  });
};
