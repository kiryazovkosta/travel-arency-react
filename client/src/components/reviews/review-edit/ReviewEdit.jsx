
import Spiner from "../../spinner/Spiner";
import AuthContext from "../../../contexts/authContext";

import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as reviewService from "../../../services/reviewService";
import { Paths } from "../../../utils/Paths";

function ReviewEdit() {
    const navigate = useNavigate();
    const { reviewId } = useParams();
    const [ displaySpinner, setDisplaySpinner ] = useState(false);
    const { userId } = useContext(AuthContext);
    const [ review, setReview ] = useState({
        unused: '',
        stars: '',
        review: ''
    });

    useEffect(() => {
        reviewService.getById(reviewId)
            .then(result => {
                setReview(result);
            });
    }, [reviewId]);

    console.log(review);
    
    const isOwner = review._ownerId === userId;

    const editReviewHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
        try {
            const reviewData = { ...values, packageId: review.packageId};
            await reviewService.edit(reviewId, reviewData);
            navigate(`${Paths.packages}/${review.packageId}`)
        } catch (error) {
            console.log(error);
            toast.error("The is an error with uodating of review!");
        }
    };

    const onChange = (ev) => {
        const { name, value, type, checked } = ev.target;

        setReview(state => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12">
                        {displaySpinner && (
                            <Spiner />
                        )}
                        <h1 className="text-white mb-4">Update a review</h1>
                        <form onSubmit={editReviewHandler}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="unused" name="unused" value={review.unused} onChange={onChange} placeholder="Unused field" />
                                        <label htmlFor="unused">Unused field</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="stars" name="stars" value={review.stars} onChange={onChange}>
                                            <option value="1">Star 1</option>
                                            <option value="2">Star 2</option>
                                            <option value="3">Star 3</option>
                                            <option value="4">Star 4</option>
                                            <option value="5">Star 5</option>
                                        </select>
                                        <label htmlFor="stars">Stars for this review</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control height100" placeholder="Enter your review" id="review" name="review" value={review.review} onChange={onChange}></textarea>
                                        <label htmlFor="review">Review text</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex center-buttons mb-2">
                                        {isOwner && (
                                            <button type="submit" title="submit-button" className="btn btn-primary rounded-left" >Update</button>

                                        )}
                                        <Link to={`${Paths.packages}/${review.packageId}`} className="btn btn-secondary rounded-right">Cancel</Link>
                                    </div>
                                </div>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewEdit;