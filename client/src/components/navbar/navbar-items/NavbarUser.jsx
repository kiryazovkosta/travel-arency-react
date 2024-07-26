import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Paths } from '../../../utils/Paths'
import AuthContext from '../../../contexts/authContext';

function NavbarUser() {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <Link to={Paths.profile} className="rounded-pill py-2 px-4">{`Welcome ${username}`}</Link>
                    <Link to={Paths.logout} className="btn btn-secondary rounded-pill py-2 px-4">Logout</Link>
                </>
            ) : (
                <>
                    <Link to={Paths.register} className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
                    <Link to={Paths.login} className="btn btn-info rounded-pill py-2 px-4">Login</Link>
                </>
            )}
        </>
    )
}

export default NavbarUser