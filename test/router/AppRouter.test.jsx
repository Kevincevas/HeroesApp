import { render,screen } from "@testing-library/react"
import React from "react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en AppRouter', () => {


    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login').length).toBe(2);
    });


    test('debe de mostrar el componente de marvel si esta autenticado', () => {
        const contextValue = {
            logged:true,
            user:{
                id:'ABC',
                name:'Kevin',
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Thor')).toBeTruthy();
      
    })
    
    
  
})
