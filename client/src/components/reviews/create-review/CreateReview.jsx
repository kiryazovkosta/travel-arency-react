import { useContext } from 'react';

import * as reviewService from '../../../services/reviewService';

import AuthContext from '../../../contexts/authContext';

function CreateReview({
    packageId, 
    setReviews
}) {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    const addReviewHandler = async (ev) => {
        ev.preventDefault();

        console.log('clicked');

        const formData = new FormData(ev.currentTarget);

        const newReview = await reviewService.create(
            packageId,
            username,
            formData.get('review'),
            formData.get('stars')
        );

        setReviews(state => [...state, newReview]);
    }

    return (
        <div className="row g-5 align-items-center">
            <div className="col-md-12">
                <h1 className="text-white mb-4">Create a review</h1>
                <form onSubmit={addReviewHandler}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select bg-transparent" id="stars" name="stars">
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
                                <textarea className="form-control bg-transparent" placeholder="Enter your review" id="review" name="review" style={{ height: "100px" }}></textarea>
                                <label htmlFor="review">Review text</label>
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