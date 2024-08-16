import React from 'react';
import Login from "./Login";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import AuthContext from '../../contexts/authContext';

jest.mock('react-toastify', () => ({
    toast: {
      error: jest.fn(),
    },
    ToastContainer: () => <div>Toast Container</div>,
  }));

describe('Login Component', () => {
    const mockLoginSubmitHandler = jest.fn();
    const mockClearError = jest.fn();

    const renderLogin = (error = null) => {
        render(
            <AuthContext.Provider value={{
                loginSubmitHandler: mockLoginSubmitHandler,
                error,
                clearError: mockClearError,
            }}>
                <Login />
            </AuthContext.Provider>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should heading component must have "Login in system"', () => {
        renderLogin();
    
        expect(screen.getByText("Login in system")).toBeInTheDocument();
        expect(screen.getByRole('button', { name: "Login" })).toBeInTheDocument();
        expect(screen.getByLabelText("Email address")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByText(/If you don't have profile click/i)).toBeInTheDocument();
    })
});



