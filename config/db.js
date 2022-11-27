const mongoose = require("mongoose");

const DBconnection = async () => {
  const conn = await mongoose
    .connect("mongodb://127.0.0.1/youtube-class", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(`For any resaons we couldn't connect to the DB`.red, err);
    });
  console.log(`MongoDB Connected: ${conn.connection.host}`.black.bgYellow);
};

module.exports = DBconnection;
