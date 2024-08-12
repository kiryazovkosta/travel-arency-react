
import Spiner from "../../spinner/Spiner";
import AuthContext from "../../../contexts/authContext";

import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as reviewService from "../../../services/reviewService";
import { Paths } from "../../../utils/Paths";
import { useForm } from "../../../hooks/useForm";

const EditReviewFormKeys = {
    Unused: 'unused',
    Stars: 'stars',
    Review: 'review'
}

function ReviewEdit() {
    const { reviewId } = useParams();
    const [displaySpinner, setDisplaySpinner] = useState(false);
    const { userId } = useContext(AuthContext);
    const [review, setReview] = useState({
        [EditReviewFormKeys.Unused]: '',
        [EditReviewFormKeys.Stars]: '1',
        [EditReviewFormKeys.Review]: ''
    });

    useEffect(() => {
        reviewService.getById(reviewId)
            .then(setReview);
    }, [reviewId]);
    
    const isOwner = review._ownerId === userId;

    const editReviewHandler = () => {

    };

    const { values, onChange, onSubmit } = useForm(editReviewHandler, review); 
    

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12">
                        {displaySpinner && (
                            <Spiner />
                        )}
                        <h1 className="text-white mb-4">Create a review</h1>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id={EditReviewFormKeys.Unused} name={EditReviewFormKeys.Unused} onChange={onChange} value={values.unused} placeholder="Unused field" />
                                        <label htmlFor={EditReviewFormKeys.Unused}>Unused field</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select" id={EditReviewFormKeys.Stars} name={EditReviewFormKeys.Stars} onChange={onChange} value={values[EditReviewFormKeys.Stars]}>
                                            <option value="1">Star 1</option>
                                            <option value="2">Star 2</option>
                                            <option value="3">Star 3</option>
                                            <option value="4">Star 4</option>
                                            <option value="5">Star 5</option>
                                        </select>
                                        <label htmlFor={EditReviewFormKeys.Stars}>Stars for this review</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control height100" placeholder="Enter your review" id={EditReviewFormKeys.Rewiew} name={EditReviewFormKeys.Review} onChange={onChange} value={values[EditReviewFormKeys.Review]}></textarea>
                                        <label htmlFor={EditReviewFormKeys.Review}>Review text</label>
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