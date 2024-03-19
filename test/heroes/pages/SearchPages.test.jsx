import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import { SearchPages } from "../../../src/heroes/pages/SearchPages";

describe('Name of the group', () => {
  
  test('Should show Batman and the input with the querystring value.', () => {
    
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPages />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect( input.value ).toBe('batman')

    const imgHero = screen.getByRole('img')
    expect( imgHero.src ).toContain('/heroes/dc-batman.jpg')
  });

});