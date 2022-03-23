if (process.env.NODE_ENV !== "production") {
   require('dotenv').config();
}
const cors = require('cors');
const express = require('express');
const app = express();
const routers = require('./routes');

const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);

app.use(errorHandler);
module.exports = app;
