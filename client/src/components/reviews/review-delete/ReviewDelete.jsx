import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as reviewService from "../../../services/reviewService";
import { Paths } from "../../../utils/Paths";
import AuthContext from "../../../contexts/authContext";
import { formatDate } from "../../../utils/DateTimeUtils";
import { useForm } from "../../../hooks/useForm";

function ReviewDelete() {
    const { reviewId } = useParams();
    const [ review, setReview] = useState({});
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        reviewService.getById(reviewId)
            .then(setReview);
    }, [reviewId])

    console.log(reviewId);

    const isOwner = review._ownerId == userId;

    const fotmatedDate = formatDate(review._createdOn);

    const deleteReviewHandler = async () => {
        console.log('clicked');
        
        try {
            await reviewService.remove(review._id);
            navigate(`${Paths.packages}/${review.packageId}`);
        } catch (error) {
            console.log(error);
            toast.error('There is a problem with deleting of the review!');
        }
    }

    const { onSubmit } = useForm(deleteReviewHandler, {});

    return (
        <div className="container-xxl py-5">
            <div className="container">

                <div className="row gy-5 gx-4 justify-content-center like-modal-window">
                    <div className="col-12">
                        <p>{`Are you sure that want to delete review ${review.review} with ${review.stars} stars from ${fotmatedDate} ?`}</p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex center-buttons mb-2">
                            {isOwner && (
                                <form onSubmit={onSubmit}>
                                    <button type="submit" title="submit-button" className="btn btn-primary rounded-left" >Delete</button>
                                </form>

                            )}
                            <Link to={`${Paths.packages}/${review.packageId}`} className="btn btn-secondary rounded-right">Cancel</Link>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default ReviewDelete;