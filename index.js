const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const app = express();

/** MIDDLEWARES */
app.use(cors());
app.use(morgan('dev'));

/** ROUTES */

/** Server Up */

app.listen(process.env.port, () => {
  console.log(`Server up  in port: ${process.env.PORT}`);
});
