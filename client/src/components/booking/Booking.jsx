import { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spiner from "../spinner/Spiner";
import AuthContext from "../../contexts/authContext";
import { Paths } from "../../utils/Paths";
import * as bookingService from "../../services/bookingService";

function Booking() {
    const { packageId } = useParams();
    const navigate = useNavigate();
    const { userId, username, email } = useContext(AuthContext);
    const [booking, setBooking] = useState({
        name: username,
        email: email,
        startDate: '2024-08-18',
        count: '2',
        message: ''
    });
    const [showSpinner, setShowSpinner] = useState(false);

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;

        setBooking(state => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const addBookingEvent = async (event) => {
        event.preventDefault();
        setShowSpinner(true);

        try {
            const values = Object.fromEntries(new FormData(event.currentTarget));
            const bookingData = { ...values, packageId };
            await bookingService.create(bookingData);
            setShowSpinner(false);
            toast.success("Tour booking is successfully created");
            navigate(Paths.packages);

        } catch (error) {
            console.log(error);
            toast.error("The is an error with making a booking");
        }
    };

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            {showSpinner && (
                <Spiner />
            )}
            <div className="container">
                <div className="booking p-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 text-white">
                            <h6 className="text-white text-uppercase">Booking</h6>
                            <h1 className="text-white mb-4">Online Booking</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link className="btn btn-outline-light py-3 px-5 mt-2" to={Paths.processing}>Read More</Link>
                        </div>
                        <div className="col-md-6">
                            <h1 className="text-white mb-4">Book A Tour Package</h1>
                            <form onSubmit={addBookingEvent}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" id="name" value={username} placeholder="Your Name" readOnly />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-transparent" id="email" value={email} placeholder="Your Email" readOnly />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="date" className="form-control bg-transparent" id="startDate" name="startDate" value={booking.startDate} min="2024-08-14" max="2025-12-31" onChange={onChange} />
                                            <label htmlFor="startDate">Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select bg-transparent" id="count" name="count" value={booking.count} onChange={onChange}>
                                                <option value="1">Count 1</option>
                                                <option value="2">Count 2</option>
                                                <option value="3">Count 3</option>
                                            </select>
                                            <label htmlFor="count">Number of packages</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" name="message" value={booking.message} onChange={onChange} style={{ height: "100px" }}></textarea>
                                            <label htmlFor="message">Special Request</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-outline-light w-100 py-3" type="submit" >Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;