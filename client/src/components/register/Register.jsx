function Register() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                    <h1 className="mb-5">Our Services</h1>
                </div>
                <div className="row g-3">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                                    <label htmlFor="duration">Password</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />
                                    <label htmlFor="confirm-password">Confirm password</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Enter your full name" />
                                    <label htmlFor="fullname">Full name</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="avatar" name="avatar" placeholder="Enter your avatar" />
                                    <label htmlFor="avatar">Avatar</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <span>If you already have profile click <a href="/login">here</a></span>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register