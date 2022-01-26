require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/index.js');
const PORT = process.env.PORT || 6000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started in ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
