import { useContext, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as reviewService from '../../../services/reviewService';
import { useForm } from "../../../hooks/useForm";
import AuthContext from '../../../contexts/authContext';

import Spiner from "../../spinner/Spiner";

const CreateReviewFormKeys = {
    Unused: 'unused',
    Stars: 'stars',
    Review: 'review'
}

function ReviewCreate({
    packageId,
    setReviews
}) {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    const [displaySpinner, setDisplaySpiner] = useState(false);

    const addReviewHandler = async (values) => {
        setDisplaySpiner(true);

        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
        } else {
            try {
                const reviewData = { packageId, ...values };
                const newReview = await reviewService.create(reviewData);
                newReview.owner = { username };
                setReviews(state => [newReview, ...state]);
                clear(values);
                toast.success('Review is successfully created!')
            } catch (error) {
                console.log(error);
                
                toast.error('There is an error with creation of review!')
            }
        }

        setDisplaySpiner(false);
    }

    const clear = (values) => {
        values.unused = '';
        values.stars = '1';
        values.review = '';
    }

    const validateForm = () => {
        const { unused, stars, review } = values;
        const errors = [];

        if (!unused) {
             errors.push("Unused is required.");
        }

        if (!review) {
            errors.push("Review is required.");
        }

        if (!stars) {
            errors.push("Stars is required.");
        } else if (stars < 1 || stars > 5) {
            errors.push("Stars is invalid.");
        }

        return errors;
    };

    const { values, onChange, onSubmit } = useForm(addReviewHandler, {
        [CreateReviewFormKeys.Unused]: '',
        [CreateReviewFormKeys.Stars]: '1',
        [CreateReviewFormKeys.Review]: ''
    });

    return (
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
                                <input type="text" className="form-control" id={CreateReviewFormKeys.Unused} name={CreateReviewFormKeys.Unused} onChange={onChange} value={values[CreateReviewFormKeys.Unused]} placeholder="Unused field" />
                                <label htmlFor={CreateReviewFormKeys.Unused}>Unused field</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id={CreateReviewFormKeys.Stars} name={CreateReviewFormKeys.Stars} onChange={onChange} value={values[CreateReviewFormKeys.Stars]}>
                                    <option value="1">Star 1</option>
                                    <option value="2">Star 2</option>
                                    <option value="3">Star 3</option>
                                    <option value="4">Star 4</option>
                                    <option value="5">Star 5</option>
                                </select>
                                <label htmlFor={CreateReviewFormKeys.Stars}>Stars for this review</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control height100" placeholder="Enter your review" id={CreateReviewFormKeys.Rewiew} name={CreateReviewFormKeys.Review} onChange={onChange} value={values[CreateReviewFormKeys.Review]}></textarea>
                                <label htmlFor={CreateReviewFormKeys.Review}>Review text</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-light w-100 py-3" type="submit">Review Now</button>
                        </div>
                    </div>
                </form>

                <ToastContainer />
            </div>
        </div>
    )
}

export default ReviewCreate;