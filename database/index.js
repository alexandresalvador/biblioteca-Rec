const mongoose = require("mongoose");
require("dotenv").config();
const DBCON = process.env.MONGODB;


mongoose
  .connect(DBCON,     {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

    console.log("MONGODB esta RODANDO!");
  })
  .catch((error) => {

    console.log(`MONGODB esta PARADO, PORQUE ${error}`);
  });

mongoose.Promise = global.Promise;
module.exports = mongoose;