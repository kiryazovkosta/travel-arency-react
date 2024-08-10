import { Link } from 'react-router-dom';

import { Paths } from '../../utils/Paths';
import SignUp from '../sign-up/SignUp';



function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Company</h4>
                        <Link className="btn btn-link" to={Paths.about}>About Us</Link>
                        <Link className="btn btn-link" to={Paths.contact}>Contact Us</Link>
                        <Link className="btn btn-link" to="/primary-policy">Privacy Policy</Link>
                        <Link className="btn btn-link" to="/terms">Terms & Condition</Link>
                        <Link className="btn btn-link" to="/help">FAQs & Help</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" to="https://facebook.com" target='_blank'><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="https://res.cloudinary.com/dfn7thtsx/image/upload/v1723110752/footer1_ptf7ng.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="https://res.cloudinary.com/dfn7thtsx/image/upload/v1723110752/footer2_ksnxui.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="https://res.cloudinary.com/dfn7thtsx/image/upload/v1723110752/footer3_tkcfig.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="https://res.cloudinary.com/dfn7thtsx/image/upload/v1723110752/footer4_wrevcc.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="https://res.cloudinary.com/dfn7thtsx/image/upload/v1723110752/footer5_uavutq.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="https://res.cloudinary.com/dfn7thtsx/image/upload/v1723110753/footer6_jvyv44.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <SignUp />
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="/">Your Site Name</Link>, All Right Reserved.
                            Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link>
                                <Link to="/cookies">Cookies</Link>
                                <Link to="/help">Help</Link>
                                <Link to="/fqs">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer