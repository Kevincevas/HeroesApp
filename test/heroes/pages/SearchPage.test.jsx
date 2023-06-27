import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import React from "react";

const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

describe('Pruebas en SearchPage', () => {

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe de mostrarse correctamente con valores por defecto', () => {

        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        
        expect(container).toMatchSnapshot();
    });

    test('debe de a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/heroes/dc-batman.jpg');
    });

    test('debe de mostrar un error si no se encuentra el heroe (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        //expect(alert).toBe('String');


    });

    test('debe de llamar el navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        //evento para simular llenar un campo o input
        fireEvent.change(input, {target:{name:'searchText', value:'superman'}});
        
        const form = screen.getByRole('form');
        //evento para simular el submit de un formulario
        fireEvent.submit(form);
        
        expect(mockUsedNavigate).toHaveBeenCalledWith('?q=superman')
    })
    
  
})
