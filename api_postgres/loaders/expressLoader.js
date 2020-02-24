import api from '../api';

export default app => {
  app.get('/', (req, res) => {
    res.send('healt');
  });

  app.use('/api', api());

  app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
  });
};
