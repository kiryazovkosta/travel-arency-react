import { useContext } from 'react';

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
        console.log('clicked');

        const newReview = await reviewService.create(packageId, username, values.review, values.stars);

        setReviews(state => [newReview, ...state]);

        values.unused = '';
        values.stars = '';
        values.review = '';
    }

    const { values, onChange, onSubmit } = useForm(addReviewHandler, {
        [CreateReviewFormKeys.Unused]: '',
        [CreateReviewFormKeys.Stars]: '',
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
            </div>
        </div>
    )
}

export default CreateReview;