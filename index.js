const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const app = express();

/** DB connection */

/** MIDDLEWARES */
// Security
app.use(cors());
// Request information from server
app.use(morgan('dev'));
// read and Parse body request (from POST and PUT request)
app.use(express.json());
// public directory, page in server
app.use(express.static('public'));
/** ROUTES */

/** Server Up */

app.listen(process.env.port, () => {
  console.log(`Server up  in port: ${process.env.PORT}`);
});
