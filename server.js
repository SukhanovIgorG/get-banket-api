require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const { PORT = 3000, MONGO_PROD, NODE_ENV } = process.env;

async function main() {
  await mongoose.connect(
    NODE_ENV === 'prod' ? MONGO_PROD : 'mongodb://localhost:27017/getbanketdb',
  );
  await app.listen(PORT);
  console.log(`app listen PORT ${PORT}`);
}

main();