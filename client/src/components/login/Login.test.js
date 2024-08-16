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
    const mockError = jest.fn();

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

    test('Should update form fields on user input', () => {
        renderLogin();

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
    });

    test('Should call loginSubmitHandler on form submission', async () => {
        renderLogin();

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(mockLoginSubmitHandler).toHaveBeenCalledWith({
                email: 'test@example.com',
                password: 'password123',
            });
        });
    });

    test('should display error toast if login fails', async () => {
        renderLogin(mockError);

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith(mockError);
            expect(mockClearError).toHaveBeenCalled();
        });
    });

    test('Should show toast on error via useEffect', async () => {
        renderLogin(mockError);

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith(mockError);
        });
    });
});



