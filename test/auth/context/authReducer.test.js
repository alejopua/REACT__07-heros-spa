import { types } from "../../../src/auth";
import { authReducer } from "../../../src/auth/context/authReducer";

describe('Testing in authReducer.js', () => {

  test('should return the default state.', () => {
    const initialState = {
      logged: false,
    };

    const newState = authReducer( initialState, {} );
    expect( newState ).toBe( initialState );
  });
  
  
  test('should call login and authenticate the user.', () => {
    const initState = {
        logged: false  
    }

    const user = {
      name: 'Pechuga',
      id: '123',
    } 
    const action = { type: types.login, payload: user }

    const newState = authReducer( initState, action );
    expect( newState ).toEqual({
      logged: true,
      user: action.payload
    });
  });

  test('should remove the nameUser and logged in false.', () => {
    const state = {
        logged: true,
        user: {
          name: 'Pechuga',
          id: '123',
        }
    }

    const action = { type: types.logout }

    const newState = authReducer( state, action );
    expect( newState ).toEqual({
          logged: false
        });
  });

});