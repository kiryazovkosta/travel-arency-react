import { Link } from 'react-router-dom';

import { Paths } from '../../../utils/Paths';

function NavbarLogo() {
    return (
        <>
            <Link to={Paths.home} className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>KK Tourist</h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" title="navbar-toggler">
                <span className="fa fa-bars"></span>
            </button>
        </>
    )
}

export default NavbarLogo