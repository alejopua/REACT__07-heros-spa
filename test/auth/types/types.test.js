import { types } from "../../../src/auth";

describe('Testing in types.js', () => {
    
  test('should return this types.', () => {

    expect(types).toEqual({
        login: expect.any(String),
        // or
        logout: '[auth] logout'
    })
  });

});