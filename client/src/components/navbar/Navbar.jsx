import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Paths } from '../../utils/Paths';
import AuthContext from '../../contexts/authContext';

import NavbarUser from './navbar-items/NavbarUser';
import NavbarLogo from './navbar-items/NavbarLogo';
import NavbarSearch from './navbar-items/NavbarSearch';
import NavbarMenu from './navbar-items/NavbarMenu';

function Navbar() {
    const { 
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NavbarLogo />
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <NavbarMenu />
                    <NavbarUser />
                </div>
            </nav>
            <NavbarSearch />
        </div>
    )
}

export default Navbar;