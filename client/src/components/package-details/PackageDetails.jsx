import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as packageService from '../../services/packageService';

function PackageDetails({
}) {
    // const [packages, setPackages] = useState({});
    const [pck, setPck] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // packageService.getAll()
        //     .then(setPackages);

        packageService.getById(id)
            .then(setPck);
    }, [id]);

    console.log(pck);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Package</h6>
                    <h1 className="mb-5">Details of Package</h1>
                </div>

                <div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-delay={pck.dataWowDelay}>
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img src={pck.imageUrl} alt="" />
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>{pck.title}</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{pck.duration} days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{pck.persons} Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">${pck.price}</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>{pck.summary}</p>
                            <div className="d-flex justify-content-center mb-2">
                                {/* <Link to={`/packages/${_id}`} className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</Link>
                                <Link to="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageDetails;