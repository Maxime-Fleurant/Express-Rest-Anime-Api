import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import api from '../api';

export default app => {
  app.get('/', (req, res) => {
    res.send('healt');
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use('/api', api());

  app.use((req, res, next) => {
    res.send('404');
  });

  app.use((err, req, res, next) => {
    console.log(err, 'error trigger');
    res.send(err);
  });
};
