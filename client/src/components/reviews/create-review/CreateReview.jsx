function CreateReview() {
    return (
        <div className="row g-5 align-items-center">
            <div className="col-md-12">
                <h1 className="text-white mb-4">Create a review</h1>
                <form>
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
                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                                <label htmlFor="message">Special Request</label>
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