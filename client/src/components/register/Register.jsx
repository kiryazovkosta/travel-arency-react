import { useEffect, useContext } from "react"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
    Username: 'username',
    Avatar: 'avatar'
}

function Register() {
    
    const { registerSubmitHandler, error, clearError } = useContext(AuthContext);

    const { values, onChange } = useForm((e) => {
        onSubmitHandler(e);
    }, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Avatar]: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await registerSubmitHandler(values);
        if (error) {
            toast.error(error);
            clearError();
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);
    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Register</h6>
                    <h1 className="mb-5">Create a new user</h1>
                </div>
                <div className="row g-3">
                    <form onSubmit={onSubmitHandler}>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id={RegisterFormKeys.Email}
                                        name={RegisterFormKeys.Email}
                                        placeholder="Enter your email"
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.Email]} />
                                    <label htmlFor={RegisterFormKeys.Email}>Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id={RegisterFormKeys.Password}
                                        name={RegisterFormKeys.Password}
                                        placeholder="Enter your password"
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.Password]} />
                                    <label htmlFor={RegisterFormKeys.Password}>Password</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="password"
                                        className="form-control"
                                        id={RegisterFormKeys.ConfirmPassword}
                                        name={RegisterFormKeys.ConfirmPassword}
                                        placeholder="Confirm your password"
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.ConfirmPassword]} />
                                    <label htmlFor={RegisterFormKeys.ConfirmPassword}>Confirm password</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text"
                                        className="form-control"
                                        id={RegisterFormKeys.Username}
                                        name={RegisterFormKeys.Username}
                                        placeholder="Enter your username"
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.Username]} />
                                    <label htmlFor={RegisterFormKeys.Username}>Username</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={RegisterFormKeys.Avatar}
                                        name={RegisterFormKeys.Avatar}
                                        placeholder="Enter your avatar"
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.Avatar]} />
                                    <label htmlFor={RegisterFormKeys.Avatar}>Avatar</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
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