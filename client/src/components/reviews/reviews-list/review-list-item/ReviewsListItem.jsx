import { Link } from "react-router-dom";

function ReviewsListItem({
    username,
    text,
    stars
}) {
    const printStars = (stars) => {
        let starsArray = [];
        for (let index = 0; index < stars; index++) {
            starsArray.push(<small key={index} className="fa fa-star text-primary"></small>);
        }
        return starsArray;
    };

    return (
        <div className="review row g-3">
            <div className="col-md-6">
                <div className="form-floating">
                    <p>2024-08-08 13:18:22</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <p>{username}</p>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                    <p>{text}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    {printStars(stars)}
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex center-buttons mb-2">
                    <Link to="#" className="btn btn-primary" >Edit</Link>
                    <Link to="#" className="btn btn-secondary" >Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default ReviewsListItem;