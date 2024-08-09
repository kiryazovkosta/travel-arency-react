import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as packageService from '../../services/packageService';
import * as reviewService from '../../services/reviewService';
import CreateReview from '../reviews/create-review/CreateReview';
import ReviewsList from '../reviews/reviews-list/ReviewsList';
import AuthContext from '../../contexts/authContext';

function PackageDetails({
}) {
    const {
        isAuthenticated
    } = useContext(AuthContext);

    const [pck, setPck] = useState({});
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        packageService.getById(id)
            .then(setPck);

        reviewService.getAll(id)
            .then(setReviews);
    }, [id]);

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
                            <img src={pck.imageUrl} alt="" style={{ width: '100%', height: '300px' }} />
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
                            <div className="d-flex ustify-content-right mb-2">
                                {isAuthenticated && (
                                    <Link to="#" className="btn btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="reviews p-5">
                        {isAuthenticated && (
                            <CreateReview packageId={id} setReviews={setReviews} />
                        )}
                        
                        <ReviewsList reviews={reviews} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PackageDetails;