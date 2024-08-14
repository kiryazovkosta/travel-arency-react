import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

import * as userService from '../services/userService'
import { Paths } from '../utils/Paths'
import useLocalStorage from '../hooks/useLocalStorage'
import { validateRegistrationForm, validateLoginForm } from '../utils/Validators';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [error, setError] = useState(null);

    const loginSubmitHandler = async (values) => {
        const validationError = validateLoginForm(values);
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const result = await userService.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            setError(null);
            navigate(Paths.home);
        } catch (error) {
            setError('Failed to login. Try again!');
        }
    };

    const registerSubmitHandler = async (values) => {
        const validationError = validateRegistrationForm(values);
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const result = await userService.register(values.email, values.password, values.username, values.avatar);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            setError(null);
            navigate(Paths.home);
        } catch (error) {
            setError('Failed to register. Try again!');
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Paths.home);
    };

    const clearError = () => {
        setError(null);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        clearError,
        error,
        userId: auth._id,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
        isAdmin: auth.isAdmin,
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext