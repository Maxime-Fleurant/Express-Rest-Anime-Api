import expressLoader from './expressLoader';
import postgresLoader from './postgresLoader';

export default async app => {
  await postgresLoader();
  await expressLoader(app);
};
