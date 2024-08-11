import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../../contexts/authContext";

import { formatDate } from "../../../../utils/DateTimeUtils";

function ReviewsListItem({
    owner,
    review,
    stars,
    _ownerId,
    _createdOn
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
    
    const fotmatedDate = formatDate(_createdOn);

    const username = owner !== undefined ? owner.username : 'some_name';

    return (
        <div className="review row g-3">
            <div className="col-md-12">
                <div className="form-floating">
                    <p>This review is made by <strong>{username}</strong> on <time className="created-on-time">{fotmatedDate}</time></p>
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
                        <Link to="#" className="btn btn-primary rounded-left" >Edit</Link>
                        <Link to="#" className="btn btn-secondary rounded-right" >Delete</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReviewsListItem;