import { createContext } from "react"
import { useNavigate } from 'react-router-dom'

import * as userService from '../services/userService'
import { Paths } from '../utils/Paths'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await userService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Paths.home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await userService.register(values.email, values.password, values.username, values.avatar);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Paths.home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Paths.home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
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