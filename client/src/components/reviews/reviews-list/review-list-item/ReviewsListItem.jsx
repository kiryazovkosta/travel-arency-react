import { useContext } from "react";
import { Link, } from "react-router-dom";

import AuthContext from "../../../../contexts/authContext";

import { formatDate } from "../../../../utils/DateTimeUtils";

function ReviewsListItem({
    _id,
    owner,
    review,
    stars,
    _ownerId,
    _createdOn,
    _updatedOn
}) {
    const {
        userId,
    } = useContext(AuthContext);

    const printStars = (stars) => {
        let starsArray = [];
        for (let index = 0; index < stars; index++) {
            starsArray.push(<small key={index} className="fa fa-star text-primary"></small>);
        }
        return starsArray;
    };

    const isOwner = _ownerId === userId;

    const isUpdated = _updatedOn !== undefined && _updatedOn !== null;

    const fotmatedCreatedDate = formatDate(_createdOn);

    const fotmatedUpdatedDate = isUpdated && formatDate(_updatedOn);

    return (
        <div className="review row g-3">
            <div className="col-md-12">
                <div className="form-floating">
                    <p>This review is made by <strong>{owner.username}</strong> on <time className="created-on-time">{fotmatedCreatedDate}</time>{isUpdated && (<>Updated on <time className="created-on-time">{fotmatedUpdatedDate}</time></>)}</p>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                    <p>{review}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    {printStars(stars)}
                </div>
            </div>
            <div className="col-6">
                {isOwner && (
                    <div className="d-flex right-buttons mb-2">
                        <Link to={`/reviews/edit/${_id}`} className="btn btn-primary rounded-left" >Edit</Link>
                        <Link to={`/reviews/delete/${_id}`} className="btn btn-secondary rounded-right" >Delete</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReviewsListItem;