function Login() {
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
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                                    <label htmlFor="duration">Password</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" value="" id="remember" name="remember" />
                                    <label class="form-check-label" htmlFor="remember">Remember me</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <span>If you don't have profile click <a href="/register">here</a></span>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;