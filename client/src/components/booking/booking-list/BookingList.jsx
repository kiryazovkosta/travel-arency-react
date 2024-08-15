import { useState, useEffect } from "react";

import * as bookingService from '../../../services/bookingService';

import { formatDate } from '../../../utils/DateTimeUtils'

function BookingList() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        bookingService.getAll()
            .then(setBookings);
    }, []);

    console.log(bookings);
    

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Bookings</h6>
                    <h1 className="mb-5">List of created bookings</h1>
                </div>
                {/* ToDo: Create separate component */}
                <div className="row g-4">
                    {bookings.map((booking) => {
                        return (
                            <div key={booking._id} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <p><i className="fa fa-calendar fa-2x"></i> Created <time className="created-on-time">{formatDate(booking._createdOn)}</time></p>
                                
                                        <p>Starts on: <strong>{booking.startDate}</strong></p>
                                        <p>Nuber of packages: {booking.count}</p>
                                        <p>Requests: {booking.message}</p>
                                        <p>Made by {booking.owner.username}</p>
                                        <p>{booking.owner.email}</p>
                                        <p>Destination {booking.pkg.title}</p>

                                        <img src={booking.pkg.imageUrl} alt="{booking.pkg.imageUrl" style={{width: "250px", height: "150px"}} />
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookingList;