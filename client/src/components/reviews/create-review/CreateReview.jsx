import { useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as reviewService from '../../../services/reviewService';
import { useForm } from "../../../hooks/useForm";
import AuthContext from '../../../contexts/authContext';

const CreateReviewFormKeys = {
    Unused: 'unused',
    Stars: 'stars',
    Review: 'review'
}

function CreateReview({
    packageId,
    setReviews
}) {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    const addReviewHandler = async (values) => {
        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
        } else {
            try {
                const newReview = await reviewService.create(packageId, username, values.review, values.stars);
                setReviews(state => [newReview, ...state]);
                clear(values);
                toast.success('Review is successfully created!')
            } catch (error) {
                toast.error('There is an error with creation of review!')
            }
            
        }
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
        // if (!email) {
        //     errors.push("Email is required.");
        // } else if (!/\S+@\S+\.\S+/.test(email)) {
        //     errors.push("Email is invalid.");
        // }
        // if (!password) {
        //     errors.push("Password is required.");
        // } else if (password.length < 6) {
        //     errors.push("Password must be at least 6 characters long.");
        // }

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

export default CreateReview;