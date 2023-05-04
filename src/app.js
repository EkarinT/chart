require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const error = require('./middleware/error');
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(error);

const port = precess.env.PORT || 8000;
app.listen(port, console.log(`server running on port: ${port}`));
