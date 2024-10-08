import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from '../../hooks/useForm';

import * as packageService from '../../services/packageService';
import * as destinationService from '../../services/destinationService';
import { Paths } from '../../utils/Paths';
import Spiner from "../../components/spinner/Spiner";
import { validateCreatePackageForm } from '../../utils/Validators';

const PackageCreateFormKeys = {
    Title: 'title',
    Duration: 'duration',
    Persons: 'persons',
    Price: 'price',
    DestinationId: 'destinationId',
    ImageUrl: 'imageUrl',
    DataWowDelay: 'dataWowDelay',
    Stars: 'stars',
    Summary: 'summary'
}

function PackageCreate() {
    const [destinations, setSestinations] = useState([]);
    const [displaySpinner, setDisplaySpiner] = useState(false);

    useEffect(() => {
        try {
            destinationService.getAll()
                .then(setSestinations);
        } catch (error) {
            toast.error('The is an error with fetching destinations!');
        }

    }, []);

    const navigate = useNavigate();

    const addPackageHandler = async () => {
        setDisplaySpiner(true);

        const errors = validateCreatePackageForm(values);
        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
        } else {
            try {
                await packageService.create(values);
                navigate(Paths.packages);
    
            } catch (err) {
                console.log(err);
                toast.error('The is an error with creation of package!')
            }
        }

        setDisplaySpiner(false);
    };



    const { values, onChange, onSubmit } = useForm(addPackageHandler, {
        [PackageCreateFormKeys.Title]: '',
        [PackageCreateFormKeys.Duration]: '',
        [PackageCreateFormKeys.Persons]: '',
        [PackageCreateFormKeys.Price]: '',
        [PackageCreateFormKeys.DestinationId]: '',
        [PackageCreateFormKeys.ImageUrl]: '',
        [PackageCreateFormKeys.DataWowDelay]: '',
        [PackageCreateFormKeys.Stars]: '3',
        [PackageCreateFormKeys.Summary]: ''
    });

    return (
        <div className="container-xxl py-5">
            <div className="container">
                {displaySpinner && (
                    <Spiner />
                )}

                <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Package</h6>
                    <h1 className="mb-5">Create new package</h1>
                </div>
                <div className="row gy-5 gx-4 justify-content-center">
                    <form onSubmit={onSubmit}>
                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="title" name="title" placeholder="Package title" onChange={onChange} value={values[PackageCreateFormKeys.Title]} />
                                    <label htmlFor="title">Package title</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="duration" name="duration" placeholder="Package duration"  onChange={onChange} value={values[PackageCreateFormKeys.Duration]} />
                                    <label htmlFor="duration">Package duration</label>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="persons" name="persons" placeholder="Package persons number"  onChange={onChange} value={values[PackageCreateFormKeys.Persons]} />
                                    <label htmlFor="persons">Package persons number</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="price" name="price" placeholder="Package price"  onChange={onChange} value={values[PackageCreateFormKeys.Price]} />
                                    <label htmlFor="price">Package price</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <select className="form-select" id="destinationId" name="destinationId"  onChange={onChange} value={values[PackageCreateFormKeys.DestinationId]} >
                                        <option value="">Select a destination</option>
                                        {destinations.map((destination) => (
                                            <option key={destination._id} value={destination._id}>
                                                {destination.title}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="destinationId">Destination</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Package image"  onChange={onChange} value={values[PackageCreateFormKeys.ImageUrl]} />
                                    <label htmlFor="imageUrl">Package image</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="dataWowDelay" name="dataWowDelay" placeholder="Package data-wow-delay in format 0.5s"  onChange={onChange} value={values[PackageCreateFormKeys.DataWowDelay]} />
                                    <label htmlFor="dataWowDelay">Package data-wow-delay in format 0.5s</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="stars" name="stars" onChange={onChange} value={values[PackageCreateFormKeys.Stars]}>
                                    <option value="1">Star 1</option>
                                    <option value="2">Star 2</option>
                                    <option value="3">Star 3</option>
                                    <option value="4">Star 4</option>
                                    <option value="5">Star 5</option>
                                </select>
                                <label htmlFor="stars">Stars for this package</label>
                            </div>
                        </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control height100" placeholder="Enter a summary" id="summary" name="summary"  onChange={onChange} value={values[PackageCreateFormKeys.Summary]}></textarea>
                                    <label htmlFor="summary">Summary</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Save package</button>
                            </div>

                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default PackageCreate;