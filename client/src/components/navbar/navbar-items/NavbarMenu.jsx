import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Paths } from '../../../utils/Paths'
import AuthContext from '../../../contexts/authContext';

function NavbarMenu() {
    const {
        isAuthenticated,
        isAdmin,
    } = useContext(AuthContext);

    return (
        <div className="navbar-nav ms-auto py-0">
            <Link to={Paths.home} className="nav-item nav-link active">Home</Link>
            <Link to={Paths.about} className="nav-item nav-link">About</Link>
            <Link to={Paths.services} className="nav-item nav-link">Services</Link>
            <Link to={Paths.packages} className="nav-item nav-link">Packages</Link>
            {(isAuthenticated && isAdmin) && (
                <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nomenclatures</Link>
                <div className="dropdown-menu m-0">
                    <Link to={Paths.destinations} className="dropdown-item">Destination</Link>
                    <Link to={Paths.booking} className="dropdown-item">Booking</Link>
                    <Link to={Paths.team} className="dropdown-item">Travel Guides</Link>
                    <Link to={Paths.all} className="dropdown-item">404 Page</Link>
                    <Link to={Paths.packageCreate} className="dropdown-item">Create package</Link>
                </div>
            </div>
            )}
            
            <Link to={Paths.contact} className="nav-item nav-link">Contact</Link>
        </div>
    )
}

export default NavbarMenu