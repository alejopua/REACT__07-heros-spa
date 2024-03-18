import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Testing in <PublicRoute />', () => {
  
  test('should show -children- if it is not authenticated.', () => {
    const value = { logged: false }
    render(
      <AuthContext.Provider value={ value }>
        <PublicRoute>
          <span>Test</span>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Test') ).toBeTruthy();
  });

});