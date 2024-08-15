import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from '../../hooks/useForm';
import Spiner from "../../components/spinner/Spiner";
import * as destinationService from '../../services/destinationService';
import { validateCreateDestinationForm } from '../../utils/Validators';


const DestinationCreateFormKeys = {
    Title: 'title',
    Discount: 'discount',
    ImageUrl: 'imageUrl',
    DataWowDelay: 'dataWowDelay',
    Summary: 'summary'
}

function DestinationCreate() {
    const [displaySpinner, setDisplaySpinner] = useState(false);

    const addDestinationHandler = async () => {
        setDisplaySpinner(true);

        const errors = validateCreateDestinationForm(values);
        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
        } else {
            try {
                await destinationService.create(values);
                clear(values);
                toast.success('Destination is created successfully!')

            } catch (err) {
                console.log(err);
                toast.error('The is an error with creation of destination!')
            }
        }

        setDisplaySpinner(false);
    }

    const clear = (values) => {
        values.title = '';
        values.discount = '';
        values.imageUrl = '';
        values.summary = '';
    }

    const { values, onChange, onSubmit } = useForm(addDestinationHandler, {
        [DestinationCreateFormKeys.Title]: '',
        [DestinationCreateFormKeys.Discount]: '',
        [DestinationCreateFormKeys.ImageUrl]: '',
        [DestinationCreateFormKeys.DataWowDelay]: '',
        [DestinationCreateFormKeys.Summary]: '',
    })

    return (

        <div className="container-xxl py-5">
            <div className="container">
                {displaySpinner && (
                    <Spiner />
                )}

                <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Create new destination</h1>
                </div>
                <div className="row gy-5 gx-4 justify-content-center">
                    <form onSubmit={onSubmit}>
                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id={DestinationCreateFormKeys.Title} name={DestinationCreateFormKeys.Title} placeholder="Package title" onChange={onChange} value={values[DestinationCreateFormKeys.Title]} />
                                    <label htmlFor={DestinationCreateFormKeys.Title}>Package title</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id={DestinationCreateFormKeys.Discount} name={DestinationCreateFormKeys.Discount} placeholder="Destination discount" onChange={onChange} value={values[DestinationCreateFormKeys.Discount]} />
                                    <label htmlFor={DestinationCreateFormKeys.Discount}>Package price</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id={DestinationCreateFormKeys.ImageUrl} name={DestinationCreateFormKeys.ImageUrl} placeholder="Package image" onChange={onChange} value={values[DestinationCreateFormKeys.ImageUrl]} />
                                    <label htmlFor={DestinationCreateFormKeys.ImageUrl}>Package image</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control height100" placeholder="Enter a summary" id={DestinationCreateFormKeys.Summary} name={DestinationCreateFormKeys.Summary} onChange={onChange} value={values[DestinationCreateFormKeys.Summary]}></textarea>
                                    <label htmlFor={DestinationCreateFormKeys.Summary}>Summary</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Save destination</button>
                            </div>

                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default DestinationCreate;