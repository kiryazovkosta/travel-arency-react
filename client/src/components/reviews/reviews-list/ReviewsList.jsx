import ReviewsListItem from "./review-list-item/ReviewsListItem";

function ReviewsList({
    reviews
}) {
    return (
        <div className="row g-5 align-items-center">
            <div className="col-md-12">
                <h1 className="text-white mb-4">Reviews for this package</h1>
                {reviews.map(review => <ReviewsListItem key={review._id} {...review} />)}
            </div>
        </div>
    )
}

export default ReviewsList;