import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Name of the group', () => {
  const contextValue = { 
    logged: true,
    user: { name: 'Juan'},
    logout: jest.fn()
  }

  beforeEach( () => jest.clearAllMocks() );
  
  test('should show user name', () => {
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Juan')).toBeTruthy();
  });

  test('should call the -logout- and -navigate- when the button is clicked.', () => {
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn = screen.getByRole('button');
    fireEvent.click( logoutBtn );

    expect( contextValue.logout).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { replace: true });
  });

});