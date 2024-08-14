import { Link } from 'react-router-dom';

import { useContext } from 'react';
import AuthContext from '../../../contexts/authContext';
import { Paths } from '../../../utils/Paths';

function PackageListItem({
    title,
    duration,
    persons,
    price,
    imageUrl,
    summary,
    dataWowDelay,
    stars,
    _id
}) {
    const { 
        isAuthenticated
    } = useContext(AuthContext);

    const printStars = (stars) => {
        let starsArray = [];
        for (let index = 0; index < stars; index++) {
            starsArray.push(<small key={index} className="fa fa-star text-primary"></small>);
        }
        return starsArray;
    };

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={dataWowDelay}>
            <div className="package-item">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={imageUrl} alt="" />
                </div>
                <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>{title}</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{duration} days</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{persons} Person</small>
                </div>
                <div className="text-center p-4">
                    <h3 className="mb-0">${price}</h3>
                    <div className="mb-3">
                        {printStars(stars)}
                    </div>
                    <p>{summary}</p>
                    <div className="d-flex justify-content-center mb-2">
                        <Link to={`${Paths.packages}/${_id}`} className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</Link>
                        {isAuthenticated && (
                            <Link to={`/booking/${_id}`} className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</Link>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageListItem;