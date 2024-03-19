import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Testing in <AppRouter />', () => {

  test('should show login if it is not authenticator', () => {
    const contextValue = {
      logged: false,
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    
    expect( screen.getAllByText('Login')).toBeTruthy();
  });
  
  test('should show marvel component if it is authenticator', () => {
    const contextValue = {
      logged: true,
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    
    expect( screen.getAllByText('MarvelPages')).toBeTruthy();
  });
});