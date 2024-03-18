import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom'
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

  test('should sail if it is authenticated.', () => {
    const value = { 
      logged: true,
      user: {
        name: 'Test',
        id: 1
    }}

    render(
      <AuthContext.Provider value={ value }>
        <MemoryRouter initialEntries={['/login']}>
          
          <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <span>Test</span>
              </PublicRoute>
            } />
            <Route path="/*" element={<h1>Marvel page</h1>} />
          </Routes>
          
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.queryByText('Marvel page') ).toBeTruthy();

  });

});