const csvtojson = require('csvtojson');

const start = async () => {
  const jsonObjs = await csvtojson().fromFile('./anime.csv');
  console.log(jsonObjs);
};

start();
