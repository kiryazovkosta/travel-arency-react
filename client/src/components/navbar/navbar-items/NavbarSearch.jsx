import * as packageService from '../../../services/packageService';

function NavbarSearch() {

    const searchEventHandler = async (ev) => {
        ev.preventDefault();

        const packages = await packageService.search('Bulgaria');
        console.log(packages);
        
    }

    return (
        <div className="container-fluid bg-primary navbar-image mb-5 hero-header">
            <div className="container navbar-image">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                            <form onSubmit={searchEventHandler} >
                                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                                <button type="submit" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: "7px" }}>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarSearch