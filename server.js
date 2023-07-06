require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const { PORT = 7777, MONGO_PROD, NODE_ENV, MONGO_DEV } = process.env;

async function main() {
  await mongoose.connect(NODE_ENV === 'prod' ? MONGO_PROD : MONGO_DEV,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
      console.log(`OH NO! MONGO CONNECTION ERROR!`);
      console.log(err);
  })
  app.listen(PORT);
  console.log(`app listen PORT ${PORT}`);
}

main();