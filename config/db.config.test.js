const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { dbConexion } = require('./db.config');

describe('Given dbConexion', () => {
  test('Then should exist DBname for dev enviroment', async () => {
    const connect = await dbConexion();
    // console.log(connect);
    expect(connect.connections[0].name).toBe(process.env.DB_NAME_TEST);
    mongoose.disconnect();
  });
});
