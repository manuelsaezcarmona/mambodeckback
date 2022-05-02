const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { dbConexion, getDataBaseName } = require('./db.config');

describe('Given dbConexion', () => {
  let initialUser;
  beforeAll(() => {
    initialUser = process.env.DB_USER;
  });

  afterAll(() => {
    process.env.DB_USER = initialUser;
    mongoose.disconnect();
  });
  test('Then should exist DBname for dev enviroment', async () => {
    const connect = await dbConexion();
    // console.log(connect);
    expect(connect.connections[0].name).toBe(process.env.DB_NAME_TEST);
    mongoose.disconnect();
  });
  test('Then return error message if not establish a connection', async () => {
    process.env.DB_USER = 'badUser';
    const connect = await dbConexion();
    // console.log(connect);
    expect(connect).toBe('bad auth : Authentication failed.');
  });
});

describe('Given getDataBaseName function', () => {
  test('Then return database Name for differents enviroments', () => {
    const dbdevname = getDataBaseName('dev');
    const dbprodname = getDataBaseName('prod');
    const dbtestname = getDataBaseName('test');
    expect(dbdevname).toBe(process.env.DB_NAME_DEV);
    expect(dbprodname).toBe(process.env.DB_NAME_PROD);
    expect(dbtestname).toBe(process.env.DB_NAME_TEST);
    expect(getDataBaseName('loquesea')).toBe(process.env.DB_NAME_DEV);
  });
});
