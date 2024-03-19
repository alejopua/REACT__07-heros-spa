import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { SearchPages } from "../../../src/heroes/pages/SearchPages";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Name of the group', () => {

  beforeEach( () => jest.clearAllMocks() )
  
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

  test('should show an error if the hero is not found.', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPages />
      </MemoryRouter>
    )

    const alertElement = screen.getByLabelText('alertDanger');

    expect(alertElement).toBeTruthy();
    expect(alertElement.textContent).toEqual('Hero batman123 not encountered');
});

  test('should call the -navigate- to the new screen.', () => {

    const inputValue = 'batman';
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPages />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change( input, { target: { name: 'searchText', value: inputValue }})

    const form = screen.getByRole('form')
    fireEvent.submit( form )

    console.log( mockedUseNavigate.mock.calls );
    expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`);

  });

});