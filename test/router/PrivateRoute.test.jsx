import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Testing in <PublicRoute />', () => {
  
  test('should show -children- if it is authenticated.', () => {
    const value = { 
      logged: true,
      user: {
        name: 'Juan',
        id: 1
    }}

    render(
      <AuthContext.Provider value={ value }>
        <MemoryRouter initialEntries={['/*']}>
          <Routes>
            
            <Route path="/*" element={
              <PrivateRoute>
                <span>Test marvel page</span>
              </PrivateRoute>
            } />

            <Route path="/login" element={<h1>Login page</h1>} />
            
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Test marvel page') ).toBeTruthy();
  });

  test('should show -/login- if it is not authenticated.', () => {
    const value = { logged: false }

    render(
      <AuthContext.Provider value={ value }>
        <MemoryRouter initialEntries={['/*']}>
          <Routes>
            <Route path="/*" element={
              <PrivateRoute>
                <span>Test marvel page</span>
              </PrivateRoute>
            } />
            <Route path="/login" element={<h1>Login page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Login page') ).toBeTruthy();
  });

});