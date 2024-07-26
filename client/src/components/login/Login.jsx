import { useForm } from "../../hooks/useForm";

function Login() {

    const { values, onChange, onSubmit } = useForm( {
        email: '',
        password: ''
    });

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Login</h6>
                    <h1 className="mb-5">Login in system</h1>
                </div>
                <div className="row g-3">
                    <form onSubmit={onSubmit}>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" onChange={onChange} value={values.email} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={onChange} value={values.password} />
                                    <label htmlFor="duration">Password</label>
                                </div>
                            </div>

                            {/* <div className="col-md-12">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" value={values.remember} id="remember" name="remember" defaultChecked={values.remember} />
                                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                                </div>
                            </div> */}

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