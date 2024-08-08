import ReviewsListItem from "./review-list-item/ReviewsListItem";

function ReviewsList() {
    return (
        <div className="row g-5 align-items-center">
            <div className="col-md-12">
                <h1 className="text-white mb-4">Reviews for this package</h1>
                <ReviewsListItem />
                <ReviewsListItem />
                <ReviewsListItem />
            </div>
        </div>
    )
}

export default ReviewsList;