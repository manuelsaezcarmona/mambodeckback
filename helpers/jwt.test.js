const { createJWT } = require('./jwt');

describe('Given the createJWT Function', () => {
  test('When pass uid & username params should return token', () => {
    const token = createJWT(1234, 'manolito');

    expect(token).toEqual(expect.any(String));
  });
});
