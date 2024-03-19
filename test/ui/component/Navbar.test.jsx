import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe('Name of the group', () => {
  const contextValue = { 
    logged: true,
    user: {
      name: 'Juan'
    },
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

});