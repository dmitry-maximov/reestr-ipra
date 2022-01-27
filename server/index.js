require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/index');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 6000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler); // !обязательно последний!

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
