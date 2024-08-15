import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';

import * as packageService from '../../../services/packageService';
import { Paths } from '../../../utils/Paths';

function NavbarSearch() {

    const navigate = useNavigate();

    const [ packages, setPackages ] = useState([]);

    useEffect(() => {
        if (packages.length > 0) {
            console.log(packages);
        }
    }, [packages]);

    const searchEventHandler = async (values) => {
        setPackages([]);
        const filtered = await packageService.search(values.pattern);
        setPackages(filtered);
        navigate(Paths.searchResult, { state: { result: filtered, search: values.pattern } });
        values.pattern = '';
    }

    const { values, onChange, onSubmit  } = useForm(searchEventHandler, { 
        pattern: '' 
    })

    return (
        <div className="container-fluid bg-primary navbar-image mb-5 hero-header">
            <div className="container navbar-image">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                            <form onSubmit={onSubmit} >
                                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" id="pattern" name="pattern" onChange={onChange} value={values.pattern} placeholder="Eg: Thailand" />
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