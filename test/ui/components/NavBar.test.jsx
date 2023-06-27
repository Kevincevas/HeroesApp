import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/NavBar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import React from "react";

const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

describe('Pruebas en NavBar', () => {

    const contextValue = {
        logged:true,
        user:{
            id:'ABC',
            name:'Kevin',
        },
        logout: jest.fn()
    }

    //limpiando lso mocks
    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Kevin')).toBeTruthy();
      
    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton del logout', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );  
        
        //simulando el click a un boton
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUsedNavigate).toHaveBeenCalledWith("/login", {"replace": true});

    });
    
    
  
})
